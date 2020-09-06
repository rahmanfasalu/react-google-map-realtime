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
