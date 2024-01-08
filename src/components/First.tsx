import React,{ useRef } from 'react'
import Header from './Header';


 function First() {
  

  const bottomRef = useRef<HTMLDivElement>(null)
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='h-screen text-teal-800   flex flex-col relative px-5  md:px-20 lg:px-40 '>
    
      
      <Header/>
      
      <div  className=' flex flex-col items-center p-2 space-y-4 '>
      <img className="statiz z-10 my-[24px] h-[160px] w-[160px] md:h-[180px] md:w-[180px] rounded-full shadow-xl" src ="https://i.imgur.com/pabMGor.jpg" alt = "My Image "/>
        <h1 className='text-4xl font-bold font-serif'> Hi I'am Shubham Tewari </h1>
        <h1 className='text-xl font-bold font-serif'> MCA graduate </h1>
        
        <p className='font-sans mx-auto text-sm mb-2'>Seeking a challenging career opportunity to utilize my diverse skill set
<br />  and contribute to the success of a dynamic organization.</p>
        <div className='absolute bottom-0 '  >

          
        <button  className='  hover:bg-teal-200 border-2 border-solid border-teal-400 rounded-md px-2 m-2'><a href = "https://docs.google.com/document/d/19JIqcK7vhU5bLrH_XG1Ks76b44phPPQ0fhKfxOKykWQ/edit" download="ShubhamResume">Resume </a></button>
        
        <button onClick={scrollToBottom} className=' hover:bg-teal-200   bg-teal-400 border rounded-md px-2 m-2'>know more</button>
       
        <div ref={bottomRef} />

        </div>
        </div>
        
    </div>
  )
}

export default First;
