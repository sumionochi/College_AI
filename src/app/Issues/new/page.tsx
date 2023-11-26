'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'
import {zodResolver} from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/createIssueSchema'
import {z} from 'zod';
//using axios to submit the form to API

type IssueForm = z.infer<typeof createIssueSchema>

interface Form {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const {register, control, handleSubmit, formState:{errors}} = useForm<Form>({
    resolver: zodResolver(createIssueSchema)
  });
  const router = useRouter();
  const [error, setError] = useState('')
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
        await axios.post('/api/issues', data);
        router.push('/issues');
      } catch (error) {
        setError('Something unexpected has happened');
      }      
    })} className='max-w-2xl space-y-4'>
        <Input placeholder='Title' {...register('title')}/>
        {errors.title && <p className=' text-red-800 font-semibold'>Title is Required</p>}
        <Controller name='description' control={control} render={({field})=><SimpleMDE placeholder='Description' {...field} className='bg-secondary rounded-lg'/>}/>
        {errors.description && <p className='text-red-800 font-semibold'>Description is Required</p>}
        <Button className='rounded-full'>
            Submit New Issue
        </Button>
      </form>
    </div>
  )
}

export default NewIssuePage