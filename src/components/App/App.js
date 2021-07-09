import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import { ad2222Characters, paranormalCharacters } from "../../characterInfo.js";
import Game from "../Game/Game.js";
import AD2222Image from "../../images/ad2222.jpg";
import paranormalImage from "../../images/paranormal.jpg";
import "./App.scss";
import {
  clickCharacter,
  updateClickCoordinates,
  identifyCharacter,
  provideSelectionResult,
  selectGameboard,
} from "../../actions/";

//create a memoized selector for all the states i need, so i dont have to list one by one
const getStates = createSelector(
  (state) => state.selectionResult,
  (state) => state.clickCoordinates,
  (state) => state.characterClicked,
  (state) => state.gameboardSelected,
  (selectionResult, clickCoordinates, characterClicked, gameboardSelected) => {
    return {
      selectionResult,
      clickCoordinates,
      characterClicked,
      gameboardSelected,
    };
  }
);

//create dropdown lists in global scope
let ad2222CharactersList = [];
let paranormalCharactersList = [];

Object.values(ad2222Characters).forEach((object) => {
  ad2222CharactersList.push(object);
});

Object.values(paranormalCharacters).forEach((object) => {
  paranormalCharactersList.push(object);
});

const App = () => {
  const dispatch = useDispatch();

  console.log("yo");

  dispatch(selectGameboard("ad2222"));

  const {
    selectionResult,
    clickCoordinates,
    characterClicked,
    gameboardSelected,
  } = useSelector(getStates);

  //if a character has been  clicked, after 4 seconds, we change selectionResults to null so nothing shows on screen anymore. If selectionResult changes again,(so we click a new character) before the 4000ms of the other timerId is up, we want to remove that timerId so that function doesnt run, and then wait another 4s before setting to null
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (selectionResult.characterName !== null) {
        dispatch(provideSelectionResult(null, null));
      }
    }, 4000);

    return () => {
      clearTimeout(timerId);
    };
  }, [selectionResult]);

  //when an actual character on our image is clicked
  const onCharacterClick = (name) => {
    dispatch(clickCharacter(name));
  };

  //when we click anywhere on our page
  const onClick = (e) => {
    dispatch(
      updateClickCoordinates(
        e.pageX,
        e.pageY,
        e.target.clientWidth,
        e.target.clientHeight
      )
    );
  };

  //the success or error message after choosing a character from dropdown
  const renderSelectionResults = () => {
    if (selectionResult.success !== null) {
      return (
        <p
          className={`success-message success-message--${gameboardSelected}`}
          style={{ animation: "show 500ms both" }}
        >
          {selectionResult.success === true
            ? `Yay, you found ${selectionResult.characterName}!`
            : `Nope, not ${selectionResult.characterName}`}
        </p>
      );
    } else {
      return null;
    }
  };

  //function that runs when we select a character from dropdown
  const onDropdownSelection = (nameSelected) => {
    //if name of what we clicked on page doesn't match the selection we chose on dropdown
    if (nameSelected !== characterClicked) {
      dispatch(provideSelectionResult(false, nameSelected));
      //update state about error or success
    } else {
      dispatch(provideSelectionResult(true, nameSelected));
      dispatch(identifyCharacter(gameboardSelected, nameSelected));
      //show success message
    }
    dispatch(updateClickCoordinates(null, null, null));
  };

  return (
    <Game
      charactersList={ad2222CharactersList}
      gameboard={gameboardSelected}
      clickCoordinates={clickCoordinates}
      renderSelectionResults={renderSelectionResults}
      gameboardImage={AD2222Image}
      onClick={onClick}
      onDropdownSelection={onDropdownSelection}
    >
      <div
        className="lois"
        onClick={() => {
          onCharacterClick("Lois Griffin");
        }}
      ></div>
      <div
        className="patrick"
        onClick={() => {
          onCharacterClick("Patrick Star");
        }}
      ></div>
      <div
        className="petergriffin"
        onClick={() => {
          onCharacterClick("Peter Griffin");
        }}
      ></div>
      <div
        className="consuela"
        onClick={() => {
          onCharacterClick("Consuela");
        }}
      ></div>
      <div
        className="stewie"
        onClick={() => {
          onCharacterClick("Stewie Griffin");
        }}
      ></div>
      <div
        className="tom"
        onClick={() => {
          onCharacterClick("Tom");
        }}
      ></div>
    </Game>
  );
};

export default App;
