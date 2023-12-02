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
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Toast } from '@/components/ui/toast'
//using axios to submit the form to API

type IssueFormData = z.infer<typeof createIssueSchema>

interface Form {
  title: string;
  description: string;
  // desiredAmt: string;
  // annualAmt: string;
  // fullName: string;
  // businessType: string;
  // phoneNo: string;
  // tele: string;
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
    <div className='p-8 space-y-4 w-full'>
      {error && 
        <div>
          <Alert className='bg-red-500 text-white outline-none max-w-2xl'>
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
        console.log('reached')
        if(issue) axios.patch('/api/issues/' + issue.id, data);
        else await axios.post('/api/issues', data);
        window.location.href = "/"
        router.push('/');

      } catch (error) {
        console.error("Error:", error);
        setSubmit(false)
        setError('Something unexpected has happened');
      }      
    })} className='max-w-2xl space-y-4 mx-auto bg-white/50 p-6 rounded-md'>
        <h1 className='text-center text-xl font-semibold'>File A Report</h1>
        
        {/* <Input id='amount' placeholder='Full Name'/>
        <div className='flex flex-col sm:flex-row gap-4'>
        <Input id='amount' placeholder='Desired Amount'/>
        <Input id='income' placeholder='Annual Income'/>
        </div>

        <div className='flex flex-col sm:flex-row gap-4'>
        <Input id='amount' placeholder='Business Type'/>
        <Input id='income' placeholder='Phone No.'/>
        </div>

        <div className='flex flex-col sm:flex-row gap-4'>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Telecom Provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem className='cursor-pointer' value="Jio">Jio</SelectItem>
              <SelectItem className='cursor-pointer' value="Airtel">Airtel</SelectItem>
              <SelectItem className='cursor-pointer' value="BSNL">BSNL</SelectItem>
              <SelectItem className='cursor-pointer' value="Quadrant">Quadrant</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex max-w-sm items-center space-x-2">
          <Switch id="concent" />
          <Label className='text-red-500' htmlFor="concent">Concent to Access your Telecom Data and GeoLocation to build the Metric.</Label>
        </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-4'>
        <Input id='amount' placeholder='Pan-Card Number'/>
        </div>

        <Separator/> */}
        
        <Input defaultValue={issue?.title} placeholder='Title of your Report' {...register('title')}/>
        {errors.title && <p className=' text-red-800 font-semibold'>Title is Required</p>}
        
        <Controller  defaultValue={issue?.description} name='description' control={control} render={({field})=><SimpleMDE placeholder='Explain Your Concerns in detail' {...field} className='bg-secondary rounded-lg'/>}/>
        {errors.description && <p className='text-red-800 font-semibold'>Description is Required</p>}
        
        <Button className='rounded-md'>
          {issue ? 'Update ' : 'Submit '}{' '}{!isSubmit ? <p> </p> : <p className='ml-2'><Loader2 className=' animate-spin'/></p>}
        </Button>
      </form>
    </div>
  )
}

export default IssueForm