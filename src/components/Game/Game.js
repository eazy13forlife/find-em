import React, { useRef, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import { provideGameboardDimensions } from "../../actions/";
import Header from "../Header/Header.js";
import Dropdown from "../Dropdown/Dropdown.js";
import TargetBox from "../TargetBox/TargetBox.js";
import WinModal from "../WinModal/WinModal.js";
import "./Game.scss";

const makeGetNumberCharacters = () => {
  return createSelector(
    (state, gameboard) => {
      return state.gameplay[gameboard].characters;
    },
    (characters) => {
      return Object.keys(characters).length;
    }
  );
};

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

  const getNumberCharacters = useMemo(() => {
    return makeGetNumberCharacters();
  }, []);

  const dispatch = useDispatch();

  const numberCharacters = useSelector((state) => {
    return getNumberCharacters(state, gameboard);
  });

  console.log(numberCharacters);

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

  return (
    <div className="Game">
      {numberIdentified === numberCharacters ? (
        <WinModal theme={gameboard} />
      ) : null}
      <Header charactersList={charactersList} theme={gameboard} />
      <TargetBox
        className={`TargetBox--${gameboard}`}
        position={clickCoordinates}
      >
        <Dropdown
          list={charactersList}
          theme={gameboard}
          onSelection={onDropdownSelection}
        />
      </TargetBox>
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
