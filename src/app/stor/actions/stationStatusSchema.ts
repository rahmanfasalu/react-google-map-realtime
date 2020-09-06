import { normalize, schema } from "normalizr";
import {
  StationStatusType,
  EntityStationStatus,
} from "src/app/interfaces/station.status.type";

// Schema for stations information
// Entity schema for station information. station_id is used
// as id
export const normalizedStationStaus = (
  stationStatus: StationStatusType[]
): EntityStationStatus => {
  const stationsEntitiy = new schema.Entity(
    "stations",
    {},
    { idAttribute: "station_id" }
  );
  const normalizedData = normalize(stationStatus, [stationsEntitiy]);
  return <EntityStationStatus>{
    ids: normalizedData.result,
    entities: normalizedData.entities.stations,
  };
};
