import * as types from "../actionTypes/stationStatusActionTypes";
import initialState from "../initialState";

import { programsDetailsActionTypes } from "../actionTypes/stationStatusActionTypes";

// Station Status reducer.
// Stations Status is realtime, update data at every 10 seconds
export default function stationStatusReducer(
  state = initialState.stationsStatus,
  action: programsDetailsActionTypes
) {
  switch (action.type) {
    case types.FETCH_STATION_STATUS_ACTION_SUCCESS:
      return { ...action.payload, loading: false };
    case types.FETCH_STATION_STATUS_ACTION:
      return { ...state, loading: true };
    default:
      return state;
  }
}
