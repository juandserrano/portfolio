import ProjectCard from "./ProjectCard";
import projects from '../pages/data/projects'


function Projects() {
    return (
        <div className="h-screen w-full projects-path py-56 px-12 border pl-32" id="projects">
            <div className='w-full h-full flex items-center overflow-hidden relative'>
                {projects.map((item) => (
                    <ProjectCard image={item.image} title={item.name} text={item.text}/>
                ))}
                <div className='absolute flex justify-center items-center w-10 h-10 left-0 bg-gray-200 bg-opacity-30 rounded-full cursor-pointer hover:text-white select-none'>
                    a
                </div>
                <div className='absolute flex justify-center items-center w-10 h-10 right-0 bg-gray-200 bg-opacity-30 rounded-full cursor-pointer hover:text-white select-none'>
                    b
                </div>
            </div>
            

            
        </div>
    )
}

export async function getStaticProps() {
    return {
      props: {
          projects: [
              {
                  name: 'SweetStays',
                  text: 'AirBnb clone: NextJS, React, MapBox API',
                  image: imgSS
              }

          ]

        
      }
    }
    
  }

export default Projects
