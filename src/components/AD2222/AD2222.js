import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import { ad2222Characters, paranormalCharacters } from "../../characterInfo.js";
import Game from "../Paranormal/Paranormal.js";
import AD2222image from "../../images/ad2222.jpg";
import "./AD2222.scss";
import {
  clickCharacter,
  updateClickCoordinates,
  identifyCharacter,
  provideSelectionResult,
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

const AD2222 = () => {
  const dispatch = useDispatch();

  const {
    selectionResult,
    clickCoordinates,
    characterClicked,
    gameboardSelected,
  } = useSelector(getStates);

  //after 8 seconds, selectionResults turns both its success and character properties to null, so no selection status shows on screen
  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(provideSelectionResult(null, null));
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
      gameboardImage={AD2222image}
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
          console.log("hey");
          onCharacterClick("Tom");
        }}
      ></div>
    </Game>
  );
};

export default AD2222;
