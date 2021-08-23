import Image from "next/image";

function ProjectCard({ image, text, link, github }) {
  return (
    <div className="w-[300px] md:w-[600px] mx-5 md:h-[650px] p-8 frosty shadow-lg rounded-3xl flex flex-col items-center justify-around flex-shrink-0 md:pt-16">
      <div className="relative w-11/12 h-[160px] md:h-4/6 border-0 border-yellow-400">
        <img src={image} className='absolute rounded-xl h-full w-full'/>
      </div>
      <div className="flex flex-col h-2/6 items-center text-white">
        <p className="p-3 mb-10 myTextShadow text-lg text-center">{text}</p>
        <div className="flex space-x-5">
          <a
            className="border border-yellow-400 bg-yellow-400 shadow-md text-[rgb(11,22,40)] font-semibold py-3 px-5 rounded-xl hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer"
            href={link}
          >
            View
          </a>
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

export default ProjectCard;
