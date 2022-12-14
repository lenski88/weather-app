import React from "react";

import { WeatherCardstyle } from "./WeatherCardStyle";

interface IProps {
  children: React.ReactNode;
  alignSelf: boolean;
}

export const WeatherCard: React.FC<IProps> = ({ children, alignSelf }) => {
  return <WeatherCardstyle alignSelf={alignSelf}>{children}</WeatherCardstyle>;
};
