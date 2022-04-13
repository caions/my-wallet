import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Expenses from "./pages/Expenses";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/expenses' element={<Expenses />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
