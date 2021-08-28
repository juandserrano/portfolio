
function StackCard({ title, stacks }) {
  return (
    <div className="relative border-2 shadow-md border-[rgb(11,22,40)] flex p-2 py-4 md:p-5 md:py-8 max-w-xs cursor-default select-none">
      <div className="absolute -top-4 bg-yellow-400 text-[rgb(11,22,40)] left-10 font-semibold text-xl px-2 pr-3 border-2 border-[rgb(11,22,40)]">
        {title}
      </div>
      <div className="mx-auto text-[rgb(11,22,40)]">
       {stacks.map((item) => (
         <span key={item}>{item} </span>
       ))}
      </div>
    </div>
  );
}

export default StackCard;
