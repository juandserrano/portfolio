/* eslint-disable react/react-in-jsx-scope */
import TypeIt from "typeit-react";
function Hero() {
  
  return (
    
      <div className="flex pt-5 flex-col w-full h-screen bg-[rgb(11,22,40)] text-gray-200 items-center justify-center" id="main">
          <h1 className="text-3xl md:text-5xl px-5 text-center mb-5 md:mb-10">
            Juan Diego Serrano
          </h1>
        
        <p className="px-6 md:px-[4.5rem] text-sm md:text-lg md:max-w-4xl text-justify">
          Hello there! My name is Juan and I&apos;m an Ottawa-based Full-Stack Developer. I've worked with HTML/CSS/TS, React, RESTful APIs, Express, Java and Go. Experience developing microservices with tools such as Elasticsearch and Kafka.
        </p>
        <div className='text-2xl md:text-3xl mt-10 text-yellow-400 mb-10'>
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
