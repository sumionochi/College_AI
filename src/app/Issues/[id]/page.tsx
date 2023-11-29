import IssueStatusBadge from '@/components/IssueStatusBadge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import prisma from '@/lib/db/prisma'
import axios from 'axios'
import { Info, Pencil, PencilLine, Trash } from 'lucide-react'
import Link from 'next/link'
import { notFound} from 'next/navigation'
import React from 'react'
import ReactMarkdown from 'react-markdown';
import DeleteIssueBtn from '../components/DeleteIssueBtn'
import { getServerSession } from 'next-auth'
import authOptions from '@/app/auth/authOptions'
import AssignSelect from './AssignSelect'
import DataRIbbon from '@/components/DataRIbbon'
import { CalendarDays } from "lucide-react"
 
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import DataChart from '@/components/DataChart'
import { doughnutChartData, lineChartData } from '@/helper/mockData'
import Transactions from '@/components/Transactions'

interface Props {
    params: {id:string}
}

const IssueDetailPage = async({params}: Props) => {
  const session = await getServerSession(authOptions)
  const issue = await prisma.issue.findUnique({
    where: {id: String(params.id)}
  })  

  if(!issue){
    console.log(issue)
    return notFound()
  }

  return (
    <div className='flex flex-col sm:flex-row w-full'>
      <div className='max-w-2xl m-4 p-4 space-y-6 bg-secondary rounded-md'>
        <div className='flex flex-col gap-4 justify-between'>
          <h1 className='font-semibold text-2xl mr-2'>{issue.title}</h1>
          {session && <div className='flex flex-col sm:flex-row gap-2'>
            <AssignSelect issues={issue}/>
            <Button className=''>
              <PencilLine className='w-4 mr-2'/>
              <Link href={`/Issues/${issue.id}/edit`}>Accept</Link>
            </Button>
            <DeleteIssueBtn issueId={issue.id}/>
          </div>}
        </div>
        <div className='flex flex-row gap-2'>
          <IssueStatusBadge status={issue.status}/>
          <p>{issue.createdAt.toDateString()}</p>
        </div>
        <Card className='rounded-md p-2 prose'>
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </div>
      <div className='flex-1 flex-col flex items-center bg-secondary/100 rounded-md mt-4 mr-4 h-1/2'>
        <div className='flex flex-row p-4 gap-6'>
          <div className=''>
          <HoverCard>
                <HoverCardTrigger asChild>
                  <div className='flex flex-col justify-center cursor-pointer items-center gap-2 p-4 text-center bg-primary/20 rounded-md'>
                    <h6>Total Sales</h6>
                    <Info className=''/>
                    <p className=' text-lg'>462</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Total Sales</h4>
                      <p className="text-sm">
                        The total of all DataSoft products in the current financial year is 462
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Until December 2023
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
          </HoverCard>  
          </div>
          <div>
          <HoverCard>
                <HoverCardTrigger asChild>
                  <div className='flex  flex-col justify-center cursor-pointer items-center gap-2 p-4 text-center bg-primary/20 rounded-md'>
                    <h6>Total Value</h6>
                    <Info className=''/>
                    <p className=' text-lg'>462</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Total Sales</h4>
                      <p className="text-sm">
                        The total of all DataSoft products in the current financial year is 462
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Until December 2023
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
          </HoverCard>  
          </div>
          <div>
          <HoverCard>
                <HoverCardTrigger asChild>
                  <div className='flex flex-col justify-center cursor-pointer items-center gap-2 p-4 text-center bg-primary/20 rounded-md'>
                    <h6>Avg. Order Value</h6>
                    <Info className=''/>
                    <p className=' text-lg'>462</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Total Sales</h4>
                      <p className="text-sm">
                        The total of all DataSoft products in the current financial year is 462
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Until December 2023
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
          </HoverCard>  
          </div>
          <div>
          <HoverCard>
                <HoverCardTrigger asChild>
                  <div className='flex flex-col justify-center cursor-pointer items-center gap-2 p-4 text-center bg-primary/20 rounded-md'>
                    <h6>Conversion rate</h6>
                    <Info className=''/>
                    <p className=' text-lg'>462</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Total Sales</h4>
                      <p className="text-sm">
                        The total of all DataSoft products in the current financial year is 462
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Until December 2023
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
          </HoverCard>  
          </div>
        </div>
        <div className='w-full bg-black/50 p-4'>
          <DataChart type='line' data={lineChartData}/>
        </div>
        <div className='w-full bg-black/50 rounded-b-md space-y-2 p-4'>
          <h1 className='text-center text-white text-lg'>Transactions</h1>
          <DataChart type="doughnut" data={doughnutChartData}/>
        </div>
      </div>
    </div>
  )
}

export default IssueDetailPage