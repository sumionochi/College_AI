import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";
import { createIssueSchema } from "../../createIssueSchema";
import { getEmbedding } from "@/lib/openai";
import { notesIndex } from "@/lib/db/pinecone";

export async function POST(request: NextRequest){
    
    
    const body = await request.json();
    const valid = createIssueSchema.safeParse(body)
    if(!valid.success){
        return NextResponse.json(valid.error.format(), {status:400})
    }

    const embedding = await getEmbeddingForNote(body.title, body.description);

    const newIssue = await prisma.$transaction(async (tx) => {
        const newIssue = await prisma.issue.create({
            data: {
                title:body.title, 
                description:body.description,
                // desiredAmt:body.desiredAmt,
                // annualAmt:body.annualAmt,
                // fullName:body.fullName,
                // businessType:body.businessType,
                // phoneNo:body.phoneNo,
                // tele:body.tele,
            }
        })
        
        await notesIndex.upsert([
            {
              id: newIssue.id,
              values: embedding,
            
            },
          ]);
          return newIssue
    })

   

    return NextResponse.json(newIssue, {status: 201});

}

async function getEmbeddingForNote(title: string, description: string | undefined) {
    return getEmbedding(title + "\n\n" + description ?? "");
  }