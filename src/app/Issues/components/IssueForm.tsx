'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, Loader2 } from 'lucide-react'
import {zodResolver} from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/createIssueSchema'
import {z} from 'zod';
import prisma from '@/lib/db/prisma'
import { Issue } from '@prisma/client'
import SimpleMDE from 'react-simplemde-editor'
//using axios to submit the form to API

type IssueFormData = z.infer<typeof createIssueSchema>

interface Form {
  title: string;
  description: string;
  issue?: Issue
}

const IssueForm = ({issue}:{issue?:Issue}) => {
  const {register, control, handleSubmit, formState:{errors}} = useForm<Form>({
    resolver: zodResolver(createIssueSchema)
  });
  const router = useRouter();
  const [error, setError] = useState('')
  const [isSubmit, setSubmit] = useState(false)
  const {toast} = useToast();

  return (
    <div className='p-8 space-y-4 max-w-xl'>
      {error && 
        <div>
          <Alert className='bg-red-500 text-white outline-none'>
            <AlertCircle className="h-4 w-4 text-white" color='#ffffff'/>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      }
      <form onSubmit={handleSubmit(async(data)=>{
      try {
        setSubmit(true)
        if(issue) axios.patch('/api/issues/' + issue.id, data);
        else await axios.post('/api/issues', data);
        window.location.href = "/Issues"
        router.push('/Issues');
      } catch (error) {
        console.error("Error:", error);
        setSubmit(false)
        setError('Something unexpected has happened');
      }      
    })} className='max-w-2xl space-y-4'>
        <Input defaultValue={issue?.title} placeholder='Title' {...register('title')}/>
        {errors.title && <p className=' text-red-800 font-semibold'>Title is Required</p>}
        <Controller  defaultValue={issue?.description} name='description' control={control} render={({field})=><SimpleMDE placeholder='Description' {...field} className='bg-secondary rounded-lg'/>}/>
        {errors.description && <p className='text-red-800 font-semibold'>Description is Required</p>}
        <Button className='rounded-full'>
          {issue ? 'Update Issue ' : 'Submit New Issue '}{' '}{!isSubmit ? <p> </p> : <p className='ml-2'><Loader2 className=' animate-spin'/></p>}
        </Button>
      </form>
    </div>
  )
}

export default IssueForm