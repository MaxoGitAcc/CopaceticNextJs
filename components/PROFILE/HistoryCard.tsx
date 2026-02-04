import React from 'react'

const HistoryCard = () => {
  return (
    <section className='bg-blue-950 mt-[2rem] p-[1rem] rounded-2xl max-w-3/4 mx-auto'>
        <div className='flex items-center justify-around gap-[4rem] p-3'>
            <div className='flex flex-col items-center justify-center'>
                <h1>Started</h1>
                <h2>19 oct 2004</h2>
            </div>
            <div className='flex flex-col items-cneter justify-center'>
                <h1>Streak</h1>
                <h2>0 days</h2>
            </div>
        </div>
    </section>
  )
}

export default HistoryCard