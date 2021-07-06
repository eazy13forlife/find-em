import types from "./types.js";

const selectGameboard = (name) => {
  return {
    type: types.SELECT_GAMEBOARD,
    payload: name,
  };
};

export { selectGameboard };
