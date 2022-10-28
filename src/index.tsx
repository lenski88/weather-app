import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import { GlobalStyle } from "./globalStyle";

import { MainContainer } from "./components/MainContainer/MainContainer";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <StrictMode>
      <GlobalStyle />
      <MainContainer>
        <RouterProvider router={router} />
        <Footer />
      </MainContainer>
    </StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
