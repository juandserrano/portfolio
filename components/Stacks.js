import { useEffect, useState } from "react";
import StackCard from "./StackCard";

function Stacks() {

  useEffect(() => {
    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
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

  const showStuff = (tag) => {
    tag.children[0].style.background = "rgb(11,22,40)";
    tag.children[0].children[1].style.color = "rgb(251, 191, 36)";
  };
  const hideStuff = (tag) => {
    tag.children[0].style.background = "rgb(251, 191, 36)";
    tag.children[0].children[1].style.color = "rgb(11,22,40)";
  };
  return (
    <div
      className="w-full h-screen relative overflow-hidden p-4 md:pl-20"
      id="experience"
    >
      <div className="flex flex-col h-full justify-between md:relative items-center md:items-start">
        <div
          id="frontend"
          className="show-on-scroll w-[18rem] md:w-[20rem] md:absolute md:top-[5%]"
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
              "Next.js"
            ]}
          />
        </div>
        <div
          id="cloud"
          className="show-on-scroll w-[18rem] md:w-[20rem] md:ml-[25rem] md:top-[25%] md:absolute"
          onMouseEnter={(e) => {
            showStuff(e.currentTarget);
          }}
          onMouseLeave={(e) => {
            hideStuff(e.currentTarget);
          }}
        >
          <StackCard
            title="Cloud"
            stacks={["AWS", "Azure", "Google Cloud/Firebase"]}
          />
        </div>
        <div className='space-y-12 md:space-y-0 md:absolute md:top-[45%]'>
          <div
            id="backend"
            className="show-on-scroll md:absolute w-[18rem] md:w-[20rem]"
            onMouseEnter={(e) => {
              showStuff(e.currentTarget);
            }}
            onMouseLeave={(e) => {
              hideStuff(e.currentTarget);
            }}
          >
            <StackCard
              title="Back-End"
              stacks={["Node.js", "Express", "Python", "Java", "RESTful APIs"]}
            />
          </div>
          <div
            id="domain"
            className="show-on-scroll w-[18rem] md:absolute md:ml-[50rem] md:w-[20rem]"
            onMouseEnter={(e) => {
              showStuff(e.currentTarget);
            }}
            onMouseLeave={(e) => {
              hideStuff(e.currentTarget);
            }}
          >
            <StackCard
              title="Domain Knowledge"
              stacks={["Project Management", "Scrum", "Logistics & Supply Chain"]}
            />
          </div>
        </div>
        <div
          id="database"
          className="show-on-scroll w-[18rem] md:w-[20rem] md:ml-[25rem] md:absolute md:top-[65%]"
          onMouseEnter={(e) => {
            showStuff(e.currentTarget);
          }}
          onMouseLeave={(e) => {
            hideStuff(e.currentTarget);
          }}
        >
          <StackCard
            title="Data/ML"
            stacks={["MySQL", "PostgreSQL", "MongoDB", "Pandas", "MatplotLib", "TensorFlow"]}
          />
        </div>
        <div
          id="devops"
          className="show-on-scroll w-[18rem] md:w-[20rem] md:absolute bottom-[5%]"
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
    </div>
  );
}

export default Stacks;
