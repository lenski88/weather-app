import React from "react";
import { IDailyWheather } from "../../api/types";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { DailyWeatherStyle } from "./DailyWeatherStyle";

interface IProps {
  daily: IDailyWheather[];
}

export const DailyWheather: React.FC<IProps> = ({ daily }) => {
  return (
    <DailyWeatherStyle>
      {daily.map((item) => {
        return (
          <WeatherCard key={item.time} alignSelf={false}>
            <p>Date: {item.time}</p>
            <p>Temperature, max: {item.temp}</p>
          </WeatherCard>
        );
      })}
    </DailyWeatherStyle>
  );
};
