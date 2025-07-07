import React from 'react'
import reach from '../Image/reachMe.avif'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import reachMeBg from "../Image/reachMeBg.avif"
const ReachMe = () => {

    // useGSAP(function(){
    //     gsap.to("#reachImg",{
    //          backgroundPosition:'0% 100%'
    //     })
    // })

  return (
 
        
    <div  style={{backgroundImage: `url(${reachMeBg})` }} id='reachImg'  className=' img'>
      <img   className=' object-cover' src={reach} alt="" />
    </div>
    
  )
}

export default ReachMe
