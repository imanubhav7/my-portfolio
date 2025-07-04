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
    <div className='fixed w-full flex items-center justify-end py-28 px-20 z-10'>
      <button onClick={handleHireMeClick} className='bg-black rounded-2xl border-4 px-8 py-3 text-white hover:bg-zinc-500 hover:scale-110 duration-300 ease-in-out text-lg font-[Fb3]'>Hire me</button>
      {/* <i className="text-4xl ml-3 ri-menu-line"></i> */}
    </div>
  )
}

export default Header
