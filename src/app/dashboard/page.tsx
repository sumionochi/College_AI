import IssueChart from '@/components/IssueChart'
import LatestIssue from '@/components/LatestIssue'
import prisma from '@/lib/db/prisma'
import React from 'react'

type Props = {}

const Dashboard = async(props: Props) => {
  const open = await prisma.issue.count({where:{status:'OPEN'}})  
  const closed = await prisma.issue.count({where:{status:'CLOSED'}})  
  const inProgress = await prisma.issue.count({where:{status:'IN_PROGRESS'}})  

  return (
    <IssueChart open={open} inProgress={inProgress} closed={closed}></IssueChart>
  )
}

export default Dashboard