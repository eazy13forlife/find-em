import { updateClickCoordinates, clickCharacter } from "./click.js";
import { selectGameboard, provideGameboardDimensions } from "./gameboard.js";
import { identifyCharacter, provideSelectionResult } from "./gameplay.js";
import {
  incrementSeconds,
  incrementHours,
  incrementMinutes,
  setSeconds,
  setMinutes,
} from "./timer.js";

export {
  updateClickCoordinates,
  clickCharacter,
  selectGameboard,
  identifyCharacter,
  provideSelectionResult,
  incrementSeconds,
  incrementHours,
  incrementMinutes,
  setSeconds,
  setMinutes,
  provideGameboardDimensions,
};
