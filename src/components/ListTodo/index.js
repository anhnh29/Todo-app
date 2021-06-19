import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_TASK, DONE_TASK } from "../../actions/actionType";

const ListTodo = () => {
  const todoList = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeTask = (id) => {
    dispatch({ type: REMOVE_TASK, payload: id });
  };
  const doneTask = (item) => {
    dispatch({ type: DONE_TASK, payload: item });
  };

  return (
    <>
      {todoList &&
        todoList.map((item) => {
          if (item.status === 1) {
            return (
              <div className="task">
                <div key={item.id} className="task_text">
                  {item.content}
                </div>
                <div className="task_option">
                  <button
                    onClick={() => {
                      removeTask(item.id);
                    }}
                    className="btn_rm"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => {
                      doneTask(item);
                    }}
                    className="btn_done"
                  >
                    Done
                  </button>
                </div>
              </div>
            );
          }
          return;
        })}
    </>
  );
};

export default ListTodo;
