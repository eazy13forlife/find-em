import types from "../actions/types.js";

const characterClickedReducer = (state = null, action) => {
  switch (action.type) {
    case types.CLICK_CHARACTER:
      return action.payload;
    default:
      return state;
  }
};

export default characterClickedReducer;
