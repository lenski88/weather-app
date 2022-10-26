import React from "react";
import { IDailyWheather } from "../../api/types";

interface IProps {
  daily: IDailyWheather[];
}

export const DailyWheather: React.FC<IProps> = ({ daily }) => {
  return (
    <>
      {daily.map((item) => {
        return (
          <div>
            {item.time} {item.temp}
          </div>
        );
      })}
    </>
  );
};
