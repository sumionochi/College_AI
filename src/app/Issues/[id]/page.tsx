import IssueStatusBadge from '@/components/IssueStatusBadge'
import { Card } from '@/components/ui/card'
import prisma from '@/lib/db/prisma'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: {id:string}
}

const IssueDetailPage = async({params}: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {id: String(params.id)}
  })  

  if(!issue){
    console.log(issue)
    return notFound()
  }

  return (
    <div className='max-w-xl m-4 p-4 space-y-2 bg-secondary rounded-md'>
        <h1 className='font-semibold text-2xl'>{issue.title}</h1>
        <div className='flex flex-row gap-2'>
          <IssueStatusBadge status={issue.status}/>
          <p>{issue.createdAt.toDateString()}</p>
        </div>
        <Card className='rounded-md p-2'>
          <p>{issue.description}</p>
        </Card>
    </div>
  )
}

export default IssueDetailPage