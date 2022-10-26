import React, { useEffect, useState } from "react";
import { getDailyWheather, cityByDefault } from "../../api/api";
import { IDailyWheather, TCurrentWeatherData } from "../../api/types";
import { ICityLocationState } from "./types/types";
import {
  DEFAULT_LIST_CITIES,
  HOME_FORECAST_DURATION,
} from "../../constants/constants";

import { DailyWheather } from "../../components/DailyWheather/DailyWheather";
import { DefaultCitiesBtns } from "./components/DefaultCitiesBtns";

export const Home: React.FC = () => {
  const [cityLocation, setCityLocation] = useState<ICityLocationState | null>(
    null
  );
  const [dailyWheather, setDailyWeather] = useState<IDailyWheather[] | null>(
    null
  );
  const [currentWeather, setCurrentWeather] =
    useState<TCurrentWeatherData | null>(null);

  const fetchData = (lt?: number, lg?: number): void => {
    const fetch = () => {
      const data = getDailyWheather(HOME_FORECAST_DURATION, lt, lg);
      return data;
    };
    fetch().then((data) => {
      setDailyWeather(data.dailyWheather);
      setCurrentWeather(data.currentWheather);
    });
  };

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          if (location) {
            setCityLocation({
              lt: location.coords?.latitude,
              lg: location.coords?.longitude,
              cityName: "Unknown",
            });
            fetchData(location.coords?.latitude, location.coords?.longitude);
          }
        },
        () => {
          setCityLocation({
            lt: cityByDefault.latitude,
            lg: cityByDefault.longitude,
            cityName: cityByDefault.name,
          });
          fetchData();
        }
      );
    }
  }, []);

  const changeDefaultCity = (lt: number, lg: number) => {
    if (lt === cityLocation?.lt && lg === cityLocation.lg) return;
    setCityLocation({
      lt,
      lg,
      cityName: DEFAULT_LIST_CITIES.find(
        (item) => item.latitude === lt && item.longitude === lg
      )?.name as string,
    });
    const fetch = () => {
      const data = getDailyWheather(HOME_FORECAST_DURATION, lt, lg);
      return data;
    };
    fetch().then((data) => {
      setDailyWeather(data.dailyWheather);
      setCurrentWeather(data.currentWheather);
    });
  };

  return dailyWheather ? (
    <div>
      <p>{cityLocation?.cityName}</p>
      <p>
        {currentWeather?.time} {currentWeather?.temperature}
      </p>
      <DailyWheather daily={dailyWheather} />
      <DefaultCitiesBtns cbChangeDefaultCity={changeDefaultCity} />
    </div>
  ) : null;
};
