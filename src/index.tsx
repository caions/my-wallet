import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./pages/Home";
import Expenses from "./pages/Expenses";

import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/expenses' element={<Expenses />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
