import types from "../actions/types.js";

//takes in the gameboard name and character name,so our reducer can make that characters value true
const identifyCharacter = (gameboard, name) => {
  return {
    type: types.IDENTIFY_CHARACTER,
    payload: {
      gameboard,
      name,
    },
  };
};

export { identifyCharacter };
