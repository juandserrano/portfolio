import StackCard from "./StackCard";

function Stacks() {
  const effectOn = (tag) => {
    tag.children[0].style.opacity = 0;
    tag.children[1].style.opacity = 1;
  };
  const effectOff = (tag) => {
    tag.children[1].style.opacity = 0;
    tag.children[0].style.opacity = 1;
  };
  return (
    <div className="text-[#e9edde] h-screen p-16 bg-black w-full relative" id='experience'>
      <div className="absolute">
        <StackCard title='Front-End'  />
      </div>
      <div className="absolute top-1/4 left-1/2">
        <StackCard title='Back-End'  />
      </div>
      <div className="absolute top-2/4">
        <StackCard title='Database'  />
      </div>
      <div className="absolute top-3/4 left-1/2">
        <StackCard title='Other'  />
      </div>      
    </div>
  );
}

export default Stacks;
