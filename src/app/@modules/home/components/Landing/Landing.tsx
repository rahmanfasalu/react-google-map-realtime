import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStationInfo } from "src/app/stor/actions/stationInfoActions";
import { loadStationStatusActions } from "src/app/stor/actions/stationStatusActions";
import StationInformationType from "src/app/interfaces/station.information.type";
import { AppStateType } from "src/app/interfaces/app.state.type";
import useCurrentTimeInSeconds from "src/app/hooks/useCurrentTimeInSeconds";
import MapContainer from "../GMap/MapContainer";
import styled from "styled-components";
import { EntityStationStatus } from "src/app/interfaces/station.status.type";

/*
 *  Landing Screen
 */
function Landing(): JSX.Element {
  const dispatch = useDispatch();
  const { seconds } = useCurrentTimeInSeconds();

  // Get station info
  const stationInfo: StationInformationType[] = useSelector(
    (state: AppStateType) => {
      return state.stationsInfo;
    }
  );

  // Get station status info
  const stationStatus: EntityStationStatus = useSelector(
    (state: AppStateType) => {
      return state.stationsStatus;
    }
  );

  useEffect(() => {
    if (stationStatus !== null && !stationStatus.loading) {
      dispatch(loadStationStatusActions());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadStationInfo());
  }, [dispatch]);

  return (
    <LandingContainer>
      <MapContainer
        locations={stationInfo}
        status={stationStatus}
      ></MapContainer>
    </LandingContainer>
  );
}

const LandingContainer = styled.div`
  overflow: scroll;
  position: relative;
  scroll-behavior: smooth;
  padding-top: 80px;
`;

export default Landing;
