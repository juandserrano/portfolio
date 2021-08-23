import Image from "next/image";

function ProjectCard({ image, text, link, github }) {
  return (
    <div className="w-[600px] mx-5 h-3/4 p-8 frosty shadow-lg rounded-3xl flex flex-col items-center justify-between flex-shrink-0">
      <div className="relative w-full h-2/3 self-start border-2 border-yellow-400">
        <Image
          className="absolute"
          src={image}
          objectFit="fill"
          layout="fill"
        />
      </div>
      <div className="flex flex-col items-center text-white">
        <p className="p-3 mb-10 myTextShadow text-lg text-center">{text}</p>
        <div className="flex space-x-5">
          <a
            className="border border-yellow-400 bg-yellow-400 text-[rgb(11,22,40)] font-semibold py-3 px-5 rounded-xl hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer"
            href={link}
          >
            View
          </a>
          {github && (
            <a
              className="border border-yellow-400 bg-yellow-400 text-[rgb(11,22,40)] font-semibold py-3 px-5 rounded-xl hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer"
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
