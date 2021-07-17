import React from "react";
import ReactDOM from "react-dom";
import history from "../../history.js";

import "./WinModal.scss";

const WinModal = ({ theme }) => {
  return ReactDOM.createPortal(
    <div className="WinModal">
      <div className={`WinModal__content WinModal__content--${theme}`}>
        <h1 className="text text--super-large">Congrats, you found them!</h1>
        <p
          className="text text--medium WinModal__text"
          onClick={() => {
            history.push("/");
          }}
        >
          Click here to return to the home page
        </p>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default WinModal;
