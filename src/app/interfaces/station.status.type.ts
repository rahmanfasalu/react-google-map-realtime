// Interface for station status
export interface StationStatusType {
  station_id: string;
  is_installed: number;
  is_renting: number;
  is_returning: number;
  last_reported: number;
  num_bikes_available: number;
  num_docks_available: number;
}

export type StationEntities = {
  entities: {
    [key: string]: StationStatusType;
  };
  ids: String[];
};
export interface EntityStationStatus extends Readonly<StationEntities> {
  loading?: boolean;
}
