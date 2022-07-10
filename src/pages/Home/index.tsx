import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { InputText } from "../../components/InputText";
import Title from "../../components/Title";

const boxStyle = {
  display: "flex",
  width: "100%",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  button: {
    marginTop: "10px",
  },

  "h1,h3,h6": {
    marginBottom: "10px",
  },
};

export const Home: React.FC = () => {

  const [salary, setSalary] = useState<string | null>(localStorage.getItem("wallet"))

  localStorage.setItem("wallet", String(salary))

  const navigate = useNavigate();

  return (
    <Box sx={boxStyle}>
      <Title />
      <Typography variant='h3'>Bem vindo!</Typography>
      <Typography variant='h6'>Adicione o saldo da carteira</Typography>
      <InputText innerStartAdornment='R$' type='text' onChange={(e) => setSalary(e.target.value)} value={salary} />
      <Button onClick={() => navigate("/expenses")}>Entrar</Button>
    </Box>
  );
};
