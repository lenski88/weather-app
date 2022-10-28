import { IForecastTypesKeys } from "../constants/constants";

// приведение даты к нужному формату
export function formatDateTime(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}.${month}`;
}

// приведение названия города к нужному формату
export const cityNameFormat = (name: string): string => {
  return name
    ?.split(" ")
    .map((item) => `${item[0].toUpperCase()}${item.slice(1)}`)
    .join(" ");
};

// генерация тайтла графика
export const generateChartTitle = (
  valid: boolean,
  city: string,
  forecast?: IForecastTypesKeys,
  duration?: number
) => {
  if (!valid) return `${city} not found`;
  return `${forecast?.type} weather forecast for ${duration} ${
    forecast?.time
  } in ${cityNameFormat(city as string)}`;
};
