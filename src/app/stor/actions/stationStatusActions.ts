import * as types from "../actionTypes/stationStatusActionTypes";
import { gbfsServices } from "../../../services/gbfsServices";
import { API } from "src/app/constants/gbfsConstants";
import { normalizedStationStaus } from "./stationStatusSchema";
import { EntityStationStatus } from "../../interfaces/station.status.type";

export const loadStationStatusActionSuccess = (
  data: EntityStationStatus
): types.programsDetailsActionTypes => {
  return {
    type: types.FETCH_STATION_STATUS_ACTION_SUCCESS,
    payload: data,
  };
};

export const loadStationStausAction = (): types.programsDetailsActionTypes => {
  return {
    type: types.FETCH_STATION_STATUS_ACTION,
  };
};

export function loadStationStatusActions() {
  return function (dispatch: (arg0: any) => void) {
    let url: string = API.station_status;
    dispatch(loadStationStausAction());
    gbfsServices.fetchStationStatus(url).then(({ data }: any) => {
      const entity: EntityStationStatus = normalizedStationStaus(data.stations);
      dispatch(loadStationStatusActionSuccess(entity));
    });
  };
}
