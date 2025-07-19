import React from 'react'
import contImg from '../Image/contactImg.gif'
import { NavLink } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import skillBg from "../Image/skillBG.avif"
const Contact = () => {
  return (
    <div className='h-screen p-6 bg-white relative'>
        <div  style={{backgroundImage: `url(${skillBg})` }} className='h-full w-full bg-skill-bg rounded-[50px] flex justify-evenly items-center shadow-xl shadow-gray-700 overflow-hidden '>
                {/* Contact Img  */}
                <div>
                    <img className='rounded-[2em]' src={contImg} alt="" />
                </div>
                {/* Details  */}
                <div className='w-[30vw]'>
                <p className="text-[5em] font-[Fb4] leading-[1em] mb-6 ">
            What would you do if you had a software expert available at your
            fingertips?
          </p>

          <div className="text-[1.7em] font-[Fb3] mt-8">Want to start new projects? Or just say hey.</div>

          <div >
           <span className="text-[1.6em] font-[Fb5]">You can also follow me on  </span> 
            <NavLink className=" gradient px-1 text-[3em] uppercase font-[Fb4]" to='https://www.instagram.com/im_anubhav7_/?hl=en'>
            <FontAwesomeIcon icon={faInstagram} />
            </NavLink>
            
            <h1 className="mt-16 text-[3em] leading-[1em] uppercase font-semibold font-fb7 hover:text-[#9B9B9B] duration-300">
                <NavLink >
                Vishwakarmaanubhav409@gmail.com
                </NavLink>
            </h1>    
                </div>
                </div>
        </div>
    </div>
  )
}

export default Contact
