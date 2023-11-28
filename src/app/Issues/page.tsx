import IssueStatusBadge from '@/components/IssueStatusBadge'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import prisma from '@/lib/db/prisma'
import delay from 'delay'
import Link from 'next/link'
import IssueFilter from '../list/IssueFilter'
import { Status } from '@prisma/client'
import Pagination from '@/components/Pagination'

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

  const issueCount = await prisma.issue.count({where: {status}})
  console.log(page, pageSize, issueCount)
  await delay(1000)
  return (
    <div className='p-4 space-y-4 flex items-center flex-col'>
      <div className='flex flex-row items-center max-w-xl gap-4'>
        <Button className=''>
          <Link href='/Issues/new'>
            New Issue
          </Link>
        </Button>
        <IssueFilter/>
      </div>
      <Table className='bg-primary mx-auto rounded-lg max-w-xl'>
        <TableCaption className='text-secondary bg-primary p-2 max-w-sm rounded-lg mx-auto'>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className='hover:bg-transparent'>
            <TableHead className='text-secondary'>Issue</TableHead>
            <TableHead className='text-secondary'>Status</TableHead>
            <TableHead className='text-secondary hidden md:table-cell'>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map(issue => (
            <TableRow className='hover:bg-transparent cursor-pointer' key={issue.id}>
              <TableHead className='hover:text-semibold text-secondary underline underline-offset-2 hover:no-underline'><Link href={`/Issues/${(issue.id)}`}>{issue.title}</Link></TableHead>
              <TableHead className=''><IssueStatusBadge status={issue.status}/></TableHead>
              <TableHead className='text-secondary hidden md:table-cell'>{issue.createdAt.toDateString()}</TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination pageSize={pageSize} currPage={page} itemCount={issueCount}/>
    </div>
  )
}

export const dynamic = 'force-dynamic';

export default IssuePage