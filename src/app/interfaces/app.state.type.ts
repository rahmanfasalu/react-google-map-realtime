import StationInformationType from "./station.information.type";
import { EntityStationStatus } from "./station.status.type";

// App state
export interface AppStateType {
  stationsInfo: StationInformationType[];
  stationsStatus: EntityStationStatus;
}
