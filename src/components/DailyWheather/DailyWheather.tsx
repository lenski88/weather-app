import React from "react";
import { IDailyWheather } from "../../api/types";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { DailyWeatherStyle } from "./DailyWeatherStyle";

interface IProps {
  daily: IDailyWheather[];
  units: string;
}

export const DailyWheather: React.FC<IProps> = ({ daily, units }) => {
  return (
    <DailyWeatherStyle>
      {daily.map((item) => {
        return (
          <WeatherCard key={item.time} alignSelf={false}>
            <p>Date: {item.time}</p>
            <p>
              Temperature, max: {item.temp} {units}
            </p>
          </WeatherCard>
        );
      })}
    </DailyWeatherStyle>
  );
};
