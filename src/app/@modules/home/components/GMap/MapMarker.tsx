import React, { useState } from "react";
import { StationStatusType } from "src/app/interfaces/station.status.type";
import StationInformationType from "src/app/interfaces/station.information.type";
import Theme from "src/theme/theme";
import { getMarkerClass } from "src/app/utils/gMapUtil";

// Interface for GMapMarker component
interface GMapMarkerType {
  lat: number;
  lng: number;
  status: StationStatusType;
  station: StationInformationType;
}

// GMapMarker component
// custom marker component for google map.
// Info window will load oc click. Markers are categorized as following,
// 1 -- Green Marker : This will be shown if both bycycle and parking slots avaialble
// 2 -- Red  Marker  : If no bycycle available
// 3 -- Blue : Bycycles are available but no parking slot.
// Additional information will load on click.
const GMapMarker = ({ status, station }: GMapMarkerType): JSX.Element => {
  const { green, red } = Theme.colors;
  const [showInfo, setShowInfo] = useState<boolean>();

  // close info window
  const closeModel = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setShowInfo(false);
  };

  // show info window
  const info = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setShowInfo(true);
  };

  // get the marker class
  const cls: string = getMarkerClass(status);

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
