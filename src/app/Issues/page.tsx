import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const IssuePage = (props: Props) => {
  return (
    <div className='p-4'>
      <Button className='text-white'>
        New Issue
      </Button>
    </div>
  )
}

export default IssuePage