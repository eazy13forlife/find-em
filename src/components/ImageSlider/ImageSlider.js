import React, { useState, useEffect } from "react";

import "./ImageSlider.scss";

const getInitialClassNames = (array) => {
  const initial = {};
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      initial[0] = "Image--center";
    } else {
      initial[i] = "Image--right";
    }
  }
  return initial;
};

const ImageSlider = ({ array }) => {
  const [currentImagesIndex, setCurrentImagesIndex] = useState(null);

  const [forward, setForward] = useState(true);

  const [indexClassNames, setIndexClassNames] = useState(
    getInitialClassNames(array)
  );

  //function for when we click next and increment the index. Return value is our new index.
  const incrementCurrentImagesIndex = () => {
    if (!forward) {
      setForward(true);
    }
    if (currentImagesIndex === null) {
      setCurrentImagesIndex(1);
    } else {
      let incrementedIndex = currentImagesIndex + 1;
      if (incrementedIndex > array.length - 1) {
        incrementedIndex %= array.length;
      }
      setCurrentImagesIndex(incrementedIndex);
    }
  };

  //function for when we click previous and decrement the index. return value is our new index.
  const decrementcurrentImagesIndex = () => {
    if (forward) {
      setForward(false);
    }
    if (currentImagesIndex === null) {
      setCurrentImagesIndex(array.length - 1);
    } else {
      let decrementedIndex = currentImagesIndex - 1;
      if (decrementedIndex < 0) {
        const remainder = Math.abs(decrementedIndex) % array.length;
        decrementedIndex = array.length - remainder;
      }
      setCurrentImagesIndex(decrementedIndex);
    }
  };

  //useEffect for when our index changes. We get the new classNames for each index
  useEffect(() => {
    const newIndexClassNames = { ...indexClassNames };

    const updateClassNamesIfForward = () => {
      for (let i = 0; i < Object.keys(newIndexClassNames).length; i++) {
        if (
          //if our index isnt equal to the current image were one, and its in the center('visible'),move to the left so it cant be seen.
          i !== currentImagesIndex &&
          indexClassNames[i] === "Image--center"
        ) {
          newIndexClassNames[i] = "Image--left";
        } else if (
          //if our index is equal to the current image were one, and its in the right('not visible'),move to the left so it can be seen.
          i === currentImagesIndex &&
          indexClassNames[i] === "Image--right"
        ) {
          newIndexClassNames[i] = "Image--center";
        }
      }
      setIndexClassNames(newIndexClassNames);
    };

    const updateClassNamesIfPrevious = () => {
      for (let i = 0; i < Object.keys(newIndexClassNames).length; i++) {
        if (
          //if our index isnt equal to the current image were one, and its in the center('visible'),move to the right so it cant be seen.
          i !== currentImagesIndex &&
          indexClassNames[i] === "Image--center"
        ) {
          newIndexClassNames[i] = "Image--right";
        } else if (
          //if our index is equal to the current image were one, and its in the left('not visible'),move to the center so it can be seen.
          i === currentImagesIndex &&
          indexClassNames[i] === "Image--left"
        ) {
          newIndexClassNames[i] = "Image--center";
        }
      }
      setIndexClassNames(newIndexClassNames);
    };

    if (currentImagesIndex !== null) {
      if (forward) {
        updateClassNamesIfForward();
      } else {
        updateClassNamesIfPrevious();
      }
    }
  }, [currentImagesIndex]);

  const allItems = array.map((item, index) => {
    return (
      <div className={`Image ${indexClassNames[index]} `} key={index}>
        {item}
      </div>
    );
  });

  return (
    <div className="ImageSlider">
      <button className="next" onClick={incrementCurrentImagesIndex}>
        Go Next
      </button>
      <button className="previous" onClick={decrementcurrentImagesIndex}>
        Go Previous
      </button>
      <div className="Images">{allItems}</div>
    </div>
  );
};

export default ImageSlider;
