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

  const allImages = [
    <GameCard
      image={ad2222Image}
      gameboard="ad2222"
      charactersList={ad2222CharactersList}
      mainColor="yellow"
      subColor="white"
    />,

    <GameCard
      image={paranormalImage}
      gameboard="paranormal"
      charactersList={paranormalCharactersList}
      mainColor="secondary-blue"
      subColor="purple"
    />,
    <GameCard
      image={ad2222Image}
      gameboard="ad2222"
      charactersList={ad2222CharactersList}
      mainColor="yellow"
      subColor="white"
    />,

    <GameCard
      image={paranormalImage}
      gameboard="paranormal"
      charactersList={paranormalCharactersList}
      mainColor="secondary-blue"
      subColor="purple"
    />,
    <GameCard
      image={ad2222Image}
      gameboard="ad2222"
      charactersList={ad2222CharactersList}
      mainColor="yellow"
      subColor="white"
    />,

    <GameCard
      image={paranormalImage}
      gameboard="paranormal"
      charactersList={paranormalCharactersList}
      mainColor="secondary-blue"
      subColor="purple"
    />,
    <GameCard
      image={ad2222Image}
      gameboard="ad2222"
      charactersList={ad2222CharactersList}
      mainColor="yellow"
      subColor="white"
    />,

    <GameCard
      image={paranormalImage}
      gameboard="paranormal"
      charactersList={paranormalCharactersList}
      mainColor="secondary-blue"
      subColor="purple"
    />,
    <GameCard
      image={ad2222Image}
      gameboard="ad2222"
      charactersList={ad2222CharactersList}
      mainColor="yellow"
      subColor="white"
    />,

    <GameCard
      image={paranormalImage}
      gameboard="paranormal"
      charactersList={paranormalCharactersList}
      mainColor="secondary-blue"
      subColor="purple"
    />,
    <GameCard
      image={ad2222Image}
      gameboard="ad2222"
      charactersList={ad2222CharactersList}
      mainColor="yellow"
      subColor="white"
    />,

    <GameCard
      image={paranormalImage}
      gameboard="paranormal"
      charactersList={paranormalCharactersList}
      mainColor="secondary-blue"
      subColor="purple"
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
      <header className="HomePage__header">
        <h1 className="Header__logo">Find Em</h1>
        <p className="text--medium HomePage__text homepageSecondaryColor">
          Select a gameboard
        </p>
      </header>

      <ImageSlider array={allImages} />
    </div>
  );
};

export default HomePage;
