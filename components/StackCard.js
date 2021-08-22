
function StackCard({ title }) {
  return (
    <div className="relative border border-[rgb(11,22,40)] flex p-5 py-10 max-w-lg">
      <div className="absolute -top-4 bg-yellow-400 text-[rgb(11,22,40)] left-10 font-semibold text-xl px-2 pr-3">
        {title}
      </div>
      <p className="mx-auto text-[rgb(11,22,40)]">
        Textosm,ssdasdasd,ddsdsdsdssssssssssssas
      </p>
    </div>
  );
}

export default StackCard;
