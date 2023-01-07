
function StackCard({ title, stacks }) {
  return (
    <div className="relative border-2 bg-[#fbbf24] shadow-md border-[#00080b] flex p-2 py-4 xl:p-5 xl:py-8 max-w-xs cursor-default select-none">
      <div className="absolute -top-4 bg-yellow-400 text-[#00080b] left-10 font-semibold text-xl px-2 pr-3 border-2 border-[#00080b]">
        {title}
      </div>
      <div className="mx-auto text-[#00080b]">
       {stacks.map((item) => (
         <span key={item}>{item} </span>
       ))}
      </div>
    </div>
  );
}

export default StackCard;
