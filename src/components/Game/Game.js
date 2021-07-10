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
  displayRedBorder,
}) => {
  const imageRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    imageRef.current.addEventListener("load", () => {
      dispatch(
        provideGameboardDimensions(
          imageRef.current.clientWidth,
          imageRef.current.clientHeight
        )
      );
    });
  }, []);

  const renderedCharacters = charactersList.map((character, index) => {
    const className = character.name.toLowerCase().split(" ").join("-");
    console.log(className);
    return (
      <div
        key={index}
        className={className}
        onClick={() => {
          onCharacterClick(character.name);
        }}
        style={displayRedBorder(character.name)}
      ></div>
    );
  });

  console.log(renderedCharacters);

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

        {renderedCharacters}
      </div>
    </div>
  );
};

export default Game;
