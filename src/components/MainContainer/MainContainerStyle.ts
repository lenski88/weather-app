import styled from "styled-components";
import { COLORS } from "../../constants/constants";

export const MinContainerStyle = styled.div`
  width: 70%;
  height: 95%;
  background-color: ${COLORS.backgroundContainer};
  border: ${`1px solid ${COLORS.borderColor}`};
  border-radius: 5px;
  padding: 10px 10px;
`;
