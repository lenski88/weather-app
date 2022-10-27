import React, { ChangeEvent, useState } from "react";
import { Button } from "../../../../components/Button/Button";
import { InputStyle, SearchCityStyle } from "./SearchCityStyle";

interface IProps {
  cbChangeCity: (name: string) => void;
}

export const SearchCity: React.FC<IProps> = ({ cbChangeCity }) => {
  const [input, setInput] = useState<string>("");

  const changeHandler = (eo: ChangeEvent<HTMLInputElement>) => {
    const target = eo.target as HTMLInputElement;
    setInput(target.value);
  };

  const changeCityHandler = () => {
    if (!input.length) return;
    cbChangeCity(input.toLowerCase());
    setInput("");
  };

  return (
    <SearchCityStyle>
      <InputStyle type="text" value={input} onChange={changeHandler} />
      <Button onClick={changeCityHandler}>Search</Button>
    </SearchCityStyle>
  );
};
