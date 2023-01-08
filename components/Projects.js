/* eslint-disable react/react-in-jsx-scope */
import ProjectCard from "./ProjectCard";
import projects from "../pages/data/projects";
import { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
  }
  const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
  }
  
  if(!Array.isArray(projects) || projects.length <= 0) {
      return null;
  }

  return (
    <div
      className="h-screen w-full projects-path md:px-8 overflow-hidden"
      id="projects"
    >
      <div className="w-full h-full flex items-center justify-center overflow-visible relative">
        {projects.map((item, index) => (
            <div className={index === current ? 'slide active flex items-center relative h-full' : 'slide flex relative'} key={index}>
                {index === current && (
                    <ProjectCard
                      github={item.github}
                      link={item.url}
                      image={item.image}
                      title={item.name}
                      text={item.text}
                      stack={item.stack}
                    />
                )}
            </div>
                
        ))}
        <div onClick={prevSlide} className="absolute flex text-gray-400 justify-center items-center hover:animate-ping w-10 h-10 md:w-16 md:h-16 left-4 bg-gray-200 bg-opacity-30 rounded-full cursor-pointer hover:text-white select-none">
          <FontAwesomeIcon icon={faChevronLeft} size="x" />
        </div>
        <div onClick={nextSlide} className="absolute flex text-gray-400 justify-center items-center hover:animate-ping w-10 h-10 md:w-16 md:h-16 right-4 bg-gray-200 bg-opacity-30 rounded-full cursor-pointer hover:text-white select-none">
          <FontAwesomeIcon icon={faChevronRight} size="x" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
