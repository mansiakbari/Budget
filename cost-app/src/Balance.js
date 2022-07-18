import React from "react";

const Balance = (props) => {
  return (
    <div>
      <h3>Total Balance:</h3>
      <h3>{props.income - props.expense}</h3>
      <div>
        <div>
          <h5>Income</h5>
          <h5>{props.income}</h5>
        </div>
        <div>
          <h5>Expense</h5>
          <h5>{props.expense}</h5>
        </div>
      </div>
    </div>
  );
};
export default Balance;
