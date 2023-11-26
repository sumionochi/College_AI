import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const IssuePage = (props: Props) => {
  return (
    <div className='p-4'>
      <Button className='text-white'>
        <Link href='/Issues/new'>
          New Issue
        </Link>
      </Button>
    </div>
  )
}

export default IssuePage