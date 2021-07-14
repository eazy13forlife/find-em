import React from "react";
import { Transition } from "react-transition-group";

//so before i had a card component (so use this component for each card) and on that component, i had this useEffect function on it, which decided the new class to give this component. I also had a forward state, currentGameboardIndex state and a position state which relayed to us the current class (hence position) of the specific component, so when we incremented or decremented gameboard and got the new class, the position state would be updated. this component and then each component had an index property to figure out which index they were. The component would render a card component and rthis
/*
useEffect(() => {
  if (currentImagesIndex === null) {
    return null;
  }
  if (forward) {
    if (index !== gameBoardIndex) {
      //if our index doesnt match the gameboard index, it means it shouldnt be shown
      //if in center,just move it left so it cant be seen
      if (position === `GameCard--center`) {
        setPosition("GameCard--left");
      }
    } else {
      //if it does match gameboard, it means it should be shown
      //if to the right, move to the center so it can be seen
      if (position === `GameCard--right`) {
        setPosition("GameCard--center");
      }
    }
  } else {
    //when we hit previous button
    if (index !== gameBoardIndex) {
      //if initially in center,just move it to the right, so it wont be seen
      if (position === `GameCard--center`) {
        setPosition("GameCard--right");
      }
    } else {
      //if initially to the left, move to the center so it can be seen
      if (position === "GameCard--left") {
        setPosition("GameCard--center");
      }
    }
  }
}, [currentImagesIndex, forward]);
*/
