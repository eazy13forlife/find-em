import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import GameCard from "../GameCard/GameCard.js";
import ad2222Image from "../../images/ad2222.jpg";
import paranormalImage from "../../images/paranormal.jpg";
import {
  ad2222CharactersList,
  paranormalCharactersList,
} from "../../characterInfo.js";

import {
  selectGameboard,
  setMinutes,
  setSeconds,
  updateClickCoordinates,
  provideSelectionResult,
} from "../../actions/";

import history from "../../history.js";

const HomePage = () => {
  const dispatch = useDispatch();

  const [gameBoardIndex, setGameBoardIndex] = useState(null);

  const incrementGameBoardIndex = () => {
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

  console.log(gameBoardIndex);
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
        <GameCard
          image={ad2222Image}
          gameboard="ad2222"
          charactersList={ad2222CharactersList}
          mainColor="yellow"
          subColor="white"
          startPosition="50%"
          gameBoardIndex={gameBoardIndex}
          index={0}
        />

        <GameCard
          image={paranormalImage}
          gameboard="paranormal"
          charactersList={paranormalCharactersList}
          mainColor="secondary-blue"
          subColor="purple"
          startPosition="150%"
          gameBoardIndex={gameBoardIndex}
          index={1}
        />

        <GameCard
          image={paranormalImage}
          gameboard="paranormal"
          charactersList={paranormalCharactersList}
          mainColor="secondary-blue"
          subColor="purple"
          startPosition="150%"
          gameBoardIndex={gameBoardIndex}
          index={2}
        />

        <GameCard
          image={ad2222Image}
          gameboard="ad2222"
          charactersList={ad2222CharactersList}
          mainColor="yellow"
          subColor="white"
          startPosition="150%"
          gameBoardIndex={gameBoardIndex}
          index={3}
        />
        <GameCard
          image={ad2222Image}
          gameboard="ad2222"
          charactersList={ad2222CharactersList}
          mainColor="yellow"
          subColor="white"
          startPosition="150%"
          gameBoardIndex={gameBoardIndex}
          index={4}
        />
        <GameCard
          image={ad2222Image}
          gameboard="ad2222"
          charactersList={ad2222CharactersList}
          mainColor="yellow"
          subColor="white"
          startPosition="150%"
          gameBoardIndex={gameBoardIndex}
          index={5}
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
    </div>
  );
};

export default HomePage;

.ImageSlider {
  width: 100%;
  height: 60rem;
  position: relative;

  /*
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  */
}
.Image {
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  transform: translatex(-50%);
  &--center {
    left: 50%;
    transition: left 800ms ease-in 200ms;
  }
  &--right {
    left: 150%;
    transition: left 800ms ease-in;
  }
  &--left {
    left: -50%;
    transition: left 800ms ease-in;
  }
}
