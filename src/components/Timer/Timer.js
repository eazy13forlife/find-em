import Reac, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  incrementSeconds,
  incrementMinutes,
  incrementHours,
  setSeconds,
  setMinutes,
} from "../../actions/";
import "./Timer.scss";

const Timer = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => {
    return state.timer;
  });
  console.log(timer.seconds);

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

  const renderSeconds = () => {
    if (timer.seconds < 10) {
      return <p className="text text--large">{`0${timer.seconds}`}</p>;
    } else {
      return <p className="text text--large">{`${timer.seconds}`}</p>;
    }
  };

  const renderMinutes = () => {
    if (timer.minutes < 10) {
      return <p className="text text--large">{`0${timer.minutes}`}</p>;
    } else {
      return <p className="text text--large">{`${timer.minutes}`}</p>;
    }
  };
  const renderHours = () => {
    if (timer.hours < 10) {
      return <p className="text text--large">{`0${timer.hours}`}</p>;
    } else {
      return <p className="text text--large">{`${timer.hours}`}</p>;
    }
  };

  return (
    <div className="Timer">
      <span className="text text--large">{renderHours()}</span>
      <span className="text text--large"> :</span>
      <span className="text text--large">{renderMinutes()}</span>
      <span className="text text--large"> :</span>
      <span className="text text--large">{renderSeconds()}</span>
    </div>
  );
};

export default Timer;
