import React, { useState, useEffect, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getCoordsByCityName,
  getDailyWheather,
  getHourlyWeather,
} from "../../api/api";
import { IDailyWheather, IHourlyWeather } from "../../api/types";
import { Button } from "../../components/Button/Button";
import {
  DETAILS_DAILY_FORECAST_DURATION,
  HOURLY_FORECAST_DURATION,
} from "../../constants/constants";
import { cityNameFormat } from "../../utils/utils";
import { Chart } from "./components/Chart/Chart";
import { SearchCity } from "./components/SearchCity/SearchCity";
import { DetailsStyle } from "./DetailsStyle";

export const Details: React.FC = () => {
  const [city, setCity] = useState<string | undefined>();
  const [hourlyTitle, setHourlyTitle] = useState<string>("");
  const [dailyTitle, setDailyTitle] = useState<string>("");
  const [houryWeather, setHourlyWeather] = useState<IHourlyWeather[] | null>(
    null
  );

  const [dailyWeather, setDailyWeather] = useState<IDailyWheather[] | null>(
    null
  );

  const { cityName } = useParams();
  const navigate = useNavigate();

  const fetchWeather = (lt: number, lg: number): void => {
    const hourlyForecastWeather = () => {
      const hourlyWeatherData = getHourlyWeather(
        HOURLY_FORECAST_DURATION,
        lt,
        lg
      );
      return hourlyWeatherData;
    };

    const dailyForecastWeather = () => {
      const dailyWeatherData = getDailyWheather(
        DETAILS_DAILY_FORECAST_DURATION,
        lt,
        lg
      );
      return dailyWeatherData;
    };

    Promise.all([hourlyForecastWeather(), dailyForecastWeather()]).then(
      (data) => {
        setHourlyWeather(data[0]);
        setDailyWeather(data[1].dailyWheather);
      }
    );
  };

  const fetchCityCoords = (name: string): void => {
    const fetch = () => {
      const data = getCoordsByCityName(name);
      return data;
    };
    fetch().then((data) => {
      if (!data) {
        setHourlyTitle(`${city} not found`);
        return;
      }
      fetchWeather(data.latitude, data.longitude);
      if (city) {
        setHourlyTitle(`Hourly weather forecast for ${HOURLY_FORECAST_DURATION} hours in
      ${cityNameFormat(city)}`);
      }
    });
  };

  useEffect(() => {
    setCity(cityName);
  }, []);

  useEffect(() => {
    const location = JSON.parse(sessionStorage.getItem("location") as string);
    if (cityName?.toLowerCase() !== location.cityName.toLowerCase())
      fetchWeather(location.lt, location.lg);
  }, []);

  useEffect(() => {
    if (city) {
      fetchCityCoords(city);
      navigate(`/details/${city}`);
    }
  }, [city, dailyWeather?.length]);

  useLayoutEffect(() => {
    setDailyTitle(`Daily weather forecast for ${
      (dailyWeather as IDailyWheather[])?.length
    } days in
${cityNameFormat(city as string)}`);
  }, [city, dailyWeather?.length]);

  const changeCity = (name: string) => {
    setCity(name);
  };

  const goHomeHandler = () => {
    navigate(`/${city}`);
  };

  return (
    <DetailsStyle>
      <SearchCity cbChangeCity={changeCity} />
      {houryWeather && <Chart data={houryWeather} title={hourlyTitle} />}
      {dailyWeather && <Chart data={dailyWeather} title={dailyTitle} />}
      <Button onClick={goHomeHandler}>Home</Button>
    </DetailsStyle>
  );
};
