import React, { useRef, useState } from 'react'
import TiltText from '../components/TiltText'
import Bottomtext from '../components/Bottomtext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import hero from '../Image/Hero.jpg'
const Home = () => {

    const tiltRef = useRef(null)
    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)
    const mouseMoving = (e) => {
      
         setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/40)
         setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20)
    
        // tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`; 
    }

    useGSAP( function () {
      gsap.to(tiltRef.current,{
        transform :`rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration:3,
        ease: "power4.out"
      })
    },[xVal,yVal])

  return (
    <div onMouseMove={(e)=> {
        mouseMoving(e)
  
    }} className='h-screen bg-white p-5'>
      <div  style={{backgroundImage: `url(${hero})` }} id='page1-in' className=" h-full p-24 w-full bg-cover bg-right shadow-xl shadow-gray-700 rounded-[50px]">
            <img className='h-24' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_198,h_198,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />
          <TiltText abc={tiltRef}/>
            <Bottomtext/>
      </div>
    </div>
  )
}

export default Home
