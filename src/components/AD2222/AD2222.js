import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import Dropdown from "../Dropdown/Dropdown.js";
import Header from "../Header/Header.js";
import TargetBox from "../TargetBox/TargetBox.js";
import { ad2222Characters, paranormalCharacters } from "../../characterInfo.js";
import AD2222image from "../../images/ad2222.jpg";
import "./AD2222.scss";
import {
  clickCharacter,
  updateClickCoordinates,
  identifyCharacter,
  provideSelectionResult,
} from "../../actions/";

const getStates = createSelector(
  (state) => state.seelctionResult,
  (state) => state.clickCoordinates,
  (state) => state.characterClicked,
  (state) => state.gameboard,
  (selectionResults, clickCoordinates, characterClicked, gameboard) => {
    return {
      selectionResults,
      clickCoordinates,
      characterClicked,
      gameboard,
    };
  }
);
//create dropdown lists in global scope
let ad2222DropdownList = [];
let paranormalDropdownList = [];

Object.values(ad2222Characters).forEach((object) => {
  ad2222DropdownList.push(object);
});

Object.values(paranormalCharacters).forEach((object) => {
  paranormalDropdownList.push(object);
});

const AD2222 = ({ children }) => {
  console.log(children);
  const dispatch = useDispatch();

  const selectionResult = useSelector((state) => {
    return state.selectionResult;
  });

  const clickCoordinates = useSelector((state) => {
    return state.clickCoordinates;
  });

  const characterClicked = useSelector((state) => {
    return state.characterClicked;
  });

  const gameboard = useSelector((state) => {
    return state.gameboardSelected;
  });

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
          className={`success-message success-message--${gameboard}`}
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
      dispatch(identifyCharacter(gameboard, nameSelected));
      //show success message
    }
    dispatch(updateClickCoordinates(null, null, null));
  };

  return (
    <div className="Game">
      <Header charactersList={ad2222Characters} theme={gameboard} />
      <TargetBox
        className={`TargetBox--${gameboard}`}
        position={clickCoordinates}
      />
      <Dropdown
        list={ad2222DropdownList}
        theme="ad2222"
        onSelection={onDropdownSelection}
      />
      <div className="Game_gameboard" onClick={onClick}>
        {renderSelectionResults()}

        <img
          src={AD2222image}
          alt="AD2222:a painting of many worlds from film/tv"
          className="Game__image"
        />
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
      </div>
    </div>
  );
};

export default AD2222;
