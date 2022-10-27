import axios from "axios";
import {
  BASE_URL_FORECAST,
  BASE_URL_CITY_INFO,
  DEFAULT_LIST_CITIES,
  IDefailtCities,
  PARAMS,
} from "../constants/constants";
import { dailyWeatherParser, cityNameParser } from "./dataParsers";

export const cityByDefault = DEFAULT_LIST_CITIES.find(
  (item) => item.isDefault
) as IDefailtCities;

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
