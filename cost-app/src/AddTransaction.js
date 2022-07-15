import React, { useState } from "react";

const AddTransaction = () => {
  //   const [text, settext] = useState("");
  //   const [option, setOption] = useState("");
  //   const [amount, setAmount] = useState(0);
  //   //temp state

  const [toDo, setToDo] = useState([
    { id: 1, title: "Test 1", type: "", status: false },
    { id: 2, title: "Test 2", type: "", status: false },
  ]);

  const [newTask, setNewTask] = useState(" ");

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask(" ");
      console.log(newEntry);
    }
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };
  return (
    <div>
      {/* Display todo's */}
      {toDo && toDo.length ? " " : "No Tasks..!!"}
      {toDo &&
        toDo
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div>
                  <div className={task.status ? "done" : ""}>
                    <span>{index + 1}</span>
                    <span>{task.title}</span>
                    <span>{task.type}</span>
                  </div>
                  <div>
                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <button type="submit" className="btn">
                        Delete
                      </button>
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      <br></br>
      Enter Description :
      <input
        type="text"
        placeholder="Enter for..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      ></input>
      {/* <div>
        <select value={newTask} onChange={(e) => setNewTask(e.target.value)}>
          <option value="" hidden>
            Choose Any.....
          </option>
          <option value="income">Income</option>
          <option value="expence">Expense</option>
        </select>
      </div>
      <div>
        value :{" "}
        <input
          type="number"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        ></input>
      </div> */}
      <div>
        <button onClick={addTask}>Submit</button>
      </div>
    </div>
  );
};
export default AddTransaction;
