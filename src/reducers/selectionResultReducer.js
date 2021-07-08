import types from "../actions/types.js";

const defaultSelection = {
  success: null,
  character: null,
};

const selectionResultReducer = (state = defaultSelection, action) => {
  switch (action.type) {
    case types.PROVIDE_SELECTION_RESULT:
      return action.payload;
    default:
      return state;
  }
};

export default selectionResultReducer;
