import Bullet from "./Bullet";
import data from "../public/data.json"
/* eslint-disable react/react-in-jsx-scope */
function Work() {
  
  return (
    
      <div className="px-6 flex pt-5 flex-col w-full h-screen bg-[rgb(11,22,40)] text-gray-200 items-center justify-center" id="work">
          <h1 className="text-3xl md:text-5xl px-5 text-center mb-5 md:mb-10">
            Work Experience
          </h1>
       <div className="flex flex-col md:flex-row"> 
          <img src='images/rockport.png' className='mb-5 md:mb-0 rounded-xl' style={{height:64, alignSelf:'center'}}/>
          <div className="flex flex-col md:max-w-4xl">
            <p className="px-6 text-center md:text-justify text-base md:text-xl">
                  {data.work.rockport.description}
            </p>
            <div className="pt-3 flex flex-wrap px-6">
                  {data.work.rockport.stack.map(s => <Bullet text={s}/>)}
            </div>
          </div>
        </div>
       

        
      </div>
    
  );
}

export default Work;
