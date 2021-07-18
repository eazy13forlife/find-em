import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import {
  ad2222CharactersList,
  paranormalCharactersList,
} from "../../characterInfo.js";

import Game from "../Game/Game.js";
import AD2222Image from "../../images/ad2222.jpg";
import paranormalImage from "../../images/paranormalcopy.jpg";
import "./App.scss";
import {
  clickCharacter,
  updateClickCoordinates,
  identifyCharacter,
  provideSelectionResult,
  selectGameboard,
  provideGameboardDimensions,
} from "../../actions/";

//create a memoized selector for all the states i need, so i dont have to list one by one. our last argument will only be called if one the previous arguments is different. Otherwise the same object will be returned to us. if we don't do it like this, anytime we return an object from useSelector,our whole component will re-render even if nothing changed
const getStates = createSelector(
  (state) => state.selectionResult,
  (state) => state.clickCoordinates,
  (state) => state.characterClicked,
  (state) => state.gameboardSelected,
  (state) => state.gameplay,
  (
    selectionResult,
    clickCoordinates,
    characterClicked,
    gameboardSelected,
    gameplay
  ) => {
    return {
      selectionResult,
      clickCoordinates,
      characterClicked,
      gameboardSelected,
      numberIdentified: gameplay[gameboardSelected].numberIdentified,
      charactersIdentified: gameplay[gameboardSelected].identified,
    };
  }
);

const App = () => {
  const dispatch = useDispatch();

  const {
    selectionResult,
    clickCoordinates,
    characterClicked,
    gameboardSelected,
    numberIdentified,
    charactersIdentified,
  } = useSelector(getStates);

  console.log(charactersIdentified);
  //if a character has been  clicked, after 4 seconds, we change selectionResults to null so nothing shows on screen anymore. If selectionResult changes again,(so we click a new character) before the 4000ms of the other timerId is up, we want to remove that timerId so that function doesnt run, and then wait another 4s before setting to null
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (selectionResult.characterName !== null) {
        dispatch(provideSelectionResult(null, null));
      }
    }, 1500);

    return () => {
      clearTimeout(timerId);
    };
  }, [selectionResult]);

  //when we click anywhere on our page
  const onClick = (e) => {
    console.log(e);
    dispatch(updateClickCoordinates(e.pageX, e.pageY));
    dispatch(provideSelectionResult(null, null));
  };

  //when an actual character on our image is clicked
  const onCharacterClick = (name) => {
    dispatch(clickCharacter(name));
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
    dispatch(updateClickCoordinates(null, null)); //update click coordinates to null, so no dropdown and target box show on screen
    dispatch(clickCharacter(null)); //set character clicked to null, so it doesn't remain as the character we clicked
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

  //display a red border when the correct character has been selected
  const displayRedBorder = (name) => {
    if (charactersIdentified.includes(name)) {
      return {
        border: "0.2rem solid red",
      };
    } else {
      return null;
    }
  };

  const renderGame = () => {
    if (gameboardSelected === "ad2222") {
      return (
        <Game
          charactersList={ad2222CharactersList}
          gameboard={gameboardSelected}
          clickCoordinates={clickCoordinates}
          renderSelectionResults={renderSelectionResults}
          gameboardImage={AD2222Image}
          onClick={onClick}
          onDropdownSelection={onDropdownSelection}
          numberIdentified={numberIdentified}
          displayRedBorder={displayRedBorder}
          onCharacterClick={onCharacterClick}
        />
      );
    } else if (gameboardSelected === "paranormal") {
      return (
        <Game
          charactersList={paranormalCharactersList}
          gameboard={gameboardSelected}
          clickCoordinates={clickCoordinates}
          renderSelectionResults={renderSelectionResults}
          gameboardImage={paranormalImage}
          onClick={onClick}
          onDropdownSelection={onDropdownSelection}
          numberIdentified={numberIdentified}
          onCharacterClick={onCharacterClick}
          displayRedBorder={displayRedBorder}
        />
      );
    }
  };
  return renderGame();
};

export default App;
