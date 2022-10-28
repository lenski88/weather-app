import styled from "styled-components";
import { COLORS } from "../../constants/constants";

export const FooterStyle = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;

  & a {
    color: ${COLORS.fontColor};
  }
`;
