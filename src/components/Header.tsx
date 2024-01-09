import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
 function Header() {
    
  return (
    <div className=' text-teal-800 flex justify-between jusitfy-center items-center text-sm xs:text-base sm:text-lg px-10 py-2 '>
        <div>
        <h1 className='font-bold hover:underline'>Shubham Tewari </h1>
        </div>
        <div className='flex jusitfy-center items-center '>
          <a className=' hover:text-black py-1 '>
        <CgMail className='mx-1  ' size = {19}/>
        </a>
        <a className=' hover:text-black' target="_blank" href = "https://www.linkedin.com/in/shubham-tewari-97336b24b/">
        <FaLinkedin className='mx-1' size = {15}/>
        </a>
        <a className=' hover:text-black py-1 ' href='https://www.instagram.com/shubham07112/'  target="_blank">
        <SiInstagram className='mx-1' size = {15} />
        </a>

        </div>
        
       
    </div>
  )
}

export default Header;
