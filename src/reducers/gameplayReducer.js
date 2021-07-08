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
    identified: [],
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
    identified: [],
  },
};

const gameplayReducer = (state = gameplay, action) => {
  //set true for the character in our gameplay and update numberIdentified
  if (action.type === types.IDENTIFY_CHARACTER) {
    const updatedGameplay = { ...state };
    updatedGameplay[action.payload.gameboard].characters[
      action.payload.name
    ].identified = true;
    updatedGameplay[action.payload.gameboard].numberIdentified += 1;
    updatedGameplay[action.payload.gameboard].identified.push(
      action.payload.name
    );
    return updatedGameplay;
  }

  return state;
};

export default gameplayReducer;
