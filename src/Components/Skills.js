import React from 'react'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandThreejs } from 'react-icons/tb'
import { IoLogoHtml5 } from "react-icons/io5";
import { Tilt } from 'react-tilt'

function Skills() {
  return (
    <>
    <div className='mt-[3%] w-screen grid grid-cols-2 md:grid-cols-3 place-items-center gap-[2vh] md:gap-[4vh] md:px-[2vh] '>

    <Tilt>
      <div className='w-[30vh] md:w-[25vh] h-[30vh] bg-gradient-to-tr from-pink-500 to-yellow-200 flex flex-col items-center gap-[8vh] rounded-[10px]'>
      <IoLogoHtml5  className='font-bold text-red-600 text-center text-[10vh] mt-[3vh] transition-all hover:shadow-xl hover:scale-[1.3] hover:skew-y-6'/>

      <p className='text-center font-bold tracking-wider'>HTML<br/>
      <p className='text-[10px] text-black'>Full HTML Knowledge</p>
      </p>
      
      </div>
      </Tilt>

      <Tilt>
      <div className='w-[30vh] md:w-[25vh] h-[30vh] bg-gradient-to-tr from-yellow-200 to-pink-500 flex flex-col items-center gap-[8vh] rounded-[10px]'>
      <RiTailwindCssFill  className='font-bold text-cyan-300 text-center text-[10vh] mt-[3vh] transition-all hover:scale-[1.3] hover:skew-y-6'/>

      <p className='text-center font-bold tracking-wider'>Tailwind Css
      <br/>
      <p className='text-[10px] text-black font-extrabold'>Intermediate Level Knowledge </p>
      </p>
      </div>
      </Tilt>

      <Tilt>
      <div className='w-[30vh] md:w-[25vh] h-[30vh] bg-gradient-to-tr from-pink-500 to-green-500 flex flex-col items-center rounded-[10px]'>
      <IoLogoJavascript className='font-bold text-yellow-200 text-center text-[10vh] mt-[3vh] transition-all hover:scale-[1.3] hover:skew-y-6'/>

      <p className='text-center mt-[10vh] font-bold tracking-wider text-yellow-300'>Java Script
      <br/>
      <p className='text-[10px] text-black font-extrabold'>Efficient Knowledge </p>
      </p>
      </div>
      </Tilt>

      <Tilt>
      <div className='w-[30vh] md:w-[25vh] h-[30vh] bg-gradient-to-tr from-black to-yellow-200 flex flex-col items-center rounded-[10px]'>
      <FaReact className='font-bold text-cyan-300 text-center text-[10vh] mt-[3vh] transition-all hover:scale-[1.3] hover:skew-y-6'/>

      <p className='text-center mt-[10vh] font-bold tracking-wider'>REACT JS
      <br/>
      <p className='text-[10px] text-black font-extrabold'>Intermediate Level Knowledge </p>
      </p>
      </div>
      </Tilt>


      <Tilt>
      <div className='w-[30vh] md:w-[25vh] h-[30vh] bg-gradient-to-tr from-pink-500 to-orange-400 flex flex-col items-center rounded-[10px]'>
      <FaCss3Alt  className='ml-2 font-bold text-blue-700 text-center text-[10vh] mt-[3vh] transition-all hover:scale-[1.3] hover:skew-y-6'/>

      <p className='text-center mt-[10vh] font-bold tracking-wider text-blue-700'>CSS
      <br/>
      <p className='text-[10px] text-black font-extrabold'>Intermediate Level Knowledge </p>
      </p>
      </div>
      </Tilt>

      <Tilt>
      <div className='w-[30vh] md:w-[25vh] h-[30vh] bg-gradient-to-tr from-pink-500 to-yellow-200 flex flex-col items-center rounded-[10px]'>
      <TbBrandThreejs className='font-bold text-center text-[10vh] hover:scale-[1.3] mt-[3vh] transition-all hover:skew-y-6'/>

      <p className='text-center mt-[10vh] font-bold tracking-wider'>THREE JS
      <br/>
      <p className='text-[10px] text-black font-extrabold'>Basic Level Knowledge </p>
      </p>
      </div>
      </Tilt>

        </div>
    </>
  )
}

export default Skills