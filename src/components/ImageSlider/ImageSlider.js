import React, { useState, useEffect, useMemo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { debounceLeading } from "../../helperFunctions.js";
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
  console.log("fafadasdfasdfasdfasdfsdfafasdfa");
  const [currentImagesIndex, setCurrentImagesIndex] = useState(0);

  const [forward, setForward] = useState(true);

  const [indexClassNames, setIndexClassNames] = useState(
    getInitialClassNames(array)
  );

  //function for when we click next and increment the index. Return value is our new index.
  const incrementCurrentImagesIndex = (forward, currentImagesIndex) => {
    if (!forward) {
      setForward(true);
    }
    let incrementedIndex = currentImagesIndex + 1;
    if (incrementedIndex < array.length) {
      setCurrentImagesIndex(incrementedIndex);
    }
  };

  //function for when we click previous and decrement the index. return value is our new index.
  const decrementcurrentImagesIndex = () => {
    if (forward) {
      setForward(false);
    }

    let decrementedIndex = currentImagesIndex - 1;
    if (decrementedIndex >= 0) {
      setCurrentImagesIndex(decrementedIndex);
    }
  };

  const incrementCurrentImagesIndexDebounced = useMemo(() => {
    return debounceLeading(incrementCurrentImagesIndex, 800);
  }, []);

  //useEffect for when our index changes. We get the new classNames for each index, so the sliding transition will occur.
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

    if (forward) {
      updateClassNamesIfForward();
    } else {
      updateClassNamesIfPrevious();
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
      <button
        className={`ImageSlider__icon-button ${
          currentImagesIndex !== array.length - 1
            ? "ImageSlider__icon-button--active"
            : null
        } ImageSlider__icon-button--right-arrow`}
        onClick={() => {
          incrementCurrentImagesIndexDebounced(forward, currentImagesIndex);
        }}
      >
        <IoIosArrowForward
          className={`ImageSlider__icon ${
            currentImagesIndex === array.length - 1
              ? "ImageSlider__icon--inactive"
              : null
          }`}
        />
      </button>

      <button
        className={`ImageSlider__icon-button ${
          currentImagesIndex === 0 || currentImagesIndex == null
            ? null
            : "ImageSlider__icon-button--active"
        } ImageSlider__icon-button--left-arrow`}
        onClick={decrementcurrentImagesIndex}
      >
        <IoIosArrowBack
          className={`ImageSlider__icon ${
            currentImagesIndex === 0 || currentImagesIndex === null
              ? "ImageSlider__icon--inactive"
              : null
          }`}
        />
      </button>

      <div className="Images">{allItems}</div>
    </div>
  );
};

export default ImageSlider;
