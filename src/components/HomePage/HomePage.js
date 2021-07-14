import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import GameCard from "../GameCard/GameCard.js";
import ad2222Image from "../../images/ad2222.jpg";
import paranormalImage from "../../images/paranormal.jpg";
import {
  ad2222CharactersList,
  paranormalCharactersList,
} from "../../characterInfo.js";

import ImageSlider from "../ImageSlider/ImageSlider.js";

import {
  selectGameboard,
  setMinutes,
  setSeconds,
  updateClickCoordinates,
  provideSelectionResult,
} from "../../actions/";

import history from "../../history.js";

import "./HomePage.scss";

const HomePage = () => {
  const dispatch = useDispatch();

  const [gameBoardIndex, setGameBoardIndex] = useState(null);
  const [forward, setForward] = useState(true);

  const incrementGameBoardIndex = () => {
    if (!forward) {
      setForward(true);
    }
    if (gameBoardIndex === null) {
      setGameBoardIndex(1);
    } else {
      let incrementedIndex = gameBoardIndex + 1;
      if (incrementedIndex > 5) {
        incrementedIndex %= 6;
      }
      setGameBoardIndex(incrementedIndex);
    }
  };

  const decrementGameBoardIndex = () => {
    if (forward) {
      setForward(false);
    }
    if (gameBoardIndex === null) {
      setGameBoardIndex(5);
    } else {
      let decrementedIndex = gameBoardIndex - 1;
      if (decrementedIndex < 0) {
        const remainder = Math.abs(decrementedIndex) % 6;
        decrementedIndex = 6 - remainder;
      }
      setGameBoardIndex(decrementedIndex);
    }
  };
  const allImages = [
    <GameCard
      image={ad2222Image}
      gameboard="ad2222"
      charactersList={ad2222CharactersList}
      mainColor="yellow"
      subColor="white"
      startPosition="center"
    />,

    <GameCard
      image={paranormalImage}
      gameboard="paranormal"
      charactersList={paranormalCharactersList}
      mainColor="secondary-blue"
      subColor="purple"
      startPosition="right"
    />,

    <GameCard
      image={paranormalImage}
      gameboard="paranormal"
      charactersList={paranormalCharactersList}
      mainColor="secondary-blue"
      subColor="purple"
      startPosition="right"
    />,

    <GameCard
      image={ad2222Image}
      gameboard="ad2222"
      charactersList={ad2222CharactersList}
      mainColor="yellow"
      subColor="white"
      startPosition="right"
    />,
    <GameCard
      image={ad2222Image}
      gameboard="ad2222"
      charactersList={ad2222CharactersList}
      mainColor="yellow"
      subColor="white"
      startPosition="right"
    />,
    <GameCard
      image={ad2222Image}
      gameboard="ad2222"
      charactersList={ad2222CharactersList}
      mainColor="yellow"
      subColor="white"
      startPosition="right"
    />,
  ];
  useEffect(() => {
    dispatch(setMinutes(0));
    dispatch(setSeconds(0));
    dispatch(updateClickCoordinates(null, null, null, null));
    dispatch(provideSelectionResult(null, null));
  }, []);

  return (
    <div className="HomePage">
      <header className="Header__logo">Find Em</header>
      <div className="HomePage__selection-containaer">
        /*
        <GameCard
          image={ad2222Image}
          gameboard="ad2222"
          charactersList={ad2222CharactersList}
          mainColor="yellow"
          subColor="white"
          startPosition="center"
          gameBoardIndex={gameBoardIndex}
          index={0}
          forward={forward}
        />
        <GameCard
          image={paranormalImage}
          gameboard="paranormal"
          charactersList={paranormalCharactersList}
          mainColor="secondary-blue"
          subColor="purple"
          startPosition="right"
          gameBoardIndex={gameBoardIndex}
          index={1}
          forward={forward}
        />
        <GameCard
          image={paranormalImage}
          gameboard="paranormal"
          charactersList={paranormalCharactersList}
          mainColor="secondary-blue"
          subColor="purple"
          startPosition="right"
          gameBoardIndex={gameBoardIndex}
          index={2}
          forward={forward}
        />
        <GameCard
          image={ad2222Image}
          gameboard="ad2222"
          charactersList={ad2222CharactersList}
          mainColor="yellow"
          subColor="white"
          startPosition="right"
          gameBoardIndex={gameBoardIndex}
          index={3}
          forward={forward}
        />
        <GameCard
          image={ad2222Image}
          gameboard="ad2222"
          charactersList={ad2222CharactersList}
          mainColor="yellow"
          subColor="white"
          startPosition="right"
          gameBoardIndex={gameBoardIndex}
          index={4}
          forward={forward}
        />
        <GameCard
          image={ad2222Image}
          gameboard="ad2222"
          charactersList={ad2222CharactersList}
          mainColor="yellow"
          subColor="white"
          startPosition="right"
          gameBoardIndex={gameBoardIndex}
          index={5}
          forward={forward}
        />
        <button className="next" onClick={incrementGameBoardIndex}>
          Go Next
        </button>
        <button className="next" onClick={decrementGameBoardIndex}>
          Go Previous
        </button>
        {/*
        <div className="HomePage__game HomePage__game--ad2222">
          <button
            className="button"
            onClick={() => {
              dispatch(selectGameboard("ad2222"));
              history.push("/game");
            }}
          >
            Choose Ad2222
          </button>
        </div>
      </div>
      <div className="HomePage__game HomePage__game--paranormal">
        <button
          onClick={() => {
            dispatch(selectGameboard("paranormal"));
            history.push("/game");
          }}
        >
          Choose Paranormal
        </button>
      </div>
      **/}
      </div>
      <ImageSlider array={allImages} />
    </div>
  );
};

export default HomePage;
