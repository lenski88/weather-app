import React, { useEffect, useState } from "react";
import { getDailyWheather } from "../../api/api";
import { IDailyWheather, TCurrentWeatherData } from "../../api/types";
import { HOME_FORECAST_DURATION } from "../../constants/constants";

import { DailyWheather } from "../../components/DailyWheather/DailyWheather";
import { DefaultCitiesBtns } from "./components/DefaultCitiesBtns";

export const Home: React.FC = () => {
  // const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const [dailyWheather, setDailyWeather] = useState<IDailyWheather[] | null>(
    null
  );
  const [currentWeather, setCurrentWeather] =
    useState<TCurrentWeatherData | null>(null);

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location) {
          const fetch = () => {
            const data = getDailyWheather(
              HOME_FORECAST_DURATION,
              location.coords?.latitude,
              location.coords?.longitude
            );
            return data;
          };
          fetch().then((data) => {
            setDailyWeather(data.dailyWheather);
            setCurrentWeather(data.currentWheather);
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    if (!dailyWheather) {
      const fetch = () => {
        const data = getDailyWheather(HOME_FORECAST_DURATION);
        return data;
      };
      fetch().then((data) => {
        setDailyWeather(data.dailyWheather);
        setCurrentWeather(data.currentWheather);
      });
    }
  }, [dailyWheather]);

  const changeDefaultCity = (lt: number, lg: number) => {
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
      <p>
        {currentWeather?.time} {currentWeather?.temperature}
      </p>
      <DailyWheather daily={dailyWheather} />
      <DefaultCitiesBtns cbChangeDefaultCity={changeDefaultCity} />
    </div>
  ) : null;
};
