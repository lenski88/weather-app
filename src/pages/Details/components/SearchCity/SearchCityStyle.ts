import styled from "styled-components";
import { COLORS } from "../../../../constants/constants";

export const SearchCityStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const InputStyle = styled.input`
  background-color: transparent;
  color: ${COLORS.fontColor};
  padding: 5px 10px;
  border: 1px solid ${COLORS.borderColor};
  border-radius: 5px;
  outline: none;
`;
