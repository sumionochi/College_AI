import { Status } from '@prisma/client'
import React from 'react'
import { Badge } from './ui/badge'

interface Props {
  status: Status
}

const statusMap: Record<Status, {label: string, color: 'bg-red-400 text-white rounded-md' | 'bg-violet-400 text-white rounded-md' | 'bg-teal-400 text-white rounded-md'}> = {
  OPEN: {label: 'Open', color: 'bg-red-400 text-white rounded-md'},
  IN_PROGRESS: {label: 'In Progress', color: 'bg-violet-400 text-white rounded-md'},
  CLOSED: {label: 'Closed', color: 'bg-teal-400 text-white rounded-md'}
};

const IssueStatusBadge = ({status}: Props) => {
  return (
    <Badge className={`${statusMap[status].color}`}>
      {statusMap[status].label}
    </Badge>
  )
}

export default IssueStatusBadge