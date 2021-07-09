import types from "./types.js";

const incrementSeconds = () => {
  return {
    type: types.INCREMENT_SECONDS,
  };
};

const incrementMinutes = () => {
  return {
    type: types.INCREMENT_MINUTES,
  };
};

const incrementHours = () => {
  return {
    type: types.INCREMENT_HOURS,
  };
};

const setSeconds = (seconds) => {
  return {
    type: types.SET_SECONDS,
    payload: seconds,
  };
};

const setMinutes = (minutes) => {
  return {
    type: types.SET_MINUTES,
    payload: minutes,
  };
};

export {
  incrementSeconds,
  incrementMinutes,
  incrementHours,
  setSeconds,
  setMinutes,
};
