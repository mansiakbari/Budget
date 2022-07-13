import React, { useState } from "react";

const Addcost = () => {
  const [selectedOption, setSelectedOption] = useState("Income..");

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
  }
  function setData() {
    document.write();
  }
  return (
    <div>
      Enter Name :<input type="text"></input>
      <br></br>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="income">Income</option>
        <option value="expence">Expense</option>
      </select>
      <br></br>
      <br></br>
      <button onClick={setData}>Submit</button>
    </div>
  );
};
export default Addcost;
