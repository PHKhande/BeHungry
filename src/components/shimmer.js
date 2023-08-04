const Shimmer = () => {
  return (
    <div
      data-testid="shimmer"
      className="border border-purple-800 p-3 m-5 bg-purple-200 shadow-xl rounded-md flex flex-wrap justify-evenly"
    >
      {Array(24)
        .fill("")
        .map((item, index) => {
          return (
            <div
              key={index}
              className="border border-purple-300 m-2 w-52 h-52 bg-slate-200 shadow-xl rounded-md"
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
