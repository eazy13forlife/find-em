import React from "react";
import Dropdown from "../Dropdown/Dropdown.js";

import "./TargetBox.scss";

const TargetBox = ({ className, position }) => {
  return (
    <div
      className={`TargetBox ${className}`}
      style={
        position.x && position.y
          ? { top: `${position.y}px`, left: `${position.x}px` }
          : { display: "none" }
      }
    ></div>
  );
};

export default TargetBox;
