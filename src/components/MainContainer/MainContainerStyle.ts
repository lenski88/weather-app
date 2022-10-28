import styled from "styled-components";
import { COLORS } from "../../constants/constants";

export const MinContainerStyle = styled.div`
  position: relative;
  background-color: ${COLORS.backgroundContainer};
  border: ${`1px solid ${COLORS.borderColor}`};
  width: 90%;
  border-radius: 5px;
  padding: 50px 10px;
`;
