import { StationStatusType } from "src/app/interfaces/station.status.type";

export const FETCH_STATION_STATUS_ACTION_SUCCESS =
  "FETCH_STATION_STATUS_ACTION_SUCCESS";
export const FETCH_STATION_STATUS_ACTION = "FETCH_STATION_STATUS_ACTION";

// Type for station status action
export interface fetchStationStatusActionType {
  type: typeof FETCH_STATION_STATUS_ACTION;
}
export interface LoadStationStatusActionType {
  type: typeof FETCH_STATION_STATUS_ACTION_SUCCESS;
  payload: any;
}

export type programsDetailsActionTypes =
  | LoadStationStatusActionType
  | fetchStationStatusActionType;
