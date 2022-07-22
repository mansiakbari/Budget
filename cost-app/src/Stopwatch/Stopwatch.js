import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  //   debugger;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  const reset = () => {
    setMinutes(0);
    setSeconds(0);
  };
  const stop = () => {
    console.log(timer);
    clearInterval(timer);
  };
  return (
    <div>
      <h1>
        Timer <br></br>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

export default Stopwatch;
