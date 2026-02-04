'use client'

import React from 'react'
import StatsCard from '@/components/PROFILE/StatsCard'
import StartTask from '@/components/PROFILE/StartTask'
import HistoryCard from '@/components/PROFILE/HistoryCard'
import { useSearchParams } from "next/navigation";

const page = () => {
  const sp = useSearchParams();
  const name = sp.get("name") ?? "";

  return (
    <div>
        <StatsCard name={name}/>
        <StartTask />
        <HistoryCard />
    </div>
  )
}

export default page