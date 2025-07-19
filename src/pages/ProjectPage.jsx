import React from 'react'
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub  } from '@fortawesome/free-brands-svg-icons';

const ProjectPage = () => {
  return (
    <div className='h-full p-6 bg-white relative'>
        <div className='h-full w-full bg-black rounded-[50px] relative shadow-xl shadow-gray-700 overflow-hidden '> 
            {/* Project1 Div  */}
                <div className='flex ml-4 mr-4 relative flex-wrap borderBtm justify-between mt-[4em] px-[3em] '>
                    <div className='pl-4 flex flex-col '>
                        <h1 className=' text-[24vh] font-[Fb4] uppercase'>Coach AI </h1>
                        <p className='absolute bottom-12 text-[1.4em] font-[Fb2] text-gray-500'> AI-Powered Career Guidance Platform</p>
                    </div>

                     {/* Details DIv */}
                <div className='flex w-[26vw] flex-col justify-start items-start mt-16 mr-24 '>
                    <p className='font-[Fb3] text-[1.6em]'>
                 Built with:  NextJS, Tailwind CSS, OpenAI GPT API, Clerk,Node.js, Prisma.
                    </p>
                    <div className='flex gap-5 justify-center items-center mt-5'>
                    <span className=' font-[Fb2] text-[1.4em]'>View the code</span>
                    <NavLink to='https://github.com/https://github.com/imanubhav7/CoachAI.git' ><FontAwesomeIcon className='text-[1.6em] cursor-pointer' icon={faGithub} /></NavLink>
                   
                    </div>
                
                </div>

                    {/* Github Link  */}

                   

                </div>

                
                <div className='flex ml-4 mr-4 relative flex-wrap borderBtm justify-between mt-[4em] px-[3em] '>
                    <div className='pl-4 flex flex-col'>
                        <h1 className=' text-[24vh] font-[Fb4] uppercase'>Find Your Doctor  </h1>
                        <p className='absolute bottom-12 text-[1.4em] font-[Fb2] text-gray-500'>Location-Based Healthcare Search Tool </p>
                    </div>

                     {/* Details DIv */}
                <div className='flex w-[26vw] flex-col justify-start items-start mt-16 mr-24 '>
                    <p className='font-[Fb3] text-[1.6em]'>
                 Built with:  HTML5, CSS3, JavaScript, BootStrap
                    </p>
                    <div className='flex gap-5 justify-center items-center mt-5'>
                    <span className=' font-[Fb2] text-[1.4em]'>View the code</span>
                    <NavLink to='https://github.com/imanubhav7' ><FontAwesomeIcon className='text-[1.6em] cursor-pointer' icon={faGithub} /></NavLink>
                   
                    </div>
                
                </div>

                    {/* Github Link  */}

                   

                </div>

    
 
               
        </div>
    </div>
  )
}

export default ProjectPage