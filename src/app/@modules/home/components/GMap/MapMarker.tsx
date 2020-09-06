import React, { useState } from "react";
import { StationStatusType } from "src/app/interfaces/station.status.type";
import StationInformationType from "src/app/interfaces/station.information.type";
import Theme from "src/theme/theme";

interface GMapMarkerType {
  lat: number;
  lng: number;
  status: StationStatusType;
  station: StationInformationType;
}

const GMapMarker = ({ status, station }: GMapMarkerType): JSX.Element => {
  const { green, red } = Theme.colors;
  const [showInfo, setShowInfo] = useState<boolean>();
  const getMarkerClass = () => {
    if (status.num_bikes_available === 0) {
      return "markerRed";
    } else if (status.num_docks_available === 0) {
      return "markerBlue";
    } else {
      return "markerGreen";
    }
  };

  const closeModel = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setShowInfo(false);
  };
  const info = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setShowInfo(true);
  };
  const cls: string = getMarkerClass();

  return (
    <div>
      <div className={cls} onClick={info}>
        <div className="marker">
          {status?.num_bikes_available}/{status?.num_docks_available}
        </div>
      </div>

      {showInfo && (
        <div className="infoWindow">
          <div className="btn" onClick={closeModel}>
            x
          </div>
          <div className="name"> {station.name}</div>
          <div className="address">{station.address}</div>
          <div
            className="bikes"
            style={{ color: status?.num_bikes_available === 0 ? red : green }}
          >
            <i className="fa fa-bicycle"></i>
            {status.num_bikes_available} Bikes
          </div>
          <div
            className="parking"
            style={{ color: status?.num_docks_available === 0 ? red : green }}
          >
            <span
              className="parkingIco"
              style={{
                color: status?.num_docks_available === 0 ? red : green,
                border:
                  status?.num_docks_available === 0
                    ? `1px solid ${red}`
                    : `1px solid ${green}`,
              }}
            >
              P
            </span>
            {status.num_docks_available} Parking Slots
          </div>
        </div>
      )}
    </div>
  );
};

export default GMapMarker;
