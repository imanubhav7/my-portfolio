import React from 'react'
import laptop from '../Image/laptop.avif'
const Page3 = () => {
  return (
    <div className=' relative h-screen flex items-center justify-center bg-white'>
      <img className='absolute h-[80vh]' src={laptop} alt="" />
      <video autoPlay='true' loop muted className='object-contain h-[60vh] w-[50vw]' src='/src/video/MotionText.mp4'></video>
    </div>
  )
}

export default Page3
