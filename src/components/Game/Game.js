import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { provideGameboardDimensions } from "../../actions/";
import Header from "../Header/Header.js";
import Dropdown from "../Dropdown/Dropdown.js";
import TargetBox from "../TargetBox/TargetBox.js";
import "./Game.scss";

const Game = ({
  charactersList,
  gameboard,
  clickCoordinates,
  renderSelectionResults,
  gameboardImage,
  children,
  onClick,
  onDropdownSelection,
  numberIdentified,
  onCharacterClick,
}) => {
  const imageRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    imageRef.current.addEventListener("load", () => {
      console.log("hey");
      dispatch(
        provideGameboardDimensions(
          imageRef.current.clientWidth,
          imageRef.current.clientHeight
        )
      );
    });
  }, []);
  return (
    <div className="Game">
      {numberIdentified === 6 ? (
        <p className="win">Yay</p>
      ) : (
        <p className="winl">boo</p>
      )}
      <Header charactersList={charactersList} theme={gameboard} />
      <TargetBox
        className={`TargetBox--${gameboard}`}
        position={clickCoordinates}
      />
      <Dropdown
        list={charactersList}
        theme={gameboard}
        onSelection={onDropdownSelection}
      />
      <div className="Game__gameboard" onClick={onClick}>
        {renderSelectionResults()}

        <img
          src={gameboardImage}
          alt={`${gameboard}`}
          className="Game__image"
          ref={imageRef}
        />
        {children}
      </div>
    </div>
  );
};

export default Game;
