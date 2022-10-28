export interface IDefailtCities {
  name: string;
  latitude: number;
  longitude: number;
  isDefault?: boolean;
}

// используемые цвета
export const COLORS = {
  backgroundBody: "#1F3044",
  backgroundContainer: "#646C79",
  backgroundCard: "#FB9039",
  fontColor: "#FFFFFF",
  borderColor: "#FB9039",
  borderLightColor: "#FFFFFF",
};

// города по умолчанию
export const DEFAULT_LIST_CITIES: IDefailtCities[] = [
  {
    name: "Minsk",
    latitude: 53.9,
    longitude: 27.5,
    isDefault: true,
  },
  {
    name: "Moscow",
    latitude: 55.75,
    longitude: 37.62,
  },
  {
    name: "Bratislava",
    latitude: 48.15,
    longitude: 17.11,
  },
];

// максимальное количество дней прогноза на главной странице
export const HOME_DAILY_FORECAST_DURATION = 3;
// максимальное количество дней прогноза на побочной странице
export const DETAILS_DAILY_FORECAST_DURATION = 10;
// максимальное количество часов прогноза на побочной странице
export const HOURLY_FORECAST_DURATION = 10;

// url's запросов
export const BASE_URL_FORECAST = "https://api.open-meteo.com/v1/forecast";
export const BASE_URL_CITY_INFO =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";

export const BASE_URL_GET_COORDS =
  "https://geocoding-api.open-meteo.com/v1/search";

// парметры запросов
export const PARAMS = {
  daily: "temperature_2m_max",
  hourly: "temperature_2m",
  timezone: "auto",
  locale: "en",
  countCity: 1,
};

interface IForecastTypes {
  hourly: IForecastTypesKeys;
  daily: IForecastTypesKeys;
}

export interface IForecastTypesKeys {
  type: string;
  time: string;
}

// типы прогнозов для тайтла графиков
export const FORECAST_TYPES: IForecastTypes = {
  hourly: {
    type: "Hourly",
    time: "hours",
  },
  daily: {
    type: "Daily",
    time: "days",
  },
};

// сообщение об ошибке
export const ERROR_MESSAGE = "Page not found :(";
