import types from "../actions/types.js";

const initialState = {
  width: null,
  height: null,
};

const gameboardDimensionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PROVIDE_GAMEBOARD_DIMENSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default gameboardDimensionsReducer;
