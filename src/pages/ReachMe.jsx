import React from 'react'
import reach from '../Image/reachMe.avif'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const ReachMe = () => {

    // useGSAP(function(){
    //     gsap.to("#reachImg",{
    //          backgroundPosition:'0% 100%'
    //     })
    // })

  return (
 
        
    <div id='reachImg'  className='bg-reach-bg img'>
      <img   className=' object-cover' src={reach} alt="" />
    </div>
    
  )
}

export default ReachMe
