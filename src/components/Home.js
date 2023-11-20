import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0A192F]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-white'>Hi, my name is</p>
        <h1 className='text 4-xl sm:text-7xl font-bold text-[#ccd6f6]'>Brendan Quirk</h1>
        <h2 className='text 4-xl sm:text-7xl font-bold text-[#8892b0]'>Full Stack Engineer and Instructor.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I enjoy crafting unique full stack user experiences.</p>
        <div>
          <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] hover:border-[#8892b0]'>View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
          </span>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Home