import React from "react";

import { MinContainerStyle } from "./MainContainerStyle";

interface IProps {
  children: React.ReactNode;
}

export const MainContainer: React.FC<IProps> = ({ children }) => {
  return <MinContainerStyle>{children}</MinContainerStyle>;
};
