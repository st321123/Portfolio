import React from 'react'
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
import { PiFileHtml } from "react-icons/pi";
import { PiFileCssBold } from "react-icons/pi";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
function Second() {

    return (
        // text-teal-800 relative  flex flex-col xs:items-center text-center justify-center min-h-[364px]  px-10 py-2 space-y-4'
        <div className='bg-customBlue min-h-[400px] py-2 px-10 text-teal-800   flex flex-col items-center xs:text-center space-y-4'>
           
           <div className='p-4 flex flex-col space-y-2'>
             <h1 className='text-xl xs:text-2xl font-serif font-bold'>Programming Profile</h1>
            
                <h1 className='font-mono text-xs xs:text-s '>
                    Solved over 250+ problems in leetcode
                </h1>
               

                <div className='bg-white flex flex-col items-center justify-center  border rounded-md hover:shadow-2xl mx-auto '>
                    <a  target="_blank" href="https://leetcode.com/Shubham_tewari/">
                        <img className="h-12 xs:h-20" src="https://portfolio01-sigma.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleetcode.3a2ff5a4.png&w=128&q=75" alt="Image of leetcode icon" />
                    </a>
                    <h1 className='font-mono'>
                        Leetcode
                    </h1>
            </div>
            </div>
           
            <div className='text-xl text-start xs:text-center font-serif'>
                <h1>
                    Technologies I use
                </h1>
                <div className='flex items-center flex-wrap p-2 m-2'>
                <TbBrandCpp className=' text-gray-800 animate-bounce' size={40} />
                <GrReactjs className=" text-gray-800  animate-spin   "  size={40} />
                <TbBrandJavascript className=' text-gray-800 animate-bounce' size={40} />
                <PiFileHtml className=' text-gray-800 animate-bounce' size={40} />
                <PiFileCssBold className=' text-gray-800 animate-bounce' size={40} />
                <FaNode className=' text-gray-800 animate-bounce' size={40} />
                <SiMongodb className=' text-gray-800 animate-bounce'size = {40} />

                </div>

                <h1>
                    Tools I use 
                </h1>
                <div className='flex p-2 m-2 '>
                <TbBrandVscode className=' text-gray-800 animate-bounce' size ={40} />
                <FaGithubSquare className=' text-gray-800 animate-bounce' size ={40} />
                <span></span>

                </div>
            </div>
        </div>
    )
}

export default Second;
