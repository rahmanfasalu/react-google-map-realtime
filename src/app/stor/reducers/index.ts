import { combineReducers } from "redux";
import stationsInfoReducer from "./stationsInfoReducer";
import stationStatusReducer from "./stationsStatusReducer";
export const rootReducer = combineReducers({
  stationsInfo: stationsInfoReducer,
  stationsStatus: stationStatusReducer,
});
