import { Button, useTheme } from "@mui/material";
import "./App.css";

function App() {
  const {
    customColor: { danger },
  } = useTheme();

  return (
    <div className='App'>
      <span style={{ color: danger }}>alerta</span>
      <Button variant='outlined'> Olá Mundo</Button>
    </div>
  );
}

export default App;
