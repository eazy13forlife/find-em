import React, { useEffect, useState } from "react";
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";

import {
  incrementSeconds,
  incrementMinutes,
  incrementHours,
  setSeconds,
  setMinutes,
} from "../../actions/";
import "./Timer.scss";

const getNumberCharacters = createSelector(
  (state, gameboard) => state.gameplay[gameboard].characters,
  (characters) => {
    return Object.keys(characters).length;
  }
);

const Timer = ({ gameboard }) => {
  const dispatch = useDispatch();

  const [stopTimer, setStopTimer] = useState(false);

  const timer = useSelector((state) => {
    return state.timer;
  });
  const gameboardSelected = useSelector((state) => {
    return state.gameboardSelected;
  });

  const numberIdentified = useSelector((state) => {
    return state.gameplay[gameboardSelected].numberIdentified;
  });

  const numberCharacters = useSelector((state) => {
    return getNumberCharacters(state, gameboard);
  });

  useEffect(() => {
    let timerId;
    if (!stopTimer) {
      timerId = setTimeout(() => {
        if (timer.seconds === 59) {
          dispatch(setSeconds(0));
          if (timer.minutes === 59) {
            dispatch(setMinutes(0));
            dispatch(incrementHours());
          } else {
            dispatch(incrementMinutes());
          }
        } else {
          dispatch(incrementSeconds());
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [timer.seconds]);

  useEffect(() => {
    if (numberIdentified === numberCharacters) {
      setStopTimer(true);
    }
  }, [numberIdentified]);
  /*
  useEffect(() => {
    setTimeout(() => {
      if (timer.seconds === 59) {
        dispatch(setSeconds(0));
      } else {
        dispatch(incrementSeconds());
      }
    }, 1000);
  }, [timer.seconds]);

  useEffect(() => {
    setTimeout(() => {
      if (timer.minutes === 59) {
        dispatch(setMinutes(0));
      } else {
        dispatch(incrementMinutes());
      }
    }, 60000);
  }, [timer.minutes]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(incrementHours());
    }, 3600000);
  }, [timer.hours]);
*/
  const renderSeconds = () => {
    if (timer.seconds < 10) {
      return <p className="text text--medium">{`0${timer.seconds}`}</p>;
    } else {
      return <p className="text text--medium">{`${timer.seconds}`}</p>;
    }
  };

  const renderMinutes = () => {
    if (timer.minutes < 10) {
      return <p className="text text--medium">{`0${timer.minutes}`}</p>;
    } else {
      return <p className="text text--medium">{`${timer.minutes}`}</p>;
    }
  };
  const renderHours = () => {
    if (timer.hours < 10) {
      return <p className="text text--medium">{`0${timer.hours}`}</p>;
    } else {
      return <p className="text text--medium">{`${timer.hours}`}</p>;
    }
  };

  return (
    <div className="Timer">
      <span className="text text--medium">{renderHours()}</span>
      <span className="text text--medium"> :</span>
      <span className="text text--medium">{renderMinutes()}</span>
      <span className="text text--medium"> :</span>
      <span className="text text--medium">{renderSeconds()}</span>
    </div>
  );
};

export default Timer;
