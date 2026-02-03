import React from 'react'
import StatsCard from '@/components/StatsCard'
import StartTask from '@/components/StartTask'
import HistoryCard from '@/components/HistoryCard'

const page = () => {
  return (
    <div>
        <StatsCard />
        <StartTask />
        <HistoryCard />
    </div>
  )
}

export default page