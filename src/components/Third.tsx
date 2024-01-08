import React from 'react';
import Slider from 'react-slick';
import { PortfolioPhoto } from './PortfolioPhoto';
import arr from "./details";
const Third = () => {
  const settings = {
   dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    // Add more settings as needed
  };
  

  return (
    <div className='text-t/eal-800 flex flex-col dark:bg-gray-900 md:px-20 lg:px-40' >
      
    <h1 className='mx-auto font-serif text-2xl p-2 my-4'>Portfolio </h1>
    <Slider {...settings}>

   { arr.map(({desc,img,add})=>(
 
    
    <PortfolioPhoto desc = {desc} img ={img} add = {add}/>))
   }

    </Slider>
    </div>
  );
};

export default Third;