import React from "react";
import { IconStyle } from "./IconStyle";
import { ICON_NAMES } from "./types/types";

interface IProps {
  name: ICON_NAMES;
  className: string;
}

const icons = {
  circle: <circle cx="50%" cy="50%" r="45%" />,
  square: <rect x={0} y={0} width="100%" height="100%" />,
};

export const Icon: React.FC<IProps> = ({ name, className }) => {
  return (
    <IconStyle>
      <svg className={className} xmlns="http://www.w3.org/2000/svg">
        {icons[name]}
      </svg>
    </IconStyle>
  );
};
