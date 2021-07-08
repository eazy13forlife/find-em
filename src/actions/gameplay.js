import types from "../actions/types.js";

//takes in the gameboard name and character name,so our reducer can make that characters value true and increment numberIdentified
const identifyCharacter = (gameboard, name) => {
  return {
    type: types.IDENTIFY_CHARACTER,
    payload: {
      gameboard,
      name,
    },
  };
};

const provideSelectionResult = (boolean, characterName) => {
  return {
    type: types.PROVIDE_SELECTION_RESULT,
    payload: {
      characterName,
      success: boolean,
    },
  };
};

export { identifyCharacter, provideSelectionResult };
