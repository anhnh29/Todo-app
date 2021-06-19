import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_TASK, DONE_TASK } from "../../actions/actionType";

const ListDone = () => {
  const todoList = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeTask = (id) => {
    dispatch({ type: REMOVE_TASK, payload: id });
  };
  const doneTask = (item) => {
    dispatch({ type: DONE_TASK, payload: item });
  };

  return (
    <div>
      <div className="header_task_done">Task done:</div>
      {todoList &&
        todoList.map((item) => {
          if (item.status === 2) {
            return (
              <div className="task_done">
                <div key={item.id} className="task_text_done">
                  {item.content}
                </div>
                <div className="task_option_done"></div>
              </div>
            );
          }
          return;
        })}
    </div>
  );
};

export default ListDone;
