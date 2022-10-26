import axios from "axios";
import {
  BASE_URL,
  DEFAULT_LIST_CITIES,
  IDefailtCities,
  PARAMS,
} from "../constants/constants";
import { dailyWeatherParser } from "./dataParsers";

export const cityByDefault = DEFAULT_LIST_CITIES.find(
  (item) => item.isDefault
) as IDefailtCities;

export const getDailyWheather = async (
  duration: number,
  lt: number = cityByDefault.latitude,
  lg: number = cityByDefault.longitude
) => {
  const response = await axios.get(BASE_URL, {
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
