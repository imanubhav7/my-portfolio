import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'
import ProjectPage from './pages/ProjectPage'
import { BrowserRouter } from "react-router";
import ReachMe from './pages/ReachMe'
import Contact from './pages/Contact'


const Layout = () => {
  return (
    <div className='overflow-hidden'>
      <Header/> 
    <Home/>
    <Page2/>
    {/* <Page3/> */}
    <Page4/>
    <Page5/>
    <Page6/>
    {/* <Page7/>
    <Page6/> */}
    <Page8/>
    <ProjectPage/>
    <ReachMe/>
    <Contact/>
    </div>
  )
}

export default Layout
