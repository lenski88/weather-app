import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TCurrentWeatherData } from "../../../../api/types";

import { Button } from "../../../../components/Button/Button";
import { WeatherCard } from "../../../../components/WeatherCard/WeatherCard";

interface IProps {
  city: string | undefined;
  currentWeather: TCurrentWeatherData | null;
}

export const CurrentWeather: React.FC<IProps> = ({ city, currentWeather }) => {
  const { cityName } = useParams();
  const navigate = useNavigate();

  const showDetailsHandler = () => {
    navigate(`/details/${cityName}`);
  };

  return (
    <WeatherCard alignSelf>
      <p>{city}</p>
      <p>Date: {currentWeather?.time}</p>
      <p>Temperature, max: {currentWeather?.temperature}</p>
      <p>Windspeed: {currentWeather?.windspeed}</p>
      <Button onClick={showDetailsHandler}>Show details</Button>
    </WeatherCard>
  );
};
