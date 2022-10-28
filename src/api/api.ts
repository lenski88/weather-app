import axios from "axios";
import {
  BASE_URL_FORECAST,
  BASE_URL_CITY_INFO,
  DEFAULT_LIST_CITIES,
  IDefailtCities,
  PARAMS,
  BASE_URL_GET_COORDS,
} from "../constants/constants";
import {
  dailyWeatherParser,
  cityNameParser,
  hourltWeatherParser,
  cityCoordsParser,
} from "./dataParsers";

// определение города по умолчанию
export const cityByDefault = DEFAULT_LIST_CITIES.find(
  (item) => item.isDefault
) as IDefailtCities;

// получение данных ежедневной погоды
export const getDailyWheather = async (
  duration: number,
  lt: number = cityByDefault.latitude,
  lg: number = cityByDefault.longitude
) => {
  const response = await axios.get(BASE_URL_FORECAST, {
    params: {
      latitude: lt,
      longitude: lg,
      timezone: PARAMS.timezone,
      daily: PARAMS.daily,
      current_weather: true,
    },
  });
  const data = dailyWeatherParser(response, duration);
  return data;
};

// получение данных почасового прогноза
export const getHourlyWeather = async (
  duration: number,
  lt: number,
  lg: number
) => {
  const response = await axios.get(BASE_URL_FORECAST, {
    params: {
      latitude: lt,
      longitude: lg,
      hourly: PARAMS.hourly,
      timezone: PARAMS.timezone,
    },
  });
  const data = hourltWeatherParser(response.data, duration);
  return data;
};

// получение названия города по координатам
export const getCityInfoByCoords = async (lt: number, lg: number) => {
  const response = await axios.get(BASE_URL_CITY_INFO, {
    params: {
      latitude: lt,
      longitude: lg,
      localityLanguage: PARAMS.locale,
    },
  });
  const city = cityNameParser(response.data);
  return city;
};

// получение координатат по названию города
export const getCoordsByCityName = async (name: string) => {
  const response = await axios.get(BASE_URL_GET_COORDS, {
    params: {
      name,
      count: PARAMS.countCity,
    },
  });
  const data = cityCoordsParser(response.data?.results?.[0]);
  return data;
};
