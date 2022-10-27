import styled from "styled-components";
import { COLORS } from "../../constants/constants";

export const ButtonStyle = styled.button`
  width: 100px;
  background-color: ${COLORS.backgroundBody};
  border: ${`1px solid ${COLORS.borderColor}`};
  border-radius: 5px;
  color: ${COLORS.fontColor};
  padding: 5px 10px;
  margin: 10px 10px;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${COLORS.backgroundContainer};
  }
`;
