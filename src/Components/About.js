import React from 'react'
// import 'https://fonts.googleapis.com/css2?family=Foldit:wght@100..900&family=Nabla&display=swap'
import './portfolio.css'

function About() {
  return (
    <>
    <div className='about leading-[18px] px-[4vh] tracking-wider md:text-[25px] xl:text-[25px] 2xl:text-[30px] sm:leading-[30px] first-letter:text-[40px] '>

        <p>
            I am <strong>Gopeshwar Kumar</strong> undergraduate student at NIT DURGAPUR (2023-27). Technology has always fascinated me and i always push myself in learning and implementing new things. Currently , along with improving coding Skills & Learning Web Development.
        </p>
    </div>

    <h1 className='text-center text-green-600 italic mt-[5%] '>What have I done?</h1>
    <div className='flex gap-[4vh] justify-center'>
      <a href='https://gopeshwarkumar.github.io/weather/' className='text-green-400 no-underline font-serif px-2 py-2 bg-slate-100 bg-opacity-50 text-[20px] rounded-[5px] before:w-full before:h-full before:scale-110 content-[] hover:before:z-10 before:bg-yellow-200 hover:before:scale-125 '>Weather App</a>
      <a href='https://gopeshwarkumar.github.io/Temp-Converter/' className='text-green-400 no-underline font-serif px-2 py-2 bg-slate-100 bg-opacity-50 text-[20px] rounded-[5px]  '>Temp.. Coverter</a>
    </div>
    </>
  )
}

export default About