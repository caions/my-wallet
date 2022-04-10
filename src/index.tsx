import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home } from "./pages/home";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>,
  document.getElementById("root")
);
