import React from "react";
import { useSelector } from "react-redux";

import "./Dropdown.scss";

const Dropdown = ({ list, theme }) => {
  const position = useSelector((state) => {
    return state.clickCoordinates;
  });

  const getPositionCoords = (x, y, targetWidth) => {
    if (x && y) {
      if (x / targetWidth >= 0.75) {
        return {
          top: `calc(${y}px + 4rem)`,
          left: `calc(${x}px - 18rem)`,
        };
      } else {
        return {
          top: `calc(${y}px + 4rem)`,
          left: `calc(${position.x}px)`,
        };
      }
    }
    return { display: "none" };
  };

  const renderedItems = list.map((character, index) => {
    return (
      <div className={`Dropdown__item Dropdown__item--${theme}`} key={index}>
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
      style={getPositionCoords(position.x, position.y, position.targetWidth)}
    >
      <ul className="Dropdown__list">{renderedItems}</ul>
    </div>
  );
};

export default Dropdown;
