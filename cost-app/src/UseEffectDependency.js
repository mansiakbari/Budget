import React, { useEffect, useState } from "react";

const UseEffectDependency = () => {
  const [state, setState] = useState(0);
  //   const [newTask, setNewTask] = useState("abc");
  let newTask = "abccc";
  function setNewTask(e) {
    newTask = e.target.value;
  }

  useEffect(() => {
    console.log(`You Clicked Button ${state} Times..`);
  }, [state]);
  useEffect(() => {
    console.log(`You Changed Name...`);
  }, [newTask]);

  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Click..
      </button>
      <button>Click..</button>
      Enter Name
      <input type="text" value={newTask} onChange={setNewTask}></input>
    </div>
  );
};
export default UseEffectDependency;
//if we not define dependancy..effect runs after each render.
//If it’s empty ([]), the effect runs once, after the initial render.
