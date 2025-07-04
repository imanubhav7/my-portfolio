import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page5 = () => {

   gsap.registerPlugin(ScrollTrigger)

useGSAP(function(){
    gsap.from(".rotateText1",{
        transform:'rotateX(-80deg) ',
        opacity:0,
        duration:1,
        stagger:1,
        // ease: "power4.in",
        scrollTrigger:{
            trigger:'.rotateText1',
            // markers:true, 
            start:"top 70%",
            end:"top -270%",
            scrub:2,

        }
    })
})

  return (
    <div id='section2' className='bg-white text-center p-10 text-black '>
      {/* <h2 className='text-gray-500 uppercase text-3xl font-[Fb3] '>A problem is a chance for you to do your best.</h2> */}
      <div  className='rotateText1 mt-40'>
        <h1 className='text-[42vw] uppercase text-black font-[Fb4] leading-[35vw]'>Helping</h1>
      </div>
      <div className='rotateText1'>
        <h1 className='text-[42vw] uppercase text-[#9B9B9B] font-[Fb4] leading-[35vw]'>My</h1>
      </div>
      <div className='rotateText1'>
        <h1 className='text-[42vw] uppercase text-black font-[Fb4] leading-[35vw]'>Clients</h1>
      </div>
      <div className='rotateText1'>
        <h1 className='text-[42vw] uppercase text-black font-[Fb4] leading-[35vw]'>to Achieve</h1>
      </div>
      <div className='rotateText1'>
        <h1 className='text-[42vw] uppercase text-[#9B9B9B] font-[Fb4] leading-[35vw]'>Their</h1>
      </div>
      <div className='rotateText1 relative bg-white'>
        <h1 className='text-[42vw] uppercase text-black font-[Fb4] leading-[35vw]'>Dreams !</h1>
      </div>
    </div>

  )
}

export default Page5
