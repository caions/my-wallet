import {
  Box,
  InputAdornment,
  SxProps,
  TextField,
  TextFieldProps,
  Theme,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";

type InputTextProps = {
  topLabel?: ReactNode;
  innerStartAdornment?: ReactNode;
  inputWidth?: string;
  sx?: SxProps<Theme>;
} & TextFieldProps;

export const InputText: React.FC<InputTextProps> = ({
  innerStartAdornment,
  topLabel,
  inputWidth,
  sx,
  ...props
}: InputTextProps) => {
  const inputTextContainer = {
    display: "block",
    width: inputWidth,
    ...sx,
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

  return (
    <Box sx={inputTextContainer}>
      <Typography variant='h6'>{topLabel}</Typography>
      <TextField
        {...props}
        sx={inputTextStyle}
        color='primary'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              {innerStartAdornment}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
