import React from "react";
import styled from "styled-components";

import Theme from "src/theme/theme";
import { ContentCenter } from "src/theme/CommonStyles";

const Footer = (): JSX.Element => (
  <FooterContainer>
    <ContentCenter>Footer</ContentCenter>
  </FooterContainer>
);

/*
 *  Styled components
 */
const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  background: ${Theme.colors.secondary};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  -webkit-box-shadow: 0px -4px 3px rgba(32, 32, 32, 1);
  -moz-box-shadow: 0px -4px 3px rgba(32, 32, 32, 1);
  box-shadow: 0px -4px 3px rgba(32, 32, 32, 1);
  z-index: 999;
  }
`;
export default Footer;
