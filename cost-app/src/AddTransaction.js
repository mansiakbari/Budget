import React, { useState } from "react";
import Input from "./Input";

const AddTransaction = () => {
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
      // console.log(newEntry);
    }
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };
  return (
    <div>
      <div>
        {toDo && toDo.length ? " " : "No Tasks..!!"}
        {toDo &&
          toDo
            .sort((a, b) => (a.title > b.title ? 1 : -1))
            .map((task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <div style={styleHistory}>
                    <span>{index + 1}</span>
                    <span>{task.title}</span>
                    <span>{task.type}</span>

                    <div>
                      <button
                        type="submit"
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
      </div>
      <Input />
    </div>
  );
};
export default AddTransaction;
