
import prisma from '@/lib/db/prisma'
import { notFound } from 'next/navigation'
import React from 'react'
import dynamic from 'next/dynamic'

const IssueForm = dynamic(
  ()=>import('@/app/Issues/components/IssueForm'),
  {ssr:false}
)

interface Props {
  params: {id: string}
}

const NewIssuePage = async ({params}: Props) => {
  return (
    <IssueForm/>
  )
}

export default NewIssuePage