import React from "react";

import Header from "../Header/Header.js";
import Dropdown from "../Dropdown/Dropdown.js";
import TargetBox from "../TargetBox/TargetBox.js";
import "./Paranormal.scss";

const Paranormal = ({
  charactersList,
  gameboard,
  clickCoordinates,
  renderSelectionResults,
  gameboardImage,
  children,
  onClick,
  onDropdownSelection,
}) => {
  return (
    <div className="Game">
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
          alt={`${gameboard.toUpperCase()}`}
          className="Game__image"
        />
        {children}
      </div>
    </div>
  );
  /*
  <div className="background" onClick={showCircle}>
    <img src={image1} alt="image" />
    <div className="freddy14"></div>
    <div className="hannibal39"></div>
    <div className="leatherface53"></div>
    <div className="shiningtri"></div>
    <div className="it108"></div>
    <div className="demagorgan104"></div>
    <div className="random"></div>
  </div>
  */
};

export default Paranormal;
