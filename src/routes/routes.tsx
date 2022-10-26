import React from "react";
import { Home } from "../pages/Home/Home";
import { Details } from "../pages/Details/Details";
import { Error } from "../pages/Error/Error";

export const routes = [
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/details", element: <Details />, errorElement: <Error /> },
];
