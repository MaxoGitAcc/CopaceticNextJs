'use client'

import React from 'react'

const StartTask = () => {
  return (
    <section className='bg-blue-950 mt-[2rem] p-[1rem] rounded-2xl max-w-3/4 mx-auto'>
        <div className='flex flex-col items-center justify-center space-y-[1rem] p-2'>
            <div className='flex gap-[6rem]'>
                <div className='flex flex-col items-center justify-center'>
                    <h1>Time Remaining</h1>
                    <h2>23:59:59</h2>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h1>Words for Today</h1>
                    <h2>3</h2>
                </div>
            </div>


            <button className="w-full mt-6 py-3 rounded-xl border border-blue-400
                bg-blue-900 hover:bg-blue-800 transition-all duration-200
                hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] cursor-pointer">
                Start
            </button>
        </div>
    </section>
  )
}

export default StartTask