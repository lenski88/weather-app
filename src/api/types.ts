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
