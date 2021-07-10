import types from "./types.js";

const selectGameboard = (name) => {
  return {
    type: types.SELECT_GAMEBOARD,
    payload: name,
  };
};

const provideGameboardDimensions = (width, height) => {
  return {
    type: types.PROVIDE_GAMEBOARD_DIMENSIONS,
    payload: {
      width,
      height,
    },
  };
};
export { selectGameboard, provideGameboardDimensions };
