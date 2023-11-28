'use client'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Issue, User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {}

const AssignSelect = ({issues}:{issues:Issue}) => {
    const {data: users, error, isLoading} = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: () => axios.get('/api/users').then(res => res.data),
        staleTime: 60 * 1000,
        retry: 3
    })
    if(error) return null
    console.log(issues.assignedToUserId)
    return (
        <Select 
        onValueChange={(userId)=>{
            axios.patch('/api/issues/' + issues.id,{assignedToUserId: userId || null})
        }}
        defaultValue={issues.assignedToUserId || ""}
        >
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Assign..." />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup className='m-2'>
                <SelectLabel>Suggestions</SelectLabel>
                {/* <SelectItem className=' cursor-pointer' value={'unassigned'}>Unassigned</SelectItem> */}
                {users?.map(user=>(<SelectItem className='cursor-pointer' key={user.id} value={user.id}>{user.name}</SelectItem>))}
            </SelectGroup>
        </SelectContent>
        </Select>

    )
}

export default AssignSelect