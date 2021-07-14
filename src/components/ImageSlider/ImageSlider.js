import React from "react";

import "./ImageSlider.scss";

const ImageSlider = ({ array }) => {
  const allItems = array.map((item) => {
    return item;
  });

  console.log(allItems);
  return <div className="ImageSlider">{allItems}</div>;
};

export default ImageSlider;
