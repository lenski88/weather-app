import React from "react";
import { ERROR_MESSAGE } from "../../constants/constants";
import { ErrorStyle } from "./ErrorStyle";

export const Error = () => {
  return <ErrorStyle>{ERROR_MESSAGE}</ErrorStyle>;
};
