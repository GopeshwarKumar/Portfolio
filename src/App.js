import React from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Skills from './Components/Skills'
import About from './Components/About'
import SocialMedia from './Components/SocialMedia'
// import 'portfolio.css'

// const Skills=lazy(()=>import('./Components/Skills'))


function App() {

 const scroll=new LocomotiveScroll();
  return (
    <> 
    {/* <Navbar/> */}
    <LandingPage/>
    <SocialMedia/>
    <About/>
     <Skills/>
    </>
  )
}

export default App