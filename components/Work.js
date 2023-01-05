import Bullet from "./Bullet";

/* eslint-disable react/react-in-jsx-scope */
function Work() {
  
  return (
    
      <div className="flex pt-5 flex-col w-full h-screen bg-[rgb(11,22,40)] text-gray-200 items-center justify-center" id="work">
          <h1 className="text-3xl md:text-5xl px-5 text-center mb-5 md:mb-10">
            Work Experience
          </h1>
       <div style={{display:'flex', flexDirection:'row'}}> 
        <img src='images/rockport.png' className='rounded-xl' style={{height:64, alignSelf:'center'}}/>
        <p className="px-6 md:px-[4.5rem] text-sm md:text-lg md:max-w-4xl text-justify">
        Part of the Network Manager backend team at Rockport Networks. Responsible for maintaining code for various internal services.
        <br/>
        Worked on bugfixing, feature implementation, APIs, external service updating and testing.
        <div className="pt-3">
        <Bullet text={"Go"}/>
        <Bullet text={"Bash"}/>
        <Bullet text={"Python"}/>
        <Bullet text={"Docker"}/>
        <Bullet text={"ELK"}/>
        <Bullet text={"Kafka"}/>
        <Bullet text={"Git"}/>
        <Bullet text={"Jira"}/>
        </div>
        </p>
        </div>
       

        
      </div>
    
  );
}

export default Work;
