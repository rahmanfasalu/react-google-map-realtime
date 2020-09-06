import { normalize, schema } from "normalizr";
import {
  StationStatusType,
  EntityStationStatus,
} from "src/app/interfaces/station.status.type";

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
