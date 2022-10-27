import styled from "styled-components";
import { COLORS } from "../../../constants/constants";

export const ChartStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    color: ${COLORS.fontColor};
    padding: 10px 0;
  }
`;
