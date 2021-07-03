import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import image1 from "../../images/paranormal.jpg";

import "./App.scss";

const App = () => {
  const [boxPosition, setBoxPosition] = useState({
    top: null,
    left: null,
  });

  console.log(boxPosition);
  const imageRef = useRef();
  const showCircle = (e) => {
    console.log(e);
    console.log(imageRef);
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
    <div className="background" onClick={showCircle} ref={imageRef}>
      <img src={image1} alt="image" />
      <div className="freddy14"></div>
      <div className="hannibal39"></div>
      <div className="leatherface53"></div>
      <div className="shiningtri"></div>
      <div className="it108"></div>
      <div className="demagorgan104"></div>
    </div>
  );
};

export default App;
