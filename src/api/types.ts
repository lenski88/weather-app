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
  localityInfo: {
    administrative: TLocalityInfo;
    informative: TInformativeLocalityInfo;
  };
  localityLanguageRequested: string;
  longitude: number;
  lookupSource: number;
  plusCode: string;
  postcode: string;
  principalSubdivision: string;
  principalSubdivisionCode: string;
}

type TLocalityInfo = [ILocationInfo, ILocationInfo, TDistrictLocalityInfo];
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

type TDistrictLocalityInfo = Omit<ILocationInfo, "isoCode">;
type TInfomativeInfo = Omit<TDistrictLocalityInfo, "adminLevel">;
type TInformativeLocalityInfo = [TInfomativeInfo, TInfomativeInfo];

export interface IHourlyWeatherResponse {
  elevation: number;
  generationtime_ms: number;
  hourly: {
    temperature_2m: number[];
    time: Date[];
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

export interface ICityCoordsResponse {
  admin1: string;
  admin1_id: number;
  admin2: string;
  admin2_id: number;
  country: string;
  country_code: string;
  country_id: number;
  elevation: number;
  feature_code: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  timezone: string;
}

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
  temp: number;
}

export interface IHourlyWeather {
  time: string;
  temp: number;
}

export interface IUnits {
  temperature_2m_max: string;
  time: Date;
}
