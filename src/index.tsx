import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div/>;
}

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
