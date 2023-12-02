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
    <div className='flex flex-col justify-center sm:flex-row w-full'>
      <div className='max-w-5xl m-4 p-4 space-y-6 bg-secondary rounded-md'>
        <div className='flex flex-col gap-4 justify-between'>
          <h1 className='font-semibold text-2xl mr-2'>{issue.title}</h1>
          {session && <div className='flex flex-col sm:flex-row gap-2'>
            <AssignSelect issues={issue}/>
            <Button className=''>
              <PencilLine className='w-4 mr-2'/>
              <Link href={`/Issues/${issue.id}/edit`}>Accept/In Progress</Link>
            </Button>
            <DeleteIssueBtn issueId={issue.id}/>
          </div>}
        </div>
        <div className='flex flex-row gap-2'>
          <IssueStatusBadge status={issue.status}/>
          <p>{issue.createdAt.toDateString()}</p>
        </div>
        <Card className='rounded-md bg-white p-2 prose'>
          <ReactMarkdown className={'text-black'}>{issue.description}</ReactMarkdown>
        </Card>
      </div>
      {/* <div className='flex-3 flex-col flex items-center bg-secondary/100 rounded-md mt-4 mr-4 h-1/2'>
        <div className='flex flex-row p-4 gap-6'>
          <div className=''>
          <HoverCard>
                <HoverCardTrigger asChild>
                  <div className='flex flex-col justify-center cursor-pointer items-center gap-2 p-4 text-center bg-primary/20 rounded-md'>
                    <h6>Annual Expenses</h6>
                    <Info className=''/>
                    <p className=' text-lg'>Rs. 1,500,000</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Annual Expenses</h4>
                      <p className="text-sm">
                      Annual Expenses of the Loan Applicant: Rs. 1,500,000
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
                    <h6>Current Annual Revenue</h6>
                    <Info className=''/>
                    <p className=' text-lg'>Rs. 2,000,000</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Current Annual Revenue</h4>
                      <p className="text-sm">
                      Current Annual Revenue of Loan Applicant: Rs. 2,000,000
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
                    <h6>Current Surpluse</h6>
                    <Info className=''/>
                    <p className=' text-lg'>Rs. 500,000</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Current Surplus</h4>
                      <p className="text-sm">
                      Loan Applicant is under Current Surplus of: Rs. 500,000
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
                    <h6>Collateral</h6>
                    <Info className=''/>
                    <p className=' text-lg'>Rs +150,000</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Collateral</h4>
                      <p className="text-sm">
                      Collateral 2: School Buses (Valued at Rs. 150,000 each)
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
          <h1 className='text-center text-white text-lg'>Spending Expenditure</h1>
          <DataChart type="doughnut" data={doughnutChartData}/>
        </div>
      </div> */}
    </div>
  )
}

export default IssueDetailPage