import styled from "styled-components";
import { COLORS } from "../../constants/constants";

export const WeatherCardstyle = styled.div<{ alignSelf: boolean }>`
  align-self: ${({ alignSelf }) => (alignSelf ? "start" : null)};
  width: 300px;
  height: 200px;
  background-color: ${COLORS.backgroundCard};
  line-height: 2;
  border-radius: 5px;
  padding: 10px 10px;
  margin: 10px 10px;
`;
