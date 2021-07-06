import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import {
  clickCharacter,
  updateClickCoordinates,
  selectGameboard,
} from "../../actions/";
import image1 from "../../images/paranormal.jpg";
import TargetBox from "../TargetBox/TargetBox.js";
import AD2222 from "../AD2222/AD2222.js";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  dispatch(selectGameboard("ad2222"));
  const clickCoordinates = useSelector((state) => {
    return state.clickCoordinates;
  });
  const showCircle = (e) => {
    dispatch(updateClickCoordinates(e.pageX, e.pageY, e.target.clientWidth));
    console.log(e);
  };
  return (
    /*
    <div className="background" onClick={showCircle} ref={imageRef}>
      <img src={image1} alt="image" />
      <div className="famguy"></div>
      <div className="patrick"></div>
      <div className="petergriffin"></div>
      <div className="consuela"></div>
      <div className="stewie"></div>
      <div className="tom"></div>
    </div>
    */
    <div className="background" onClick={showCircle}>
      <AD2222 />

      <TargetBox className="TargetBox--ad2222" position={clickCoordinates} />
      <div
        className="freddy14"
        onClick={() => {
          dispatch(clickCharacter("Freddy"));
        }}
      ></div>
      <div className="hannibal39"></div>
      <div className="leatherface53"></div>
      <div className="shiningtri"></div>
      <div className="it108"></div>
      <div className="demagorgan104"></div>
      <div className="random"></div>
    </div>
  );
};

export default App;
