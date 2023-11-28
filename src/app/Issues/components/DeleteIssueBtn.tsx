'use client'
import React, { useState } from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type Props = {
    issueId:string
}

const DeleteIssueBtn = ({issueId}: Props) => {
  const router = useRouter();  
  const [error, setError] = useState(false)
  return (
    <>
    {error ? <AlertDialog open={error}>
        <AlertDialogContent>
          <AlertDialogHeader className='flex gap-0 flex-col'>
          <AlertDialogTitle>An Error Occured</AlertDialogTitle>
          <AlertDialogDescription>This issue could not be deleted</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
          <Button onClick={()=>{setError(false)}} color='gray' className=''>Ok</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog> : <AlertDialog>
        <AlertDialogTrigger asChild>
                <Button className='bg-red-500 hover:bg-red-500/70'>
                    <Trash className='w-4 mr-2'/>
                    Delete Issue
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
                  <AlertDialogAction onClick={async()=>{
                    try {
                      // throw new Error();
                      await axios.delete(`/api/issues/`+ issueId)
                      router.push(`/Issues`)
                      router.refresh();
                    } catch (error) {
                      setError(true)
                    }
                  }} className='bg-red-500 hover:bg-red-500/70'>Delete</AlertDialogAction>
                </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>}
    </>
  )
}

export default DeleteIssueBtn