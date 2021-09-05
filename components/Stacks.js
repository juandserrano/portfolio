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
      className="w-full h-screen relative overflow-hidden p-4 xl:pl-20"
      id="experience"
    >
      <div className="flex flex-col h-full justify-around xl:relative items-center xl:items-start">
        <div
          id="frontend"
          className="show-on-scroll w-[18rem] xl:w-[20rem] xl:absolute xl:top-[5%]"
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
              "React",
              "Vue.js"
            ]}
          />
        </div>
        <div
          id="cloud"
          className="show-on-scroll w-[18rem] xl:w-[20rem] xl:ml-[25rem] xl:top-[25%] xl:absolute"
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
        <div className='space-y-[6vh] xl:space-y-0 xl:absolute xl:top-[45%]'>
          <div
            id="backend"
            className="show-on-scroll xl:absolute w-[18rem] xl:w-[20rem]"
            onMouseEnter={(e) => {
              showStuff(e.currentTarget);
            }}
            onMouseLeave={(e) => {
              hideStuff(e.currentTarget);
            }}
          >
            <StackCard
              title="Back-End"
              stacks={["Node.js", "Express", "Python", "Java", "RESTful APIs", "Spring Boot"]}
            />
          </div>
          <div
            id="domain"
            className="show-on-scroll w-[18rem] xl:absolute xl:ml-[50rem] xl:w-[20rem]"
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
          className="show-on-scroll w-[18rem] xl:w-[20rem] xl:ml-[25rem] xl:absolute xl:top-[65%]"
          onMouseEnter={(e) => {
            showStuff(e.currentTarget);
          }}
          onMouseLeave={(e) => {
            hideStuff(e.currentTarget);
          }}
        >
          <StackCard
            title="Data/ML"
            stacks={["MySQL", "PostgreSQL", "MongoDB", "Pandas", "MatplotLib"]}
          />
        </div>
        <div
          id="devops"
          className="show-on-scroll w-[18rem] xl:w-[20rem] xl:absolute bottom-[5%]"
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
