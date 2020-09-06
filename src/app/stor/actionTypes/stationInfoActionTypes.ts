import StationInformationType from "src/app/interfaces/station.information.type";

export const LOAD_STATION_INFO_SUCCESS = "LOAD_STATION_INFO_SUCCESS";
export const FETCH_STATION_INFO_ACTION = "FETCH_STATION_INFO_ACTION";

// Type for station information action
export interface fetchStationInfoActionType {
  type: typeof FETCH_STATION_INFO_ACTION;
}
export interface LoadStationsInfoActionType {
  type: typeof LOAD_STATION_INFO_SUCCESS;
  payload: StationInformationType[];
}

export type stationInfoActionTypes =
  | LoadStationsInfoActionType
  | fetchStationInfoActionType;
