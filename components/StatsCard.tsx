import React from 'react'

const statsCard = () => {
  return (
    <section className='bg-blue-950 mt-[2rem] p-[1rem] rounded-2xl max-w-3/4 mx-auto'>
        <div className='flex flex-col space-y-[1rem]'>
            <h1>Welcome <span className='text-2xl glow'>MAXO</span></h1>

            <div className='flex gap-[3.5rem] pl-3'>
               <div className='flex flex-col items-center justify-center space-y-2'>
                    <h1>Streak<span className='text-2xl'>🔥</span></h1>
                    <h2>0</h2>
               </div> 
               <div className='flex flex-col items-center justify-center space-y-2'>
                    <h1>Words Seen</h1>
                    <h2>0</h2>
               </div>
               <div className='flex flex-col items-center justify-center space-y-2'>
                    <h1>Accurecy(%)</h1>
                    <h2>0</h2>
               </div>
            </div>

            <input type="text" className='border'/>
        </div>
    </section>
  )
}

export default statsCard