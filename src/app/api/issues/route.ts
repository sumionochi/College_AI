import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";
import { createIssueSchema } from "../../createIssueSchema";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function POST(request: NextRequest){
    const session = await getServerSession(authOptions)
    if(!session) return NextResponse.json({},{status:401})
    const body = await request.json();
    const valid = createIssueSchema.safeParse(body)

    if(!valid.success){
        return NextResponse.json(valid.error.format(), {status:400})
    }

    const newIssue = await prisma.issue.create({
        data: {title:body.title, description:body.description}
    })

    return NextResponse.json(newIssue, {status: 201});

}