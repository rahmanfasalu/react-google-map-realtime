import * as types from "../actionTypes/stationInfoActionTypes";
import initialState from "../initialState";

import { stationInfoActionTypes } from "../actionTypes/stationInfoActionTypes";
import StationInformationType from "src/app/interfaces/station.information.type";

// Stations Information reduces
export default function stationInfoReducer(
  state: StationInformationType[] = initialState.stationsInfo,
  action: stationInfoActionTypes
) {
  switch (action.type) {
    case types.LOAD_STATION_INFO_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
