import React, { useState } from "react";

const Addcost = () => {
  const style = {
    textAlign: "center",
    paddingTop: "0.75em",
    marginTop: "1em",
    marginLeft: "60%",
    fontWeight: "bold",
    fontSize: "2em",
    border: "2px solid black",
  };
  const styleDes = {
    textAlign: "center",
  };
  const styleChoose = {
    fontWeight: "bold",
    textAlign: "center",
  };
  const styleValue = {
    fontWeight: "bold",
    textAlign: "center",
  };
  const styleSubmit = {
    padding: "3%",
    backgroundColor: "lightGrey",
  };
  const [selectedOption, setSelectedOption] = useState("");
  const [items, setItems] = useState("");

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
  }
  function handleAdd() {
    setItems = [...items, selectedOption];
    setSelectedOption("");
  }

  return (
    <div style={style}>
      <div style={styleDes}>
        Enter Description :{" "}
        <input type="text" placeholder="Enter for..."></input>
        <br></br>
        <br></br>
      </div>

      <div style={styleChoose}>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="" hidden>
            Choose Any.....
          </option>
          <option value="income">Income</option>
          <option value="expence">Expense</option>
        </select>
        <br></br>
        <br></br>
      </div>

      <div style={styleValue}>
        value : <input type="number"></input>
      </div>
      <div style={styleSubmit}>
        <button onClick={handleAdd}>Submit</button>
      </div>
    </div>
  );
};
export default Addcost;
