import axios from "axios";
import { BASE_URL, DEFAULT_LIST_CITIES, PARAMS } from "../constants/constants";
import { dailyWeatherParser } from "./dataParsers";

export const getDailyWheather = async (
  duration: number,
  lt: number = DEFAULT_LIST_CITIES[0].latitude,
  lg: number = DEFAULT_LIST_CITIES[0].longitude
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
