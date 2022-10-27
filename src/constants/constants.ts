export interface IDefailtCities {
  name: string;
  latitude: number;
  longitude: number;
  isDefault?: boolean;
}

export const COLORS = {
  backgroundBody: "#1F3044",
  backgroundContainer: "#646C79",
  backgroundCard: "#FB9039",
  fontColor: "#FFFFFF",
  borderColor: "#FB9039",
};

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

export const HOME_FORECAST_DURATION = 3;

export const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "jule",
  "august",
  "september",
  "october",
  "november",
  "december",
];

export const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export const PARAMS = {
  daily: "temperature_2m_max",
  timezone: "GMT",
};
