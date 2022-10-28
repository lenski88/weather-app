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
  FORECAST_TYPES,
  HOURLY_FORECAST_DURATION,
} from "../../constants/constants";
import { generateChartTitle } from "../../utils/utils";
import { Chart } from "./components/Chart/Chart";
import { SearchCity } from "./components/SearchCity/SearchCity";
import { DetailsStyle } from "./DetailsStyle";

export const Details: React.FC = () => {
  const [city, setCity] = useState<string | undefined>();
  const [isValidInput, setIsValidInput] = useState<boolean>(true);
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
        setIsValidInput(false);
        setHourlyTitle(generateChartTitle(false, city as string));
        return;
      }
      fetchWeather(data.latitude, data.longitude);
      setIsValidInput(true);
      if (city) {
        setHourlyTitle(
          generateChartTitle(
            true,
            city,
            FORECAST_TYPES.hourly,
            HOURLY_FORECAST_DURATION
          )
        );
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
    if (isValidInput)
      setDailyTitle(
        generateChartTitle(
          true,
          city as string,
          FORECAST_TYPES.daily,
          (dailyWeather as IDailyWheather[])?.length
        )
      );
    else setDailyTitle(generateChartTitle(false, city as string));
  }, [city, dailyWeather?.length, isValidInput]);

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
