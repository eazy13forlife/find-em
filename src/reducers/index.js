import { combineReducers } from "redux";

import clickCoordinatesReducer from "./clickCoordinatesReducer.js";
import characterClickedReducer from "./characterClickedReducer";
import gameboardSelectedReducer from "./gameboardSelectedReducer.js";
import gameplayReducer from "./gameplayReducer.js";
import selectionResultReducer from "./selectionResultReducer.js";

export default combineReducers({
  clickCoordinates: clickCoordinatesReducer,
  characterClicked: characterClickedReducer,
  gameboardSelected: gameboardSelectedReducer,
  gameplay: gameplayReducer,
  selectionResult: selectionResultReducer,
});
