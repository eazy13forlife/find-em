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

    <AD2222 />
  );
};

export default App;
