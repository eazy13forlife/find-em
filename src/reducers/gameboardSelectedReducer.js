import types from "../actions/types.js";

const gameboardSelectedReducer = (state = null, action) => {
  switch (action.type) {
    case types.SELECT_GAMEBOARD:
      return action.payload;
    default:
      return state;
  }
};

export default gameboardSelectedReducer;
