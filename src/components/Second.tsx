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
        <div className='bg-customBlue py-2  text-teal-800   flex flex-col items-center space-y-8 stretch-none'>
            <h1 className='text-2xl font-serif'>Programming Profile</h1>
            <div>
                <h1 className='font-mono text-xl'>
                    Solved over 250+ problems in leetcode
                </h1>
                <div className='bg-white flex flex-col items-center mx-32 my-4 border rounded-md hover:shadow-2xl min-w-14'>
                    <a  target="_blank" href="https://leetcode.com/Shubham_tewari/">
                        <img className="" src="https://portfolio01-sigma.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleetcode.3a2ff5a4.png&w=128&q=75" alt="Image of leetcode icon" />
                    </a>
                    <h1 className='font-mono'>
                        Leetcode
                    </h1>

                </div>
            </div>
           
            <div className='text-2xl font-serif'>
                <h1>
                    Technologies I use
                </h1>
                <div className='flex p-2 m-2'>
                <TbBrandCpp className=' text-gray-800 animate-bounce' size={50} />
                <GrReactjs className=" text-gray-800  animate-spin   "  size={50} />
                <TbBrandJavascript className=' text-gray-800 animate-bounce' size={50} />
                <PiFileHtml className=' text-gray-800 animate-bounce' size={50} />
                <PiFileCssBold className=' text-gray-800 animate-bounce' size={50} />
                <FaNode className=' text-gray-800 animate-bounce' size={50} />
                <SiMongodb className=' text-gray-800 animate-bounce'size = {50} />

                </div>

                <h1>
                    Tools I use 
                </h1>
                <div className='flex p-2 m-2 '>
                <TbBrandVscode className=' text-gray-800 animate-bounce' size ={50} />
                <FaGithubSquare className=' text-gray-800 animate-bounce' size ={50} />

                </div>
            </div>
        </div>
    )
}

export default Second;
