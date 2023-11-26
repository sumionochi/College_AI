'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

type Props = {}

const NewIssuePage = (props: Props) => {
  return (
    <div className='max-w-2xl p-8 space-y-4'>
        <Input placeholder='Title'/>
        <SimpleMDE placeholder='Description' className='bg-secondary rounded-lg'/>
        <Button className='rounded-full'>
            Submit New Issue
        </Button>
    </div>
  )
}

export default NewIssuePage