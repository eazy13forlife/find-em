import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateClickCoordinates } from "../../actions/";

import "./Header.scss";

const Header = ({ charactersList, theme }) => {
  const dispatch = useDispatch();
  // get all my characters for the gameboard we are currently on
  const allCharacters = useSelector((state) => {
    return state.gameplay[state.gameboardSelected].characters;
  });

  //get images for each character in my charactersList
  const images = Object.values(charactersList).map((character, index) => {
    const name = character.name.split(" ")[0];
    const identified = allCharacters[character.name].identified === true;

    return (
      <figure className="Header__image-container" key={index}>
        <img
          src={character.image}
          alt={character.name}
          className={`Header__image ${
            identified ? "Header__image" : "Header__image--hidden"
          }`}
        />
        <figcaption className="Header__image-name text--medium text--white">
          {name}
        </figcaption>
      </figure>
    );
  });

  return (
    <header
      className={`Header Header--${theme}`}
      onClick={() => {
        dispatch(updateClickCoordinates(null, null, null));
      }}
    >
      <h1 className={`Header__logo Header__logo--${theme}`}>Find Em</h1>
      <div className="Header__character-images">{images}</div>
    </header>
  );
};

export default Header;
