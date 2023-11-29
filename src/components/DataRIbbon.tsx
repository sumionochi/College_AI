import React from 'react'
import DataCard from './DataCard'

type Props = {}

const DataRIbbon = (props: Props) => {
  return (
    <div>
        <h1>Data Ribbon</h1>
        <DataCard/>
        <DataCard/>
        <DataCard/>
    </div>
  )
}

export default DataRIbbon