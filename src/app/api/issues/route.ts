import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod';
import prisma from "@/lib/db/prisma";

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

export async function POST(request: NextRequest){
    const body = await request.json();
    const valid = createIssueSchema.safeParse(body)

    if(!valid.success){
        return NextResponse.json(valid.error.errors, {status:400})
    }

    const newIssue = await prisma.issue.create({
        data: {title:body.title, description:body.description}
    })

    return NextResponse.json(newIssue, {status: 201});

}