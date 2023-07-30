import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="bg-purple-300 m-5 border border-purple-800 rounded-md">
    
      <h1 className="p-2 font-bold"> Oops! Encountered an Error</h1>
      <h3 className="p-2 font-semibold">{"Error " + status + " : " + statusText} </h3>
    </div>
  );
};

export default Error;
