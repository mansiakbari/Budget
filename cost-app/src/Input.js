import React, { useState } from "react";
import Display from "./Display";

const Input = () => {
  const [state, setState] = useState("");
  const [stateType, setStateType] = useState("");
  const [stateValue, setStateValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Enter Description :
        <input
          type="text"
          placeholder="Enter for..."
          value={state}
          onChange={(event) => {
            setState(event.target.value);
          }}
        ></input>
        <select
          value={stateType}
          onChange={(event) => {
            setStateType(event.target.value);
          }}
        >
          <option value="" hidden>
            Choose Any.....
          </option>
          <option value="income">Income</option>
          <option value="expence">Expense</option>
        </select>
        <input
          type="number"
          value={stateValue}
          onChange={(event) => {
            setStateValue(event.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
      <Display />
    </div>
  );
};
export default Input;
