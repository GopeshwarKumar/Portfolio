import gsap from 'gsap';
import React, { useRef, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Navbar() {
const [show,setshow]=useState(false); 
const [showhamburger,setshowhamburger]=useState(true);
// const [linkshow,setlinkshow]=useState(true);

  const linkref1=useRef();
  const linkref2=useRef();
  const linkref3=useRef();
  // const x=gsap.timeline();
  const shownavbar=()=>{
    setshow(true);  // links visible
    setshowhamburger(false);  // aqua hamburger hide
    gsap.to(linkref1.current,{
      duration:3,
      x:200,
      y:100,
      rotate:90,
    })

    gsap.to(linkref2.current,{
      duration:3,
      x:200,
      y:100,
      rotate:90,
    })

    gsap.to(linkref3.current,{
      duration:3,
      x:200,
      y:100,
      rotate:90,
    })
    
  }

  const againshowhamburger=()=>{
    setshowhamburger(true)  // show aqua hamburger
  }

  const link1=()=>{
  //   gsap.to(linkref.current,{
  //     duration:3,
  //     x:200,
  //     y:100,
  //     rotate:90,
  //   })
  }
  const link2=()=>{
    //   gsap.to(linkref.current,{
    //     duration:3,
    //     x:200,
    //     y:100,
    //     rotate:90,
    //   })
    }
    const link3=()=>{
      //   gsap.to(linkref.current,{
      //     duration:3,
      //     x:200,
      //     y:100,
      //     rotate:90,
      //   })
      }

  return (
    <>
    <nav className='w-screen h-120 flex items-center justify-between py-[3vh] px-[3vh] text-[12px]'>

      <div>
        Gopeshwar
      </div>

      <div className=' flex items-center flex-col gap-[1vh]'>

      {showhamburger && 
      <GiHamburgerMenu onClick={shownavbar} className='text-[25px]'/>}

      {showhamburger ? null :
      <div onClick={againshowhamburger} className='z-20 w-10 h-6  flex flex-col gap-[1vh] items-center justify-center'>
        <div className='w-5 h-1 bg-red-500'></div>
        <div className='w-5 h-1 bg-pink-400'></div>
        <div className='w-5 h-1 bg-green-500'></div>
      </div>}

      </div>
    </nav>

    { show &&
   <div className='w-screen h-screen flex flex-col items-center gap-[2vh] '>
      
      <Link ref={linkref1} onClick={link1} className='no-underline'>Contact Us</Link>
      <Link ref={linkref2} onClick={link2} className='no-underline'>Skills</Link>
      <Link ref={linkref3} onClick={link3} className='no-underline'>Projects</Link>
      
      </div> }

      

      
    </>
  )
}

export default Navbar