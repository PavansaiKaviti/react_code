import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const nodename = document.getElementById("root");
const root = ReactDom.createRoot(nodename);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
