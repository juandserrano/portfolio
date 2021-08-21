
function Hero() {
  const effectOn = (tag) => {
    tag.children[0].style.opacity = 0;
    tag.children[1].style.opacity = 1;
  };
  const effectOff = (tag) => {
    tag.children[1].style.opacity = 0;
    tag.children[0].style.opacity = 1;
  };
  return (
    <div className="flex justify-center text-[#ffffff] h-screen bg-[rgb(11,22,40)] px-36 border border-white" id="main">
      <div className="flex flex-col items-center justify-center">
          
        
          
            <h1 className='glitch w-1/2 h-56'>
                <span className="">
                    Juan Diego Serrano
                </span>
                <span>
                    Juan Diego Serrano
                </span>
            </h1>
          
          <p className="text-center w-1/2">
            Hello there! My name is Juan and I'm a Ottawa-based Full Stack
            Developer. I have Experience in HTML/CSS/JS, React, RESTful APIs,
            Express, Node, Python and Java, among other supporting technologies.
          </p>
        
      </div>
    </div>
  );
}

export default Hero;
