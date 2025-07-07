import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page2 = () => {

   gsap.registerPlugin(ScrollTrigger)

useGSAP(function(){
    gsap.from(".rotateText",{
        transform:'rotateX(-80deg) ',
        opacity:0,
        duration:5,
        stagger:1,
        // ease: "power4.in",
        scrollTrigger:{
            trigger:'.rotateText',
            // markers:true,
            start:"top 70%",
            end:"top -270%",
            scrub:3,

        }
    })
})

  return (
    <div id='section2' className='bg-white text-center p-10 text-black mt-32'>
      <h2 className='text-gray-500 uppercase text-3xl font-[Fb3] '>A problem is a chance for you to do your best.</h2>
      <div  className='rotateText mt-40'>
        <h1 className='text-[42vw] uppercase text-black font-[Fb4] leading-[35vw]'>Impactful</h1>
      </div>
      <div className='rotateText'>
        <h1 className='text-[42vw] uppercase text-black font-[Fb4] leading-[35vw]'>design</h1>
      </div>
      <div className='rotateText'>
        <h1 className='text-[42vw] uppercase text-black font-[Fb4] leading-[35vw]'>is the</h1>
      </div>
      <div className='rotateText'>
        <h1 className='text-[42vw] uppercase text-black font-[Fb4] leading-[35vw]'>design</h1>
      </div>
      <div className='rotateText'>
        <h1 className='text-[42vw] uppercase text-black font-[Fb4] leading-[35vw]'>that</h1>
      </div>
      <div className='rotateText relative bg-white'>
        <h1 className='text-[42vw] uppercase text-black font-[Fb4] leading-[35vw]'>works !</h1>
      </div>
    </div>

  )
}

export default Page2
