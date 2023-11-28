import { createIssueSchema } from "@/app/createIssueSchema";
import prisma from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request:NextRequest, {params}:{params:{id:string}}){
    const body = await request.json();
    const valid = createIssueSchema.safeParse(body);
    if(!valid.success) return NextResponse.json(valid.error.format(), {status:400})
    const issue = await prisma.issue.findUnique({
        where:{id:String(params.id)}
    })
    if(!issue) return NextResponse.json({error:"Invalid issue"}, {status:404})
    
    const updatedIssue = await prisma.issue.update({
        where:{id:issue.id},
        data:{
            title:body.title,
            description:body.description
        }
    })

    return NextResponse.json(updatedIssue)
}