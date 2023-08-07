import UserContext from "../../util/UserContext";
import { useContext, useMemo, useRef, useState } from "react";
import getNthPrimeNumber from "../../util/getNthPrimeNumber";

const Trying = () => {
  const { user, setUser } = useContext(UserContext);
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  const [stateVariable, setStateVariable] = useState(0);

  let variable = 0;
  let refVariable = useRef(0);

  const prime = useMemo(() => {
    console.log("rendered");
    return getNthPrimeNumber(number);
  }, [number]);

  return (
    <>
      <div className="bg-purple-300 m-5 border border-purple-800 rounded-md">
        <input
          className="border border-purple-950 m-2 p-2"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          className="border border-purple-950 m-2 p-2"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="flex justify-center">
        <div
          className={
            " m-4 p-4 w-96 h-48 border border-black rounded-lg align-middle flex flex-col justify-center" +
            (darkTheme && "bg-cyan-200 bg-cyan-200 text-black-500")
          }
        >
          <div>
            <span>Prime of </span>
            <input
              className="m-2 p-2 border border-purple-400 rounded-lg"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              value={number}
            />
            <span>is {prime}</span>
          </div>
          <button
            className="m-2 bg-purple-300 p-2 rounded-lg"
            onClick={() => {
              setDarkTheme(!darkTheme);
            }}
          >
            {" "}
            Toggle Color{" "}
          </button>
        </div>
        <div className=" m-4 p-1 w-96 h-48 border border-black bg-cyan-50 rounded-lg">
          <div className="m-1">
            <button
              className="bg-green-400 p-2 m-2"
              onClick={() => {
                variable += 1;
                console.log(variable);
              }}
            >
              Increment
            </button>
            <span>Normal Variable: {variable}</span>
          </div>
          <div className="m-1">
            <button
              className="bg-green-400 p-2 m-2"
              onClick={() => {
                setStateVariable(stateVariable + 1);
                console.log(stateVariable);
              }}
            >
              Increment
            </button>
            <span>State Variable: {stateVariable}</span>
          </div>
          <div className="m-1">
            <button
              className="bg-green-400 p-2 m-2"
              onClick={() => {
                refVariable.current += 1;
                console.log(refVariable.current);
              }}
            >
              Increment
            </button>
            <span>Ref Variable: {refVariable.current}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trying;
