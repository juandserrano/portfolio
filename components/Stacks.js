/* eslint-disable react/react-in-jsx-scope */
import StackCard from "./StackCard";

function Stacks() {
  
  return (
    <div className="h-screen p-16 bg-yellow-400 w-full relative pl-40" id='experience'>
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
