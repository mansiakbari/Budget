import React, { useState } from "react";

const Test = () => {
  const [state, setState] = useState(0);
  const [string, setString] = useState("aaaa and");
  const [array, setArray] = useState([0, 1, 2]);
  const [obj, setObj] = useState({ description: "", number: "" });

  const Increment = () => {
    setState(state + 1);
  };
  const Decrement = () => {
    setState(state - 1);
  };
  const arrayop = () => {
    setArray((array) => [...array, 3]);
    setArray((array) => [4, 5]);
  };
  const arrayrem = () => {
    setArray(array.splice(1));
  };
  const objOp = () => {
    setObj({ ...obj, value: "" });
    setObj(" ");
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <h1>{string}</h1>
      <button
        onClick={() => {
          setString(string + " Added");
        }}
      >
        String
      </button>
      <button
        onClick={() => {
          //   setString(string.replace(string, "a"));
          setString(string.slice(0, 3));
        }}
      >
        char
      </button>
      <h1>{array}</h1>
      <button onClick={arrayop}>Array</button>
      <button onClick={arrayrem}>Array remove</button>
      <h1>
        {obj.description}-{obj.number}-{obj.value}
      </h1>
      <button onClick={objOp}>obj</button>
    </div>
  );
};

export default Test;
