/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import StackCard from "./StackCard";

function Stacks() {

  useEffect(()=> {
    // window.addEventListener('scroll', () => {
    //   console.log("Scrollin")
    // })
    // Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
    var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
    var elementsToShow = document.querySelectorAll('.show-on-scroll');

    function loop() {

      elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('is-visible');
        } else {
          element.classList.remove('is-visible');
        }
      });
    
      scroll(loop);
    }
    loop();
  },[])
  
  return (
    <div className="h-screen bg-yellow-400 w-full relative pl-40" id='experience'>
      <div className='flex flex-col justify-around h-screen py-32 overflow-hidden'>

        <div className="show-on-scroll">
          <StackCard title='Front-End' stacks={['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Next.js', 'RESTful APIs']} />
        </div>
        <div className="show-on-scroll">
          <StackCard title='Back-End' stacks={['Node.js', 'Express', 'Python', 'Java']} />
        </div>
        <div className="show-on-scroll">
          <StackCard title='Database' stacks={['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle']} />
        </div>
        <div className="show-on-scroll">
          <StackCard title='DevOps' stacks={['Git', 'Docker', 'Npm/Yarn', 'Linux']} />
        </div>      
      </div>
    </div>
  );
}

export default Stacks;
