import React from 'react'
import MotionEarth from '../video/MotionEarth.mp4'
const Page6 = () => {
  return (
    <div className='h-screen p-6 bg-white relative'>
        <div className='h-full w-full bg-black rounded-[50px] shadow-xl shadow-gray-700 overflow-hidden '>
        <video autoPlay='true' loop muted className='object-cover h-full w-full' src={MotionEarth}></video>
        <h1 className='absolute font-[Fb4] uppercase text-[36vw] left-36 -bottom-40 '>About</h1>
        </div>
    </div>
  )
}

export default Page6
