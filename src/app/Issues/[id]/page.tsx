import IssueStatusBadge from '@/components/IssueStatusBadge'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import prisma from '@/lib/db/prisma'
import { Pencil, PencilLine, Trash } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import ReactMarkdown from 'react-markdown';

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
    <div>
      <div className='max-w-3xl m-4 p-4 space-y-2 bg-secondary rounded-md'>
        <div className='flex flex-row justify-between'>
          <h1 className='font-semibold text-2xl'>{issue.title}</h1>
          <div className='flex flex-col sm:flex-row gap-2'>
            <Button className=''>
              <PencilLine className='w-4 mr-2'/>
              <Link href={`/Issues/${issue.id}/edit`}>Edit Issue</Link>
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className='bg-red-500'>
                <Trash className='w-4 mr-2'/>
                <Link href={`/Issues/${issue.id}/delete`}>Delete Issue</Link>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm the Deletion?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className='bg-red-500'>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div className='flex flex-row gap-2'>
          <IssueStatusBadge status={issue.status}/>
          <p>{issue.createdAt.toDateString()}</p>
        </div>
        <Card className='rounded-md p-2 prose'>
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </div>
    </div>
  )
}

export default IssueDetailPage