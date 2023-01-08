/* eslint-disable react/react-in-jsx-scope */
import data from "../public/data.json"
import Image from "next/image";
import background from "../public/images/Silent_coding_home_office.png"  
import TypeIt from "typeit-react";
function Hero() {
  
  return (
    
      <div className="relative flex pt-5 flex-col w-full h-screen text-gray-200 items-center justify-center" id="main">
          <h1 className="z-10 text-3xl md:text-5xl px-5 text-center mb-5 md:mb-10">
            Juan Diego Serrano
          </h1>
        <div className="z-0">
  <Image
    src={background}
    layout="fill"
    objectFit="cover"
    className=""
  />
</div>
        <p className="z-10 px-6 md:px-[4.5rem] text-sm md:text-lg md:max-w-4xl text-justify">
          {data.hero}
        </p>
        <div className='z-10 text-2xl md:text-3xl mt-10 text-yellow-400 mb-10'>
          <TypeIt
            options={{
              strings: ["Frontend", "Backend", "Java", "Python", "Go", "Rust"],
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
