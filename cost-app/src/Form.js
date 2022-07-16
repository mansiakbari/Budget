import React, { useState } from "react";

import "./App.css";
import Balance from "./Balance";

function App() {
  const style = {
    textAlign: "center",
    paddingTop: "0.75em",
    marginTop: "1em",
    marginLeft: "60%",
    fontWeight: "bold",
    fontSize: "2em",
    border: "2px solid black",
  };
  const styleHistory = {
    padding: "2%",
    paddingDown: "2%",
    border: "2px solid black",
    backgroundColor: "lightGrey",
  };
  const styleDelete = {
    padding: "1%",
    marginTop: "2px",
    border: "2px solid black",
    backgroundColor: "lightGrey",
  };
  //   debugger;
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState(" ");

  const [newCost, setNewCost] = useState(" ");

  const [newType, setNewType] = useState(" ");

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const addTask = () => {
    if (newTask && newCost && newType) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        cost: newCost,
        type: newType,
        status: false,
      };
      setToDo([...toDo, newEntry]);
      if (newType === "income") {
        setIncome(income + +newCost);
      }
      if (newType === "expense") {
        setExpense(expense + +newCost);
      }
      setNewTask(" ");
      setNewCost(" ");
      setNewType(" ");
      console.log(setNewTask);
      console.log(setNewCost);
      console.log(setNewType);

      console.log(newEntry);
    }
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  return (
    <div>
      {toDo && toDo.length ? " " : "No Tasks..!!"}

      {toDo &&
        toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div style={styleHistory}>
                <div>
                  <span>{index + 1}</span>
                  <span>{task.title}</span>
                  <span>${task.cost}</span>
                  <span>{task.type}</span>
                </div>
                <div>
                  <button
                    type="submit"
                    title="Delete"
                    style={styleDelete}
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}

      <Balance income={income} expense={expense} />
      <div style={style}>
        <h3>Add new Transaction</h3>

        <label>Description</label>

        <input
          type="text"
          placeholder="Enter Description"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <br></br>
        <label>Transaction Type</label>
        <br></br>
        <select value={newType} onChange={(e) => setNewType(e.target.value)}>
          <option value="" hidden>
            Select Any..
          </option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <br></br>
        <label>Value</label>
        <br></br>

        <input
          type="number"
          value={newCost}
          onChange={(e) => setNewCost(e.target.value)}
          placeholder="$"
        />
        <br></br>

        <button title="Submit" onClick={addTask}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default App;
