import styled from "styled-components";
import Theme from "./theme";

interface FaProps {
  size?: string;
  color?: string;
}

interface MarkerProps {
  color?: string;
  width?: string;
  height?: string;
}
export const Fa = styled.i<FaProps>`
  font-size: ${({ size }) => (size ? size : "2rem")};
  color: ${({ color }) => (color ? color : Theme.colors.white)};
`;

export const ContentCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SemiHeader = styled.div`
  text-transform: uppercase;
  color: ${Theme.colors.white};
  font-size: 22px;
  padding: 0 15px;
`;

export const HeaderSmall = styled.div`
  text-transform: capitalize;
  color: ${Theme.colors.gray};
  font-size: 18px;
  padding: 0 15px;
`;

export const HeaderLarge = styled(SemiHeader)`
  font-size: 26px;
  text-transform: capitalize;
`;
export const FlexRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 5px 0;
`;

export const P = styled.p`
  font-size: 29px;
  padding: 0 15px;
  color: ${Theme.colors.gray};
`;

export const MarkerInfo = styled.div<MarkerProps>`
  background: ${({ color }) => (color ? color : Theme.colors.gray)};
  position: relative;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  padding: 4px;
  width: ${({ width }) => (width ? width : "33px")};
  height: ${({ height }) => (height ? height : "25px")};

  &:before {
    content: "";
    position: absolute;
    left: 2px;
    bottom: -3px;
    width: 0;
    height: 0;
    border-right: 12px solid transparent;
    border-top: 14px solid ${({ color }) => (color ? color : Theme.colors.gray)};
    border-left: 0px solid transparent;
  }
`;
