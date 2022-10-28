import {
  IDaylyWeatherResponse,
  IDailyWheather,
  ICurrentWeather,
  IUnits,
  ILocationInfoResponse,
  IHourlyWeatherResponse,
  IHourlyWeather,
  ICityCoordsResponse,
} from "./types";
import { formatDateTime } from "../utils/utils";

const currentWeatherParser = (
  currentWheather: ICurrentWeather,
  units: IUnits
) => ({
  temperature: `${currentWheather.temperature} ${units.temperature_2m_max}`,
  time: formatDateTime(new Date(currentWheather.time)),
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
        time: formatDateTime(new Date(v)),
        temp: Math.round(temp[i]),
      });
      return acc;
    },
    []
  );

  const currentWheather = currentWeatherParser(
    data.current_weather,
    data.daily_units
  );

  const units = data.daily_units;

  return {
    dailyWheather,
    currentWheather,
    units,
  };
};

export const hourltWeatherParser = (
  data: IHourlyWeatherResponse,
  duration: number
) => {
  const lastitem = duration + 1;
  const now = new Date(
    new Date().toLocaleString("en", { timeZone: data.timezone })
  ).getTime();

  let tempFrom = 0;
  const time = data.hourly.time
    .filter((v, i) => {
      if (new Date(v).getTime() < now) tempFrom = i;
      return new Date(v).getTime() >= now;
    })
    .slice(0, duration);
  const temp = data.hourly.temperature_2m.slice(tempFrom, tempFrom + lastitem);
  return time.reduce((acc: IHourlyWeather[], item: Date, i: number) => {
    const date = new Date(item);
    const hours = String(date.getHours());
    const mins = String(date.getMinutes());
    acc.push({
      time: `${hours.length === 1 ? `0${hours}` : hours}:${
        mins.length === 1 ? `0${mins}` : mins
      }`,
      temp: temp[i],
    });
    return acc;
  }, []);
};

export const cityNameParser = (data: ILocationInfoResponse) => data.city;
export const cityCoordsParser = (data: ICityCoordsResponse) => {
  if (!data) return null;
  return {
    latitude: data.latitude,
    longitude: data.longitude,
  };
};
