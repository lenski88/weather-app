import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCoordsByCityName, getHourlyWeather } from "../../api/api";
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
  const navigate = useNavigate();

  const fetchHourlyWeather = (lt: number, lg: number): void => {
    const fetch = () => {
      const data = getHourlyWeather(HOURLY_FORECAST_DURATION, lt, lg);
      return data;
    };
    fetch().then((data) => {
      setHourlyWeather(data);
    });
  };

  const fetchCityCoords = (name: string): void => {
    const fetch = () => {
      const data = getCoordsByCityName(name);
      return data;
    };
    fetch().then((data) => {
      fetchHourlyWeather(data.latitude, data.longitude);
    });
  };

  useEffect(() => {
    setCity(cityName);
  }, []);

  useEffect(() => {
    const location = JSON.parse(sessionStorage.getItem("location") as string);
    fetchHourlyWeather(location.lt, location.lg);
  }, []);

  useEffect(() => {
    if (city) {
      fetchCityCoords(city);
      navigate(`/details/${city}`);
    }
  }, [city]);

  const changeCity = (name: string) => setCity(name);

  return (
    <div>
      <SearchCity cbChangeCity={changeCity} />
      {houryWeather ? (
        <Chart data={houryWeather} city={city as string} />
      ) : null}
    </div>
  );
};
