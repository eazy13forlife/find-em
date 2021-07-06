import types from "../actions/types.js";

const clickCoordinatesReducer = (
  state = { x: null, y: null, targetWidth: null },
  action
) => {
  switch (action.type) {
    case types.UPDATE_CLICK_COORDINATES:
      return action.payload;
    default:
      return state;
  }
};

export default clickCoordinatesReducer;
