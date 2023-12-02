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
        <SelectTrigger className='w-40 bg-secondary text-primary'>
          <SelectValue className='bg-secondary text-primary' placeholder="Filter by status..."/>
        </SelectTrigger>
        <SelectContent className='bg-secondary text-primary'>
            {Props.map((prop,index) => <SelectItem className='cursor-pointer bg-secondary text-primary' key={prop.value !== undefined ? prop.value : index} value={prop.value || 'All'}>
                {prop.label}
            </SelectItem>)}
        </SelectContent>
    </Select>
    </div>
  )
}

export default IssueFilter