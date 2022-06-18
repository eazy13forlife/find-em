import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

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
    console.log(exceedsTopRange);
    console.log(exceedsLeftRange);
    const normalTop = { top: "0%" };
    const normalLeft = { left: "0%" };
    const adjustedTop = { bottom: "100%" };
    const adjustedLeft = { right: "100%" };

    if (exceedsLeftRange) {
      if (exceedsTopRange) {
        return {
          ...adjustedLeft,
          ...adjustedTop,
        };
      } else {
        return {
          ...adjustedLeft,
          ...normalTop,
        };
      }
    }

    if (exceedsTopRange) {
      if (exceedsLeftRange) {
        return {
          ...adjustedLeft,
          ...adjustedTop,
        };
      } else {
        return {
          ...normalLeft,
          ...adjustedTop,
        };
      }
    }

    return {
      ...normalTop,
      ...normalLeft,
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

Dropdown.propTypes = {
  list: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired,
  onSelection: PropTypes.func,
};
export default Dropdown;
