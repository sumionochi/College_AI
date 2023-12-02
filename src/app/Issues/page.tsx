import IssueStatusBadge from '@/components/IssueStatusBadge'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import prisma from '@/lib/db/prisma'
import delay from 'delay'
import Link from 'next/link'
import IssueFilter from '../list/IssueFilter'
import { Status } from '@prisma/client'
import Pagination from '@/components/Pagination'
import AIChatBox from '@/components/AIChatBox'
import AIChatButton from '@/components/AIChatButton'
import LatestIssue from '@/components/LatestIssue'
import IssueChart from '@/components/IssueChart'

interface Props {
  searchParams: {status:Status, page:string}
}

const IssuePage = async ({searchParams}:Props) => { 
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status) ? searchParams.status : undefined
  const where = {status}
  const page = parseInt(searchParams.page )|| 1;
  const pageSize = 5;

  const issues = await prisma.issue.findMany({
    where:{
      status
    },
    skip: (page-1)*pageSize,
    take: pageSize
  });

  const open = await prisma.issue.count({where:{status:'OPEN'}})  
  const closed = await prisma.issue.count({where:{status:'CLOSED'}})  
  const inProgress = await prisma.issue.count({where:{status:'IN_PROGRESS'}})  

  const issueCount = await prisma.issue.count({where: {status}})
  return (
    <div className='flex flex-col items-center'>
      <div className='p-4 flex flex-col gap-4 w-full sm:w-1/2'>
      <LatestIssue open={open} inProgress={inProgress} closed={closed}/>
      <IssueChart open={open} inProgress={inProgress} closed={closed}></IssueChart>
      </div>
      <div className='p-4 space-y-4 flex flex-1 items-center flex-col w-full sm:w-1/2'>
      <div className='flex flex-row items-center max-w-2xl gap-4'>
        <IssueFilter/>
        <AIChatButton/>
      </div>
      <Table className='bg-secondary p-4 text-primary rounded-lg mx-auto'>
        <TableCaption className='text-primary bg-secondary p-2 max-w-sm rounded-lg mx-auto'>A list of All Reports Filed.</TableCaption>
        <TableHeader>
          <TableRow className='hover:bg-transparent'>
            <TableHead className='text-primary'>Issue</TableHead>
            <TableHead className='text-primary hidden sm:table-cell'>Status</TableHead>
            <TableHead className='text-primary hidden md:table-cell'>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map(issue => (
            <TableRow className='hover:bg-transparent cursor-pointer' key={issue.id}>
              <TableHead className='hover:text-semibold text-primary underline underline-offset-2 hover:no-underline'><Link href={`/Issues/${(issue.id)}`}>{issue.title}</Link></TableHead>
              <TableHead className='text-primary hidden sm:table-cell'><IssueStatusBadge status={issue.status}/></TableHead>
              <TableHead className='text-primary hidden md:table-cell'>{issue.createdAt.toDateString()}</TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination pageSize={pageSize} currPage={page} itemCount={issueCount}/>
      </div>   
    </div>
  )
}

export default IssuePage