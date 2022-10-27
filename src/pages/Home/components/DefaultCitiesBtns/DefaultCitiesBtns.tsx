import React, { useState } from "react";
import { Button } from "../../../../components/Button/Button";
import {
  DEFAULT_LIST_CITIES,
  IDefailtCities,
} from "../../../../constants/constants";
import { DefaultCitiesBtnsStyle } from "./DefaultCitiesBtnsStyle";

interface IProps {
  cbChangeDefaultCity: (lt: number, lg: number) => void;
}

export const DefaultCitiesBtns: React.FC<IProps> = ({
  cbChangeDefaultCity,
}) => {
  const [citiesList] = useState(DEFAULT_LIST_CITIES);

  const changeCityHandler = (eo: React.MouseEvent<HTMLButtonElement>): void => {
    const target = eo.target as HTMLElement;
    const element = DEFAULT_LIST_CITIES.find(
      (item) => item.name === target.id
    ) as IDefailtCities;
    cbChangeDefaultCity(element.latitude, element.longitude);
  };

  return (
    <DefaultCitiesBtnsStyle>
      {citiesList.map((item) => {
        return (
          <Button key={item.name} id={item.name} onClick={changeCityHandler}>
            {item.name}
          </Button>
        );
      })}
    </DefaultCitiesBtnsStyle>
  );
};
