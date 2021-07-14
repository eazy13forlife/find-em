import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Transition } from "react-transition-group";

import { selectGameboard } from "../../actions/";

import history from "../../history.js";

import "./GameCard.scss";
const GameCard = ({
  image,
  gameboard,
  charactersList,
  mainColor,
  subColor,
  startPosition,
  gameBoardIndex,
  index,
  forward,
}) => {
  const dispatch = useDispatch();
  const [position, setPosition] = useState(`GameCard--${startPosition}`);
  useEffect(() => {
    if (forward) {
      if (gameBoardIndex === null) {
        return null;
      } else if (index !== gameBoardIndex) {
        //if our index doesnt match the gameboard index, it means it shouldnt be shown
        //if in center,just move it left so it cant be seen
        if (position === `GameCard--center`) {
          setPosition("GameCard--left");
        }
      } else {
        //if it does match gameboard, it means it should be shown
        //if to the right, move to the center so it can be seen
        if (position === `GameCard--right`) {
          setPosition("GameCard--center");
        }
      }
    } else {
      //when we hit previous button
      if (gameBoardIndex === null) {
        return null;
      } else if (index !== gameBoardIndex) {
        //if initially in center,just move it to the right, so it wont be seen
        if (position === `GameCard--center`) {
          setPosition("GameCard--right");
        }
      } else {
        //if initially to the left, move to the center so it can be seen
        if (position === "GameCard--left") {
          setPosition("GameCard--center");
        }
      }
    }
  }, [gameBoardIndex, forward]);

  const renderedItems = charactersList.map((character, index) => {
    return (
      <React.Fragment key={index}>
        <img
          src={character.image}
          alt={character.name}
          className="GameCard__character-image"
        />
        <div className="GameCard__character-details">
          <p className={`text--small ${mainColor}`}>{character.name}</p>
          <p className={`text--extra-small italic ${subColor}`}>
            {character.reference}
          </p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className={`GameCard GameCard--${gameboard} ${position}`}>
      <img src={image} className="GameCard__image" />
      <button
        onClick={() => {
          dispatch(selectGameboard(gameboard));
          history.push("./game");
        }}
      >
        Take me
      </button>
      <div className="GameCard__info">
        <h2 className="header2">
          <span className={`header2__main ${mainColor}`}>{gameboard}</span>
          <span className={`header2__sub ${subColor}`}>By Egor Klyuchnyk</span>
        </h2>
        {renderedItems}
      </div>
    </div>
  );
};

export default GameCard;
