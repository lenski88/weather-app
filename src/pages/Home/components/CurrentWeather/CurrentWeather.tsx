import React from "react";
import { TCurrentWeatherData } from "../../../../api/types";

import { WeatherCard } from "../../../../components/WeatherCard/WeatherCard";

interface IProps {
  city: string | undefined;
  currentWeather: TCurrentWeatherData | null;
}

export const CurrentWeather: React.FC<IProps> = ({ city, currentWeather }) => {
  return (
    <WeatherCard alignSelf>
      <p>{city}</p>
      <p>Date: {currentWeather?.time}</p>
      <p>Temperature, max: {currentWeather?.temperature}</p>
      <p>Windspeed: {currentWeather?.windspeed}</p>
    </WeatherCard>
  );
};
