import React from "react";

import "./TargetBox.scss";

const TargetBox = ({ className, position, children }) => {
  return (
    <div
      className={`TargetBox ${className}`}
      style={
        position.x && position.y
          ? { top: `${position.y}px`, left: `${position.x}px` }
          : { display: "none" }
      }
    >
      {children}
    </div>
  );
};

export default TargetBox;
