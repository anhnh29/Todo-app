import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { ADD_TASK } from "../../actions/actionType";

const AddTask = () => {
  const [task, setTask] = useState([]);
  const dispatch = useDispatch();

  const submitForm = (event) => {
    event.preventDefault();
    const idRandom = (Math.random() * 1000).toFixed();
    if (task === "") {
      alert("Hello! I am an alert box!");
    } else {
      dispatch({
        type: ADD_TASK,
        payload: { id: idRandom, status: 1, content: task },
      });
      setTask("");
    }
  };

  // id: console.log((Math.random() * 1000).toFixed());

  const handleChangeInput = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <input
          onChange={handleChangeInput}
          value={task}
          className="input"
          type="text"
        />
        <button type="submit" className="button">
          Add task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
