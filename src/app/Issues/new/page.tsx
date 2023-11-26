'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

type Props = {}

const NewIssuePage = (props: Props) => {
  return (
    <div className='max-w-2xl p-8 space-y-2'>
        <Input placeholder='Title'/>
        <Textarea placeholder='Description'/>
        <Button>
            Submit New Issue
        </Button>
    </div>
  )
}

export default NewIssuePage