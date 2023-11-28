import authOptions from "@/app/auth/authOptions";
import { patchIssueSchema } from "@/app/createIssueSchema";
import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request:NextRequest, {params}:{params:{id:string}}){
    const session = await getServerSession(authOptions)
    if(!session) return NextResponse.json({},{status:401})
    const body = await request.json();
    const valid = patchIssueSchema.safeParse(body);
    if(!valid.success) return NextResponse.json(valid.error.format(), {status:400})
    const issue = await prisma.issue.findUnique({
        where:{id:String(params.id)}
    })

    const {assignedToUserId} = body;
    if(assignedToUserId){
        const user = await prisma.user.findUnique({where: {id:body.assignedToUserId}})
        if(!user) return NextResponse.json({error:'Invalid user.'},{status:400})
    }

    if(!issue) return NextResponse.json({error:"Invalid issue"}, {status:404})
    
    const updatedIssue = await prisma.issue.update({
        where:{id:issue.id},
        data:{
            title:body.title,
            description:body.description,
            assignedToUserId
        }
    })

    return NextResponse.json(updatedIssue)
}

export async function DELETE(request:NextRequest, {params}:{params:{id:string}}){
    const session = await getServerSession(authOptions)
    if(!session) return NextResponse.json({},{status:401})
    const issue = await prisma.issue.findUnique({
        where:{id:String(params.id)}
    })
    if(!issue) return NextResponse.json({error:"Invalid issue"}, {status:404})
    
    const deleteIssue = await prisma.issue.delete({
        where:{id:issue.id},
    })

    return NextResponse.json({})
}

