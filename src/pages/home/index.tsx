import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

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

const inputTextStyle = {
  ".MuiInputBase-formControl": {
    color: "primary.main",
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "primary.main",
    },
  },
  ".MuiInputBase-adornedStart": {
    ".MuiTypography-root": {
      color: "primary.main",
    },
  },
};

const buttonStyle = {
  fontWeight: "700",
  borderRadius: "14px",
};

export const Home: React.FC = () => {
  return (
    <Box sx={boxStyle}>
      <Typography variant='h1'>My Wallet</Typography>
      <Typography variant='h3'>Bem vindo!</Typography>
      <Typography variant='h6'>Adicione o saldo da carteira</Typography>
      <TextField
        sx={inputTextStyle}
        color='primary'
        InputProps={{
          startAdornment: <InputAdornment position='start'>R$</InputAdornment>,
        }}
      />
      <Button sx={buttonStyle} variant='contained' size='large' color='primary'>
        Entrar
      </Button>
    </Box>
  );
};
