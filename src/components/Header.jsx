import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {

   const handleHireMeClick = () => {
    const email = "Vishwakarmaanubhav409@gmail.com";
    const subject = "Interested in Hiring You";
    const body = "Hi, I came across your portfolio and would like to connect.";

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };



  return (
    <div className='fixed w-full flex items-center justify-end py-28 px-20 z-10 space-x-6'>
      <button onClick={handleHireMeClick} className="px-7 py-3 bg-[#021526] text-white font-semibold rounded-xl 
         transition-all duration-300 hover:bg-[#0A3A52] 
         hover:-translate-y-1 hover:shadow-xl">Hire me</button>
      <a href="https://drive.google.com/file/d/19Vh4G743hrhM-HuF8xpgqpLxFArpQgPA/view?usp=drive_link" target='blank'>
        <button className="px-7 py-3 border-2 border-[#021526] text-[#021526] font-semibold rounded-lg
         transition-all duration-300 hover:bg-[#021526] hover:text-white
         hover:-translate-y-1 hover:shadow-xl">Resume</button>
      </a>
      {/* <i className="text-4xl ml-3 ri-menu-line"></i> */}
    </div>
  )
}

export default Header
