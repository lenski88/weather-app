import React from "react";
import { FooterStyle } from "./FooterStyle";

export const Footer = () => {
  return (
    <FooterStyle>
      Data according{" "}
      <a href="https://open-meteo.com/en" target="_blank" rel="noreferrer">
        Open-Meteo.com
      </a>
    </FooterStyle>
  );
};
