'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from 'react-hook-form'

interface Form {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const {register, control, handleSubmit} = useForm<Form>();

  return (
    <form onSubmit={handleSubmit((data)=>console.log(data))} className='max-w-2xl p-8 space-y-4'>
        <Input placeholder='Title' {...register('title')}/>
        <Controller name='description' control={control} render={({field})=><SimpleMDE placeholder='Description' {...field} className='bg-secondary rounded-lg'/>}/>
        
        <Button className='rounded-full'>
            Submit New Issue
        </Button>
    </form>
  )
}

export default NewIssuePage