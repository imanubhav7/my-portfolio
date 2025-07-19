import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faJs,
  faInstagram,
  faLinkedin,
  faTwitter,
  faReact,
  faNodeJs,
  faCss3,
  faHtml5,
  faGit,
  faSass,
  faBootstrap,
  // faDatabase
} from "@fortawesome/free-brands-svg-icons";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import skillBG from '../Image/skillBG.avif'
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";


const Page4 = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from("#heading",{
        x:-200,
        opacity:0,
        duration:2,
        stagger:1,
        ease: "power1.inOut",
        // scrollTrigger:{
        //     trigger:'#heading',
        //     markers:true,
        //     start:"top 70%",
        //     end:"bottom 0%",
        //     scrub:3,

        // }
    })  
})

    useGSAP(function(){
      gsap.from("#tech",{
        duration:2,
        opacity:0,
        y:200,
        stagger:1,
      })
    })

  return (
    <div className='h-screen flex w-full p-6 bg-white'>
        <div  style={{backgroundImage: `url(${skillBG})` }} className='h-full w-full flex flex-col relative object-cover 50% 50% rounded-[50px] shadow-xl shadow-gray-700 '>

            {/* Heading Div */}
            <div id='heading' className='flex absolute left-24 top-[7.5vw]'>
                <h1 className='font-[Fb4] leading-[6vw] tracking-normal text-[16vw] top-40 uppercase'>Skills and Experience</h1>
            </div>
         
              {/* Paragraph */}
              <div className='absolute top-[20vw] px-72 -left-28'>
              <p className='text-[1.8rem] font-[Fb3]'>
            HTML, CSS, JS, building small and medium web applications with React, features, animations, and coding interactive layouts. I’m exploring the exciting world of full-stack development! Along with honing my frontend skills, I’m diving into backend technologies like NodeJS, MongoDB, and ExpressJS. Always eager to learn and build something new.
            </p>
              </div>

            {/* Technology  */}

        <div id='tech' className="flex justify-center absolute bottom-24 left-44 flex-wrap mt-10 ml-auto mr-auto text-[5.5em] ">
            <div  className="text-white ml-6 mr-6 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faJs} />
            <p className='text-[18px] font-[Fb2]'>JavaScript</p>
            </div>

            <div className="text-white ml-6 mr-6 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faReact} />
            <p className='text-[18px] font-[Fb2]'>React</p>
            </div>

            <div className="text-white ml-6 mr-6 flex flex-col justify-center items-center">
            <RiNextjsFill />
            <p className='text-[18px] font-[Fb2]'>Next</p>
            </div>

            <div className="text-white ml-6 mr-6 flex flex-col justify-center items-center">
            <DiMongodb />
            <p className='text-[18px] font-[Fb2]'>MongoDb</p>
            </div>

            <div className="text-white ml-6 mr-6 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faNodeJs} />
            <p className='text-[18px] font-[Fb2]'>NodeJS</p>
            </div>

            {/* <div className="text-white ml-6 mr-6 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faDatabase} />
            <p className='text-[18px] font-[Fb2]'>MongoDB</p>
            </div> */}

            <div className="text-white ml-6 mr-6 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faCss3} />
            <p className='text-[18px] font-[Fb2]'>CSS3</p>
            </div>
            
            <div className="text-white ml-6 mr-6 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faHtml5} />
            <p className='text-[18px] font-[Fb2]'>HTML5</p>
            </div>

            <div className="text-white ml-6 mr-6 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faSass} />
            <p className='text-[18px] font-[Fb2]'>SASS</p>
            </div>

            <div className="text-white ml-6 mr-6 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faBootstrap} />
            <p className='text-[18px] font-[Fb2]'>BootStrap</p>
            </div>

            <div className="text-white ml-6 mr-6 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faGit} />
            <p className='text-[18px] font-[Fb2]'>Git</p>
            </div>
        </div>    
        </div>
    </div>
  )
}

export default Page4
