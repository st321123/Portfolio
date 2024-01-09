import React, { useRef } from 'react'
import Header from './Header';
import shubham from "./resume/resume.pdf";

function First() {


  const bottomRef = useRef<HTMLDivElement>(null)
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className=' text-teal-800 relative  flex flex-col xs:items-center text-center  px-10   h-[calc(100vh-43px)] pt-2 '>

      <div className=' flex flex-col items-center text-center mx-auto space-y-4'>

        <img className="statiz z-10 my-[16px] h-[144px] w-[144px] xs:h-[160px] xs:w-[160px] sm:h-[180px] sm:w-[180px] rounded-full shadow-xl" src="https://i.imgur.com/pabMGor.jpg" alt="My Image " />
        <h1 className='text-xl xs:text-2xl sm:text-3xl font-bold font-serif '> Hi I'am Shubham  </h1>
        <h1 className='text-base xs:text-lg sm:text-2xl font-bold mt-1 font-serif'> MCA graduate </h1>

        <p className='font-sans  text-base xs:text-lg sm:text-xl mt-1 text-left p-2 xs:text-center '>Seeking a challenging career opportunity to utilize my diverse skill set
            and contribute to the success of a dynamic organization.</p>
      </div>
      <span className='grow'>

      </span>
      <div className=' flex flex-col xs:flex xs:flex-row  justify-between space-y-2 '  >
        <button className='  hover:bg-teal-200 border-2 border-solid border-teal-400 rounded-md px-2 sm:px-4 sm:text-2xl mx-4 '><a href={shubham} download="ShubhamResume">Resume </a></button>

        <button onClick={scrollToBottom} className=' hover:bg-teal-200   bg-teal-400 border rounded-md  sm:px-4 sm:text-2xl px-2 mx-4 '>know more</button>


      </div>

      <div ref={bottomRef} />
    </div>
  )
}

export default First;
