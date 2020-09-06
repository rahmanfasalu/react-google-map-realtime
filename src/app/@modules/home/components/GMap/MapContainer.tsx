import React, { memo, useState } from "react";

import GoogleMapReact from "google-map-react";
import StationInformationType from "src/app/interfaces/station.information.type";
import GMapMarker from "./MapMarker";
import { mapOptions } from "src/app/constants/gbfsConstants";
import { EntityStationStatus } from "src/app/interfaces/station.status.type";

interface MapContainerProps {
  locations: StationInformationType[];
  status: EntityStationStatus;
}
const MapContainer = ({ locations, status }: MapContainerProps) => {
  const { key, defaultCenter, defaultZoom, mapStyles } = mapOptions;
  const { entities } = status;

  return (
    <div style={mapStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        {locations.map((item) => {
          return (
            <GMapMarker
              key={item.station_id}
              lat={item.lat}
              lng={item.lon}
              status={entities[item.station_id]}
              station={item}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};
export default memo(MapContainer);
