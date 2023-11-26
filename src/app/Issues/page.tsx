import IssueStatusBadge from '@/components/IssueStatusBadge'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import prisma from '@/lib/db/prisma'
import Link from 'next/link'
import React from 'react'

type Props = {}

const IssuePage = async (props: Props) => {
  const issues = await prisma.issue.findMany();

  return (
    <div className='p-4 space-y-4'>
      <Button className=''>
        <Link href='/Issues/new'>
          New Issue
        </Link>
      </Button>
      <Table className='bg-primary rounded-lg max-w-xl'>
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
              <TableHead className='hover:text-semibold text-secondary'>{issue.title}</TableHead>
              <TableHead className=''><IssueStatusBadge status={issue.status}/></TableHead>
              <TableHead className='text-secondary hidden md:table-cell'>{issue.createdAt.toDateString()}</TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default IssuePage