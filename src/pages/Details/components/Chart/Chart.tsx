import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { IHourlyWeather } from "../../../../api/types";

import { COLORS } from "../../../../constants/constants";
import { ChartStyle } from "./ChartStyle";

interface IProps {
  data: IHourlyWeather[];
  legend: string;
}

export const Chart: React.FC<IProps> = ({ data, legend }) => {
  return (
    <ChartStyle>
      <p>{legend}</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis
            dataKey="time"
            tick={{ stroke: `${COLORS.fontColor}`, strokeWidth: 1 }}
          />
          <YAxis
            tick={{ stroke: `${COLORS.fontColor}`, strokeWidth: 1 }}
            padding={{ top: 20, bottom: 20 }}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke={`${COLORS.borderColor}`}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartStyle>
  );
};
