import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const timer = useSelector((state) => {
    return state.timer;
  });
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
    </div>
  );
};

export default HomePage;
