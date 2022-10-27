import React from "react";
import { ButtonStyle } from "./ButtonStyle";

interface IProps {
  children: string;
  id?: string;
  onClick: (eo: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IProps> = ({ children, id, onClick }) => {
  return (
    <ButtonStyle type="button" id={id} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};
