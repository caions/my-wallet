import React from "react";
import { render } from "react-dom";
import App from "./App";

const container = document.getElementById("root");

import "./index.css";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
