import {
  IDaylyWeatherResponse,
  IDailyWheather,
  ICurrentWeather,
  IUnits,
} from "./types";
import { formatDateTime } from "../utils/utils";
import { months } from "../constants/constants";

const currentWeatherParser = (
  currentWheather: ICurrentWeather,
  units: IUnits
) => ({
  temperature: `${currentWheather.temperature} ${units.temperature_2m_max}`,
  time: formatDateTime(new Date(currentWheather.time), months),
  windspeed: `${currentWheather.windspeed} kmh`,
});

export const dailyWeatherParser = (
  {
    data,
  }: {
    data: IDaylyWeatherResponse;
  },
  duration: number
) => {
  const lastItem = duration + 1;
  const date = data.daily.time.slice(1, lastItem);
  const temp = data.daily.temperature_2m_max.slice(1, lastItem);
  const dailyWheather = date.reduce(
    (acc: IDailyWheather[], v: Date, i: number): IDailyWheather[] => {
      acc.push({
        time: formatDateTime(new Date(v), months),
        temp: `${Math.round(temp[i])} ${data.daily_units.temperature_2m_max}`,
      });
      return acc;
    },
    []
  );

  const currentWheather = currentWeatherParser(
    data.current_weather,
    data.daily_units
  );

  return {
    dailyWheather,
    currentWheather,
  };
};
