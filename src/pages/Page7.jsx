import React from 'react'
import triangle from '../Image/triangleBg.avif'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Page7 = () => {

    gsap.registerPlugin(ScrollTrigger)


    // Using Gsap
            useGSAP(function(){
             gsap.from('#ImgRotate',{
                translate: "rotateX(90deg)",
                rotate:180,
                duration:1,
                // opacity:0,
                ease:'power1.inOut',
               scrollTrigger:{
                trigger:"#ImgRotate",
                markers:true,
                start:"top 70%",
                end:"top 0%",
                scrub:1,
    
               }
             })
            })


  return ( 
        <div className='h-screen p-6 bg-white  relative  '>
            <div className='h-full w-full relative flex justify-center items-center  bg-black rounded-[50px] shadow-xl shadow-gray-700 overflow-hidden '>
               <div id='ImgRotate' className=''>
               <img   className='h-[80vh]' src={triangle} alt="" />
                </div> 
            </div>
        </div>
    
    
  )
}

export default Page7
