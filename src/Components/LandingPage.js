import React, { useEffect, useRef } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import './portfolio.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';


// gsap.registerPlugin(useGSAP);
function LandingPage() {

//  const imgref=useRef();
 const textref=useRef();
  useEffect(()=>{
      gsap.from(textref.current,{
        // opacity:1,
        duration:1,
        scale:1.3,
        skewX:3,
        scrub:true,
        transition:1.5,
        yoyo:true,
        repeat:-1,
      })
      

    },[])
  return (
    <>
    <div className='mainpage mt-[5vh] flex flex-col items-center w-screen h-screen px-[2vh] object-contain '>
    <img src='assets/myname.jpg' className='w-[100%] h-[50%]'/>

    <div className=''>
   <h3 ref={textref}s className='gopeshwar hover:first-letter:text-red-600 leading-[20px] mt-[4vh] text-opacity-10 text-[35px] md:text-[55px]'><Tilt>Gopeshwar kumar</Tilt>
   <h4 className='font-serif ml-[24vh] mt-[2%] tracking-widest text-[9px] md:text-[15px] hover:bg-pink-500 hover:text-[16px] transition-all first-letter:text-[15px]'>Web Developer & Civil Engg..</h4></h3>
   </div>

   <div className='w-screen h-32 flex items-center justify-center gap-[4vh]'>
   <a href="facebook.com"><FaFacebook className='text-[50px] text-indigo-600 '/></a>
   <a href='https://www.instagram.com/unique_gopeshwar_/?igsh=ODNxbGhqYzFsemxh'><FaInstagramSquare className='text-[50px] text-pink-600 '/></a>
   <a href='https://www.linkedin.com/in/gopeshwar-k-954a48265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin className='text-[50px] text-blue-600'/></a>
   <a href='https://github.com/GopeshwarKumar'><FaGithub className='text-[50px] text-zinc-600 '/></a>
   </div>
    </div>

    



  
    </>
  )
}

export default LandingPage


























// social media

{/* <div className='text-cyan-400 transition-all hover:scale-[1.2] hover:skew-y-6'>
          <FaLinkedin className='2xl:text-[7vh] xl:text-[7vh] lg:text-[7vh] md:text-[7vh] sm:text-[7vh] text-[4vh]'/>
          </div>

        <div className='text-blue-800 transition-all hover:scale-[1.2] hover:skew-y-6'>
          <FaFacebook className='2xl:text-[7vh] xl:text-[7vh] lg:text-[7vh] md:text-[7vh] sm:text-[7vh] text-[4vh]'/>
          </div>

        <div className='hover:text-white transition-all hover:scale-[1.2] hover:skew-y-6'>
          <FaGithub  className='2xl:text-[7vh] xl:text-[7vh] lg:text-[7vh] md:text-[7vh] sm:text-[7vh] text-[4vh]'/>
          </div>

        <div className='text-pink-500 transition-all hover:scale-[1.2] hover:skew-y-6'>
          < FaInstagramSquare className='2xl:text-[7vh]  xl:text-[7vh] lg:text-[7vh] md:text-[7vh] sm:text-[7vh] text-[4vh]'/>
          </div> */}

           
// button

        // <h4 className='relative uppercase transition-colors before:absolute before:[""] before:top-0 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-600 before:duration-300 before:hover:scale-100 before:hover:bg-opacity-50 before:hover:rounded-[10px] hover:skew-y-6 hover:scale-[1.3] before:backdrop-blur-[1px]'>Contac Us</h4>




