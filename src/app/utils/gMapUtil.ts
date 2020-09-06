import { StationStatusType } from "../interfaces/station.status.type";

/*
 * getMarkerClass
 *
 * Get marker class based on the status
 */
export const getMarkerClass = (status: StationStatusType) => {
  if (status.num_bikes_available === 0) {
    return "markerRed";
  } else if (status.num_docks_available === 0) {
    return "markerBlue";
  } else {
    return "markerGreen";
  }
};
