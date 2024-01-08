import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
 function Header() {
    
  return (
    <div className=' flex justify-between '>
        <div>
        <h1 className='text-xl'>Shubham Tewari </h1>
        </div>
        <div className='flex px-4 '>
          <a >
        <CgMail className='mx-1' size = {20}/>
        </a>
        <a  target="_blank" href = "https://www.linkedin.com/in/shubham-tewari-97336b24b/">
        <FaLinkedin className='mx-1' size = {20}/>
        </a>
        <a href='https://www.instagram.com/shubham07112/'  target="_blank">
        <SiInstagram className='mx-1' size = {20} />
        </a>

        </div>
        
       
    </div>
  )
}

export default Header;
