
function StackCard({ title, stacks }) {
  return (
    <div className="relative border border-[rgb(11,22,40)] flex p-5 py-10 max-w-xs">
      <div className="absolute -top-4 bg-yellow-400 text-[rgb(11,22,40)] left-10 font-semibold text-xl px-2 pr-3">
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
