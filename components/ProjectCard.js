import Image from 'next/image';

function ProjectCard({ image, text, link }) {
    return (
        <div className='w-[600px] mx-5 h-3/4 p-8 bg-gray-300 bg-opacity-80 opacity-80 hover:opacity-100 shadow-2xl rounded-3xl flex flex-col items-center justify-between flex-shrink-0'>
           <div className='relative w-full h-2/3 self-start'>
                <Image src={image} objectFit='fill' layout='fill' />
           </div>
           <div className='flex flex-col items-center'>
            <p className='p-3 mb-10'>
                {text}
            </p>
            <a className='border border-purple-800 bg-purple-500 text-gray-200 py-3 px-5 rounded-xl hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer' href={link}>View</a>

           </div>
            
        </div>
    )
}

export default ProjectCard
