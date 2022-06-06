import React, { useState } from "react";
import ShowToDo from "./ShowToDo";
import style from "./style.css";

const ToDo = () => {
  const [data, setData] = useState("Add Some Task");
  const [task, setTask] = useState([]);

  const onChangeHandler = (event) => {
    setData(event.target.value);
  };
  const submitHandler = (e) => {
    const newData = data;
    setTask([...task, newData]);
    setData("");
  };
  const RemoveTask = (a) => {
    const finalData = task.filter((currentElement, index) => {
      console.log(`index =${index}`);
      return index !== a;
    });
    setTask(finalData);
  };
  return (
    <>
      <div className="parentDiv">
        <div className="childDiv">
          <div className="main-row">To-Do App</div>
          <div className="form-group todo-row">
            <div>
              <input
                type="text"
                className="textArea"
                value={data}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <button
                id="todoBtn"
                className="btn btn-info btn-lg"
                onClick={submitHandler}
              >
                Add todo
              </button>
            </div>
          </div>
          {task.map((value, index) => {
            return (
              <ShowToDo
                key={index}
                id={index}
                text={value}
                deleteItem={RemoveTask}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ToDo;
