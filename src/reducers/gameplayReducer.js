import types from "../actions/types.js";

const gameplay = {
  paranormal: {
    characters: {
      It: {
        identified: false,
      },
      "Freddy Kreuger": {
        identified: false,
      },
      "Hannibal Lecter": {
        identified: false,
      },
      Leatherface: {
        identified: false,
      },
      Demagorgon: {
        identified: false,
      },
      "Tricycle from The Shining": {
        identified: false,
      },
    },
    numberIdentified: 0,
  },
  ad2222: {
    characters: {
      Consuela: {
        identified: false,
      },
      "Lois Griffin": {
        identified: false,
      },
      "Peter Griffin": {
        identified: false,
      },
      "Patrick Star": {
        identified: false,
      },
      "Stewie Griffin": {
        identified: false,
      },
      Tom: {
        identified: false,
      },
    },
    numberIdentified: 0,
  },
};

const gameplayReducer = (state = gameplay, action) => {
  //set true for the character in our gameplay and update numberIdentified
  if (action.type === types.IDENTIFY_CHARACTER) {
    const updatedGameplay = { ...state };
    updatedGameplay[action.gameboard].characters[action.name] = true;
    updatedGameplay[action.gameboard].numberIdentified += 1;
    return updatedGameplay;
  }

  return state;
};

export default gameplayReducer;
