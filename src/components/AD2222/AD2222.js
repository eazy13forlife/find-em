import React from "react";

import Dropdown from "../Dropdown/Dropdown.js";
import Header from "../Header/Header.js";
import { ad2222Characters } from "../../characterInfo.js";
import AD2222image from "../../images/ad2222.jpg";
import "./AD2222.scss";

//create dropdown list in global scope
let dropdownList = [];

Object.values(ad2222Characters).forEach((object) => {
  dropdownList.push(object);
});

const AD2222 = () => {
  return (
    <div className="AD2222">
      <Header charactersList={ad2222Characters} theme="ad2222" />
      <div className="AD2222__gameboard">
        <Dropdown list={dropdownList} theme="ad2222" />
        <img
          src={AD2222image}
          alt="AD2222:a painting of many worlds from film/tv"
          className="AD2222__image"
        />
        <div className="lois"></div>
        <div className="patrick"></div>
        <div className="petergriffin"></div>
        <div className="consuela"></div>
        <div className="stewie"></div>
        <div className="tom"></div>
      </div>
    </div>
  );
};

export default AD2222;
