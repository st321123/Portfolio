import React, { useRef } from 'react'
import Header from './Header';


function First() {


  const bottomRef = useRef<HTMLDivElement>(null)
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className=' text-teal-800 relative  flex flex-col xs:items-center text-center justify-center min-h-[364px]  px-10 py-2 space-y-4'>

      <div className=' flex flex-col items-center text-center mx-auto  '>

        <img className="statiz z-10 my-[16px] h-[144px] w-[144px] xs:h-[160px] xs:w-[160px]  md:h-[180px] md:w-[180px] rounded-full shadow-xl" src="https://i.imgur.com/pabMGor.jpg" alt="My Image " />
        <h1 className='text-xl xs:text-2xl font-bold font-serif '> Hi I'am Shubham  </h1>
        <h1 className='text-xs xs:text-sm font-bold mt-1 font-serif'> MCA graduate </h1>

        <p className='font-sans  text-xs xs:text-sm mt-1 text-left p-2 xs:text-center '>Seeking a challenging career opportunity to utilize my diverse skill set
            and contribute to the success of a dynamic organization.</p>
      </div>
      <div className=' flex flex-col xs:flex xs:flex-row  justify-between space-y-2'  >
        <button className='  hover:bg-teal-200 border-2 border-solid border-teal-400 rounded-md px-2 xs:px-2 mx-4 '><a href="https://docs.google.com/document/d/19JIqcK7vhU5bLrH_XG1Ks76b44phPPQ0fhKfxOKykWQ/edit" download="ShubhamResume">Resume </a></button>

        <button onClick={scrollToBottom} className=' hover:bg-teal-200   bg-teal-400 border rounded-md  xs:px-2 px-2 mx-4 '>know more</button>

        <div ref={bottomRef} />


      </div>

    </div>
  )
}

export default First;
