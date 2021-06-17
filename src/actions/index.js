import { ADD_TASK, REMOVE_TASK, DONE_TASK } from "./actionType";

let idTodo = 0;

export const addTask = (content) => (
  {
    type: ADD_TASK,
    payload: { content },
  },
  {
    type: REMOVE_TASK,
    payload: { content },
  },
  { DONE_TASK, payload: { content } }
);
