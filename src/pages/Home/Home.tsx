import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getDailyWheather,
  cityByDefault,
  getCityInfoByCoords,
} from "../../api/api";
import { IDailyWheather, TCurrentWeatherData } from "../../api/types";
import { ICityLocationState } from "./types/types";
import {
  DEFAULT_LIST_CITIES,
  HOME_FORECAST_DURATION,
} from "../../constants/constants";

import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { DailyWheather } from "../../components/DailyWheather/DailyWheather";
import { DefaultCitiesBtns } from "./components/DefaultCitiesBtns/DefaultCitiesBtns";

import { HomeStyle } from "./HomeStyle";

export const Home: React.FC = () => {
  const [cityLocation, setCityLocation] = useState<ICityLocationState | null>(
    null
  );
  const [dailyWheather, setDailyWeather] = useState<IDailyWheather[] | null>(
    null
  );
  const [currentWeather, setCurrentWeather] =
    useState<TCurrentWeatherData | null>(null);

  const navigate = useNavigate();

  const fetchWeather = (lt?: number, lg?: number): void => {
    const fetch = () => {
      const data = getDailyWheather(HOME_FORECAST_DURATION, lt, lg);
      return data;
    };
    fetch().then((data) => {
      setDailyWeather(data.dailyWheather);
      setCurrentWeather(data.currentWheather);
    });
  };

  const fetchCityName = (lt: number, lg: number): void => {
    const fetch = () => {
      const data = getCityInfoByCoords(lt, lg);
      return data;
    };
    fetch().then((data) => {
      setCityLocation({
        lt,
        lg,
        cityName: data,
      });
    });
  };

  useEffect(() => {
    if (!sessionStorage.getItem("location")) {
      if (navigator?.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (location) => {
            if (location) {
              fetchCityName(
                location.coords?.latitude,
                location.coords?.longitude
              );
              fetchWeather(
                location.coords?.latitude,
                location.coords?.longitude
              );
            }
          },
          () => {
            setCityLocation({
              lt: cityByDefault.latitude,
              lg: cityByDefault.longitude,
              cityName: cityByDefault.name,
            });
            fetchWeather();
          }
        );
      }
    } else {
      const storage = JSON.parse(sessionStorage.getItem("location") as string);
      setCityLocation({
        lt: storage.lt,
        lg: storage.lg,
        cityName: storage.cityName,
      });
      fetchWeather(storage.lt, storage.lg);
    }
  }, []);

  useEffect(() => {
    if (cityLocation?.cityName) {
      navigate(`/${cityLocation?.cityName}`);
      sessionStorage.setItem("location", JSON.stringify(cityLocation));
    }
  }, [cityLocation]);

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
    <HomeStyle>
      <CurrentWeather
        city={cityLocation?.cityName}
        currentWeather={currentWeather}
      />
      <DailyWheather daily={dailyWheather} />
      <DefaultCitiesBtns cbChangeDefaultCity={changeDefaultCity} />
    </HomeStyle>
  ) : null;
};
