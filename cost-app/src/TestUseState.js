import React, { useState } from "react";

const Test = () => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(5);
  const [string, setString] = useState("aaaa and");
  const [char, setChar] = useState("A");
  const [addArray, setAdd] = useState([0, 1, 2]);
  const [removeArray, setRemove] = useState([0, 1, 2, 3, 4, 5]);
  const [obj, setObj] = useState({});

  const operation = () => {
    setIncrement(increment + 1);
    setDecrement(decrement - 1);
    setString(string + " Added New String");
    setChar(string.replace(string, "M"));
    setAdd((array) => [...array, 3, 4, 5]);
    setRemove(removeArray.splice(1));
    setObj({ ...obj, name: "Hello", number: 0 });
  };

  return (
    <div>
      <h1>{increment}</h1>
      <h1>{decrement}</h1>
      <h1>{string}</h1>
      <h1>{char}</h1>
      <h1>{addArray}</h1>
      <h1>{removeArray}</h1>
      <h1>
        {obj.name}-{obj.number}
      </h1>
      <button onClick={operation}>Click Hear...</button>
    </div>
  );
};
export default Test;
