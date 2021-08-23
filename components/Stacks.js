import { useEffect, useState } from "react";
import StackCard from "./StackCard";

function Stacks() {
  const [activeStack, setActiveStack] = useState(null);

  useEffect(() => {
    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
      // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >=
          (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight))
      );
    }
    var scroll =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    var elementsToShow = document.querySelectorAll(".show-on-scroll");

    function loop() {
      elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      });

      scroll(loop);
    }
    loop();
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("canv");
    const ctx = canvas.getContext("2d");

    const w = (canvas.width = document.body.offsetWidth);
    const h = (canvas.height = document.body.offsetHeight);
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = "#e6a920";
    ctx.fillRect(0, 0, w / 20, h / 20);

    function matrix() {
      ctx.fillStyle = "#fbbf24";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "#e6a920";
      ctx.font = "15pt monospace";

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 10;
      });
    }

    setInterval(matrix, 50);
  }, []);

  const showStuff = (tag) => {
    tag.children[0].style.background = "rgb(11,22,40)";
    tag.children[0].children[1].style.color = "rgb(251, 191, 36)";
    setActiveStack(tag);
  };
  const hideStuff = (tag) => {
    tag.children[0].style.background = "rgb(251, 191, 36)";
    tag.children[0].children[1].style.color = "rgb(11,22,40)";
    setActiveStack(null);
  };
  return (
    <div
      className="h-screen bg-yellow-400 w-full relative pl-40 overflow-hidden"
      id="experience"
    >
      <canvas
        id="canv"
        className="absolute z-0 top-0 opacity-100"
        width={1500}
        height={2000}
      ></canvas>
      <div className="flex flex-col justify-around h-screen py-32">
        <div
          id="frontend"
          className="show-on-scroll w-[20rem]"
          onMouseEnter={(e) => {
            showStuff(e.currentTarget);
          }}
          onMouseLeave={(e) => {
            hideStuff(e.currentTarget);
          }}
        >
          <StackCard
            title="Front-End"
            stacks={[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Vue.js",
              "Next.js",
              "RESTful APIs"
            ]}
          />
        </div>
        <div id='backend'
          className="show-on-scroll w-[20rem]"
          onMouseEnter={(e) => {
            showStuff(e.currentTarget);
          }}
          onMouseLeave={(e) => {
            hideStuff(e.currentTarget);
          }}
        >
          <StackCard
            title="Back-End"
            stacks={["Node.js", "Express", "Python", "Java"]}
          />
        </div>
        <div id='database'
          className="show-on-scroll w-[20rem]"
          onMouseEnter={(e) => {
            showStuff(e.currentTarget);
          }}
          onMouseLeave={(e) => {
            hideStuff(e.currentTarget);
          }}
        >
          <StackCard
            title="Database"
            stacks={["MySQL", "PostgreSQL", "MongoDB", "Oracle"]}
          />
        </div>
        <div id='devops'
          className="show-on-scroll w-[20rem]"
          onMouseEnter={(e) => {
            showStuff(e.currentTarget);
          }}
          onMouseLeave={(e) => {
            hideStuff(e.currentTarget);
          }}
        >
          <StackCard
            title="DevOps"
            stacks={["Git", "Docker", "Npm/Yarn", "Linux"]}
          />
        </div>
      </div>
      {activeStack && (
        <div className='rounded-full flex bg-[rgb(11,22,40)] justify-center items-center absolute -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 top-1/2 left-[60%] text-yellow-400'>
        <p className='text-yellow-400'>{activeStack.id}</p>
    </div>
      )}
      
    </div>
  );
}

export default Stacks;
