/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import TypeIt from "typeit-react";
import Image from 'next/image';
function Hero() {
  useEffect( async () => {
    await fetch('https://jds-portfolio-backend.herokuapp.com/api')
    .then(response => response.json())
    .then(data => console.log(data));
  }, [])
  
  return (
    
      <div className="flex pt-5 flex-col w-full h-screen bg-[rgb(11,22,40)] text-gray-200 items-center justify-center" id="main">
        <div className='mb-10 mt-5 border-4 rounded-full w-40 h-40 md:w-[40vh] md:h-[40vh] relative border-yellow-400'>
          <img src='/images/Foto3.jpg' className='rounded-full h-full w-full'/>
        </div>
        
          <h1 className="text-3xl md:text-5xl px-5 text-center mb-5 md:mb-10">
            Juan Diego Serrano
          </h1>
        
        <p className="px-6 md:px-[4.5rem] text-sm md:text-lg md:max-w-4xl text-justify">
          Hello there! My name is Juan and I&apos;m an Ottawa-based Developer. I have Experience in HTML/CSS/JS, React, RESTful APIs,
          Express, Java and in working with Pandas and TensorFlow for Data Analysis and Machine Learning, among other supporting technologies. 
        </p>
        <div className='text-2xl md:text-3xl mt-10 text-yellow-400 mb-10'>
          <TypeIt
            options={{
              strings: ["Frontend", "Backend", "Java", "Python", "Databases"],
              speed: 100,
              cursorSpeed: 500,
              waitUntilVisible: true,
              lifelike: true,
              breakLines: false,
              loop: true
            }}
          />
        </div>
       

        
      </div>
    
  );
}

export default Hero;
