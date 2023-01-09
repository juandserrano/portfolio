import Image from "next/image";
import Bullet from "./Bullet";

function ProjectHero({ title, image, text, link, github, stack }) {
  return (
    <div className="w-full  mx-5 p-8 shadow-lg rounded-3xl flex flex-col items-center justify-around flex-shrink-0 md:pt-16">
      <div className="cursor-pointer hover:scale-105 active:scale-95 hover:shadow-md transition-all w-11/12 h-[160px] md:h-4/6 border-0 border-yellow-400 mb-4">
        <div className='uppercase text-center text-white underline text-xl'>{title}</div>
          <div className="relative h-full w-full">
            <div className="absolute gradient hidden lg:block rounded-xl h-full w-full">
              <div className="absolute right-16 bottom-20 text-2xl">{text}</div>
            </div>
          <a
            href={link}
          >
            <img src={image} className='rounded-xl w-full max-h-[80vh] mb-3'/>
          </a>
          </div>
          
        <div className="flex z-20">  
        {stack?.map((e) => <span className='text-white text-xs md:text-base'><Bullet text={e}/></span>)}
        </div>
      </div>
      <div className="flex flex-col h-2/6 z-20 items-center text-white">
        <p className="p-3 mb-10 myTextShadow text-lg text-center">{/*text*/}</p>
        <div className="flex space-x-5">
          {github && (
            <a
              className="border border-yellow-400 bg-yellow-400 shadow-md text-[rgb(11,22,40)] font-semibold py-3 px-5 rounded-xl hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer"
              href={github}
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectHero;
