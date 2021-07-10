import React from "react";
import { useSelector } from "react-redux";

import "./Dropdown.scss";

const Dropdown = ({ list, theme, onSelection }) => {
  const position = useSelector((state) => {
    return state.clickCoordinates;
  });

  const gameboardDimensions = useSelector((state) => {
    return state.gameboardDimensions;
  });

  const getPositionCoords2 = (x, y, gameboardWidth, gameboardHeight) => {
    if (!x || !y) {
      return { display: "none" };
    }
    const exceedsLeftRange = x / gameboardWidth >= 0.75;
    const exceedsTopRange = y / gameboardHeight >= 0.88;

    const normalTop = `calc(${y}px + 4rem)`;
    const normalLeft = `calc(${x}px)`;
    const adjustedTop = `calc(${y}px - 24vw)`;
    const adjustedLeft = `calc(${x}px - 18vw)`;

    if (exceedsLeftRange) {
      if (exceedsTopRange) {
        return {
          top: adjustedTop,
          left: adjustedLeft,
        };
      } else {
        return {
          top: normalTop,
          left: adjustedLeft,
        };
      }
    }

    if (exceedsTopRange) {
      if (exceedsLeftRange) {
        return {
          top: adjustedTop,
          left: adjustedLeft,
        };
      } else {
        return {
          top: adjustedTop,
          left: normalLeft,
        };
      }
    }

    return {
      top: normalTop,
      left: normalLeft,
    };
  };

  const renderedItems = list.map((character, index) => {
    return (
      <div
        className={`Dropdown__item Dropdown__item--${theme}`}
        key={index}
        onClick={() => {
          onSelection(character.name);
        }}
      >
        <figure className="Dropdown__image-container">
          <img
            src={character.image}
            alt="charcter.name"
            className="Dropdown__image"
          />
        </figure>
        <p className="text text--small Dropdown__character">{character.name}</p>
      </div>
    );
  });

  return (
    <div
      className="Dropdown"
      style={getPositionCoords2(
        position.x,
        position.y,
        gameboardDimensions.width,
        gameboardDimensions.height
      )}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ul className="Dropdown__list">{renderedItems}</ul>
    </div>
  );
};

export default Dropdown;
