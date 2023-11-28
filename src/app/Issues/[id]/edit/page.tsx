import IssueForm from '../../components/IssueForm'  
import prisma from '@/lib/db/prisma'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
  params: {id: string}
}

const EditIssuePage = async ({params}: Props) => {
  const issue = await prisma.issue.findUnique({
    where:{id:(params.id)}
  })
  if(!issue) notFound();
  return (
    <IssueForm issue={issue}/>
  )
}

export default EditIssuePage