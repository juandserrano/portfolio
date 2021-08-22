/* eslint-disable react/react-in-jsx-scope */
import TypeIt from "typeit-react";
import Image from 'next/image';
import jds from '../public/images/Foto3.jpg';
function Hero() {
  
  return (
    <div
      className="flex justify-center text-[#ffffff] h-screen bg-[rgb(11,22,40)] px-36 w-full"
      id="main"
    >
      <div className="flex flex-col items-center justify-center">
        <div className='mb-10 border-4 rounded-full border-yellow-400'>
          <Image className="rounded-full" src={jds}/>
        </div>
        <h1 className="glitch w-[800px] h-28">
          <span className="w-full">Juan Diego Serrano</span>
          <span className="w-full">Juan Diego Serrano</span>
        </h1>
        <p className="text-center w-2/3 text-xl mt-5">
          Hello there! My name is Juan and I&apos;m a Ottawa-based Full Stack
          Developer. I have Experience in HTML/CSS/JS, React, RESTful APIs,
          Express, Node, Python and Java, among other supporting technologies.
        </p>
        <div className='text-4xl mt-10 text-yellow-400'>
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
    </div>
  );
}

export default Hero;
