import React from 'react'
type props = { desc: string, img: string, add: string};
export const PortfolioPhoto = (props:props) => {
  
  return (
    <div  className="flex h- xs:h-full flex-col justify-center items-center ">
      <div className="hover:underline border p-2 hover:shadow-2xl">
      <a href = {props.add} >
    <img className="hover:scale-110 transition duration-300 border rounded-md mx-auto h-36 w-36 xs:h-48 xs:w-48 sm:h-60 sm:w-60" src = {props.img} alt = {props.desc}/>
    <h3 className="p-2 mt-2 mx-auto">{props.desc} </h3>
    </a>
    
    </div>
  </div>
  )
}

