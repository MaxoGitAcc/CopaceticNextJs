import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center mt-[2rem]'>
        <div className='flex items-center justify-center bg-purple-950 shadow-md glow-blue rounded-3xl p-2'>
            <a target="_blank" href="https://github.com/MaxoGitAcc" className="flex items-center gap-3">
                <img src="https://avatars.githubusercontent.com/u/223145340?s=400&u=a339e478dc339741b4941ddeae489ad6c0063e3e&v=4" alt="pfp"
                    className="w-8 h-8 rounded-full object-cover" />
                <p>@MaxoGitAcc</p>
                <i className="fa-brands fa-github text-2xl"></i>
            </a>
        </div>
    </footer>
  )
}

export default Footer