import * as types from "../actionTypes/stationInfoActionTypes";
import { gbfsServices } from "../../../services/gbfsServices";
import { API } from "../../constants/gbfsConstants";
import StationInformationType from "src/app/interfaces/station.information.type";

// Station information action
export const loadSationInfoActionSuccess = (
  data: StationInformationType[]
): types.LoadStationsInfoActionType => {
  return {
    type: types.LOAD_STATION_INFO_SUCCESS,
    payload: data,
  };
};

export const loadDataAction = (): types.fetchStationInfoActionType => {
  return {
    type: types.FETCH_STATION_INFO_ACTION,
  };
};

export function loadStationInfo() {
  return function (dispatch: (arg0: any) => void) {
    dispatch(loadDataAction());
    let url: string = API.station_info;
    gbfsServices.fetchStationInformation(url).then(({ data }) => {
      dispatch(loadSationInfoActionSuccess(data.stations));
    });
  };
}
