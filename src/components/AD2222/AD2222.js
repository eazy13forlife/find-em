import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../Dropdown/Dropdown.js";
import Header from "../Header/Header.js";
import TargetBox from "../TargetBox/TargetBox.js";
import { ad2222Characters } from "../../characterInfo.js";
import AD2222image from "../../images/ad2222.jpg";
import "./AD2222.scss";
import {
  clickCharacter,
  updateClickCoordinates,
  identifyCharacter,
  provideSelectionResult,
} from "../../actions/";

//create dropdown list in global scope
let dropdownList = [];

Object.values(ad2222Characters).forEach((object) => {
  dropdownList.push(object);
});

const AD2222 = () => {
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

  //after 8s, selectionResults turns both success and charcter properties to null, so no selection status shows on screen
  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(provideSelectionResult(null, null));
    }, 4000);

    return () => {
      clearTimeout(timerId);
    };
  }, [selectionResult]);

  const onCharacterClick = (name) => {
    dispatch(clickCharacter(name));
  };

  const onClick = (e) => {
    console.log(e);
    dispatch(
      updateClickCoordinates(
        e.pageX,
        e.pageY,
        e.target.clientWidth,
        e.target.clientHeight
      )
    );
  };

  const renderSelectionResults = () => {
    if (selectionResult.success !== null) {
      return (
        <p
          className="success-message success-message--ad2222"
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
    <div className="AD2222">
      <Header charactersList={ad2222Characters} theme="ad2222" />
      <TargetBox className="TargetBox--ad2222" position={clickCoordinates} />
      <Dropdown
        list={dropdownList}
        theme="ad2222"
        onSelection={onDropdownSelection}
      />
      <div className="AD2222__gameboard" onClick={onClick}>
        {renderSelectionResults()}

        <img
          src={AD2222image}
          alt="AD2222:a painting of many worlds from film/tv"
          className="AD2222__image"
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
