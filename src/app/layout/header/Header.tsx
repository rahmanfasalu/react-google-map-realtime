import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Theme from "src/theme/theme";
import { MarkerInfo } from "src/theme/CommonStyles";

// Header Layout
// Application Header with user icon and info markers
const Header = (): JSX.Element => {
  const markerWidth: string = "50px";
  const markerHeight: string = "40px";
  return (
    <HeaderContainer>
      <Menu>
        <Link to="/">
          <i className="fa fa-user"></i>
        </Link>
      </Menu>
      <div>
        <MarkerInfoWrapper
          color={Theme.colors.green}
          width={markerWidth}
          height={markerHeight}
        >
          <InfoLabel>
            <i className="fa fa-bicycle"></i>/P
          </InfoLabel>
        </MarkerInfoWrapper>

        <MarkerInfoWrapper
          color={Theme.colors.blue}
          width={markerWidth}
          height={markerHeight}
        >
          <InfoLabel>
            <i className="fa fa-bicycle"></i>/-
          </InfoLabel>
        </MarkerInfoWrapper>

        <MarkerInfoWrapper
          color={Theme.colors.red}
          width={markerWidth}
          height={markerHeight}
        >
          <InfoLabel>-/P</InfoLabel>
        </MarkerInfoWrapper>
      </div>
    </HeaderContainer>
  );
};

// Styled components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  height: 80px;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 999;
`;
const InfoLabel = styled.div`
  color: ${Theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 100%;
  .fa {
    font-weight: bold;
    font-size: 14px;
  }
`;
const MarkerInfoWrapper = styled(MarkerInfo)`
  float: left;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
`;
const Menu = styled.div`
  .fa-user {
    font-size: 45px;
    color: ${Theme.colors.white};
    margin-top: 10px;
    margin-left: 15px;
  }
`;
export default Header;
