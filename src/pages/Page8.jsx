import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import bg from '../video/textBG.mp4'

const Page8 = () => {

//    gsap.registerPlugin(ScrollTrigger)

// useGSAP(function(){
//     gsap.from(".rotateText",{
//         transform:'rotateX(-80deg) ',
//         opacity:0,
//         duration:5,
//         stagger:1,
//         // ease: "power4.in",
//         scrollTrigger:{
//             trigger:'.rotateText',
//             // markers:true,
//             start:"top 70%",
//             end:"top -270%",
//             scrub:3,

//         }
//     })
// })

  return (
      

    <div className='absolute h-screen  w-full overflow-hidden text-center '>
     

        <video autoPlay='true' loop muted className='absolute w-full h-screen top-0 left-0 object-cover' src={bg}></video>
        <h1 className='absolute left-0 text-[35vw] h-screen w-full uppercase text-black bg-white mix-blend-screen font-[Fb4] leading-[35vw]'>Projects</h1>
      
    
      </div>

  )
}

export default Page8
