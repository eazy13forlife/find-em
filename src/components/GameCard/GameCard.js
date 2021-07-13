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
  zindex,
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
  const getZIndexStyle = () => {
    if (zindex) {
      return zindex;
    } else {
      return 0;
    }
  };
  /*
  const getAnimationStyle = () => {
    if (gameBoardIndex === null) {
      return "none";
    } else {
      if (index !== gameBoardIndex) {
        //then its leaving
        return "slideToLeftFromCenter ease-in 2000ms forwards";
      } else {
        //its entering
        return "slideToCenterFromRight ease-in 2000ms forwards";
      }
    }
  };
*/

  return (
    <div className={`GameCard GameCard--${gameboard} ${position}`}>
      <img src={image} className="GameCard__image" />
      <button
        onClick={() => {
          dispatch(selectGameboard("ad2222"));
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

/*
useEffect(() => {
  if (forward) {
    if (gameBoardIndex === null) {
    } else if (index !== gameBoardIndex) {
      //if initially in center,just move it left
      if (position === `GameCard--center`) {
        setPosition("GameCard--center GameCard--center--move-left");
      }

      //if iniitally to the right but moved to the center,just move to left again
      if (position === "GameCard--right GameCard--right--move-center") {
        setPosition(
          "GameCard--right GameCard--right--move-center GameCard--right--move-center--move-left"
        );
      }
    } else {
      //if initially to the right, move to the center so it can be seen
      if (position === `GameCard--right`) {
        setPosition("GameCard--right GameCard--right--move-center");
      }
    }
  } else {
    if (gameBoardIndex === null) {
    } else if (index !== gameBoardIndex) {
      //if initially in center,just move it to the right, so it wont be seen
      if (position === `GameCard--center`) {
        setPosition("GameCard--center GameCard--center--move-right");
      }

      //if iniitally to the right but moved to the center,just move to right again
      if (position === "GameCard--right GameCard--right--move-center") {
        setPosition("GameCard--right");
      }
    } else {
      //if initially to the center but then moved to the left, move to the center so it can be seen
      if (position === "GameCard--center GameCard--center--move-left") {
        setPosition("GameCard--center");
      }

      if (
        position ===
        "GameCard--right GameCard--right--move-center GameCard--right--move-center--move-left"
      ) {
        setPosition("GameCard--right GameCard--right--move-center");
      }
    }
  }
}, [gameBoardIndex, forward]);
*/
export default GameCard;
