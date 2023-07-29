import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1> Oops! Encountered an Error</h1>
      <h3>{"Error " + status + " : " + statusText} </h3>
    </div>
  );
};

export default Error;
