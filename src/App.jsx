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
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from './Layout'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,  
},]);

const App = () => {
  return (
    <div>
   <RouterProvider router={router} />
   {/* <Layout/> */}
   </div>
  )
}

export default App
