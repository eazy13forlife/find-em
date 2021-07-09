import types from "../actions/types.js";

const timer = {
  seconds: 0,
  minutes: 0,
  hours: 0,
};

const timerReducer = (state = timer, action) => {
  switch (action.type) {
    case types.INCREMENT_SECONDS:
      return { ...state, seconds: (state.seconds += 1) };
    case types.INCREMENT_MINUTES:
      return { ...state, minutes: (state.minutes += 1) };
    case types.INCREMENT_HOURS:
      console.log("ghey");
      return { ...state, hours: (state.hours += 1) };
    case types.SET_SECONDS:
      return { ...state, seconds: action.payload };
    case types.SET_MINUTES:
      return { ...state, minutes: action.payload };
    default:
      return state;
  }
};

export default timerReducer;
