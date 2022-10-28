import styled from "styled-components";
import { COLORS } from "../../constants/constants";

export const WeatherCardstyle = styled.div<{ alignSelf: boolean }>`
  align-self: ${({ alignSelf }) => (alignSelf ? "start" : null)};
  background-color: ${COLORS.backgroundCard};
  min-width: 250px;
  line-height: 2;
  border-radius: 5px;
  padding: 10px 50px 10px 10px;
  margin: 10px 10px;
  z-index: 10;
`;
