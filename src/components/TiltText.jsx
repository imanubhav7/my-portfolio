import React from 'react'

const TiltText = (props) => {
  return (
    <div id='page1' ref={props.abc} className='mt-28 '>
    <h1 className='text-[4.8vw] leading-[4vw] uppercase font-[Fb1]'>I am <span className='text-black' >Full-Stack</span></h1>
    <h1 className='text-[8vw] leading-[8vw] font-[Fb1] uppercase'>Developer</h1>
    <h1 className='text-[4.8vw] leading-[4vw] uppercase font-[Fb1]'>To Hire</h1>
  </div>
  )
}

export default TiltText
