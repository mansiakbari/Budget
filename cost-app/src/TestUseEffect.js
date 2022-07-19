import React, { useEffect, useState } from "react";

const TestUseEffect = () => {
  const [set, setState] = useState(0);
  const [num, setNum] = useState(0);
  useEffect(() => {
    alert("Clicked...");
  }, [set]);
  return (
    <div>
      <h1>{set}</h1>
      <button
        onClick={() => {
          setState(set + 1);
        }}
      >
        Click for Alert
      </button>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};
export default TestUseEffect;
