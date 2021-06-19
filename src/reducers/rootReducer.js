import { ADD_TASK, REMOVE_TASK, DONE_TASK } from "../actions/actionType";

const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case REMOVE_TASK:
      const newList = state.filter((item) => {
        return item.id !== action.payload;
      });
      return (state = newList);
    case DONE_TASK:
      const newArrUpdate = state.filter((item) => {
        return item.id !== action.payload.id;
      });
      return (state = [
        ...newArrUpdate,
        { id: action.payload.id, status: 2, content: action.payload.content },
      ]);
    default:
      return state;
  }
};

export default rootReducer;
