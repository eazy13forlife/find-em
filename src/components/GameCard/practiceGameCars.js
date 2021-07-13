import React from "react";
import { Transition } from "react-transition-group";

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
}) => {
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

  const getAnimationStyle = () => {
    if (gameBoardIndex === null) {
      return {
        animation: "none",
        left: startPosition,
      };
    } else {
      if (index !== gameBoardIndex) {
        if (
          index === gameBoardIndex - 1 ||
          (index + 1) % 6 === gameBoardIndex
        ) {
          console.log(index, gameBoardIndex);
          //then its leaving
          return {
            animation: "slideToLeftFromCenter ease-in 2000ms forwards",
          };
        } else {
          return {
            left: "150%",
            animation: "none",
          };
        }
      } else {
        //its entering
        return {
          left: "150%",
          animation: "slideToCenterFromRight ease-in 2000ms forwards",
        };
      }
    }
  };

  return (
    <div
      className={`GameCard GameCard--${gameboard}`}
      style={getAnimationStyle()}
    >
      <img src={image} className="GameCard__image" />
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
