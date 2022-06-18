import React from "react";
import { useDispatch } from "react-redux";

import { selectGameboard } from "../../actions/";

import history from "../../history.js";
import "./GameCard.scss";
const GameCard = ({
  image,
  gameboard,
  charactersList,
  mainColor,
  subColor,
}) => {
  const dispatch = useDispatch();

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
    <div
      className={`GameCard GameCard--${gameboard}`}
      onClick={() => {
        dispatch(selectGameboard(gameboard));
        history.push("./game");
      }}
    >
      <div className="GameCard__image-container">
        <img src={image} className="GameCard__image" />
      </div>

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
