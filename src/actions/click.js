import types from "./types.js";

const updateClickCoordinates = (x, y) => {
  return {
    type: types.UPDATE_CLICK_COORDINATES,
    payload: {
      x,
      y,
    },
  };
};

const clickCharacter = (name) => {
  return {
    type: types.CLICK_CHARACTER,
    payload: name,
  };
};

export { updateClickCoordinates, clickCharacter };
