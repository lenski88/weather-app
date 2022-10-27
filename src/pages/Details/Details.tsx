import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHourlyWeather } from "../../api/api";
import { IHourlyWeather } from "../../api/types";
import { HOURLY_FORECAST_DURATION } from "../../constants/constants";
import { Chart } from "./components/Chart/Chart";
import { SearchCity } from "./components/SearchCity/SearchCity";

export const Details: React.FC = () => {
  const [city, setCity] = useState<string | undefined>();
  const [houryWeather, setHourlyWeather] = useState<IHourlyWeather[] | null>(
    null
  );

  const { cityName } = useParams();

  const fetchHourlyWeather = (lt: number, lg: number): void => {
    const fetch = () => {
      const data = getHourlyWeather(HOURLY_FORECAST_DURATION, lt, lg);
      return data;
    };
    fetch().then((data) => {
      setHourlyWeather(data);
    });
  };

  useEffect(() => {
    setCity(cityName);
  }, []);

  useEffect(() => {
    const location = JSON.parse(sessionStorage.getItem("location") as string);
    fetchHourlyWeather(location.lt, location.lg);
  }, [houryWeather]);

  const changeCity = (name: string) => setCity(name);

  return (
    <div>
      <SearchCity cbChangeCity={changeCity} />
      {houryWeather ? <Chart data={houryWeather} /> : null}
    </div>
  );
};
