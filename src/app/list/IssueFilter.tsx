'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select'
import { Status } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Props: {label:string,value?: Status}[] = [
    {label: 'ALL'},
    {label: 'Open', value: 'OPEN'},
    {label: 'In Progress', value: 'IN_PROGRESS'},
    {label: 'Closed', value: 'CLOSED'},
]

const IssueFilter = () => {
  const router = useRouter()
  return (
    <div>
      <Select onValueChange={(status)=>{const query = status ? `?status=${status}` : ``; router.push('/Issues' + query)}}>
        <SelectTrigger className='w-40 bg-primary text-secondary'>
          <SelectValue placeholder="Filter by status..."/>
        </SelectTrigger>
        <SelectContent className='bg-primary text-secondary'>
            {Props.map((prop,index) => <SelectItem className='bg-primary cursor-pointer text-secondary' key={prop.value !== undefined ? prop.value : index} value={prop.value || 'All'}>
                {prop.label}
            </SelectItem>)}
        </SelectContent>
    </Select>
    </div>
  )
}

export default IssueFilter