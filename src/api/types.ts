export interface IDaylyWeatherResponse {
  current_weather: ICurrentWeather;
  daily: {
    temperature_2m_max: number[];
    time: Date[];
  };
  daily_units: IUnits;
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

export interface ILocationInfoResponse {
  city: string;
  continent: string;
  continentCode: string;
  countryCode: string;
  countryName: string;
  latitude: number;
  locality: string;
  localityInfo: TLocalityInfo;
  localityLanguageRequested: string;
  longitude: number;
  lookupSource: number;
  plusCode: string;
  postcode: string;
  principalSubdivision: string;
  principalSubdivisionCode: string;
}

type TLocalityInfo = [ILocationInfo, ILocationInfo, IDistrictLocalityInfo];

interface ILocationInfo {
  adminLevel: number;
  description: string;
  geonameId: number;
  isoCode: string;
  isoName: string;
  name: string;
  order: number;
  wikidataId: string;
}

type IDistrictLocalityInfo = Omit<ILocationInfo, "isoCode">;

export interface ICurrentWeather {
  temperature: number | string;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number | string;
}

export type TCurrentWeatherData = Pick<
  ICurrentWeather,
  "temperature" | "time" | "windspeed"
>;

export interface IDailyWheather {
  time: string;
  temp: string;
}

export interface IUnits {
  temperature_2m_max: string;
  time: Date;
}
