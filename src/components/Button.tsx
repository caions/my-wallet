import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
  SxProps,
  Theme,
} from "@mui/material";
import React from "react";

const buttonStyle = {
  fontWeight: "700",
  borderRadius: "14px",
  height: "50px",
};

type ButtonProps = {
  sx?: SxProps<Theme>;
} & MaterialButtonProps;

const Button: React.FC<ButtonProps> = ({
  children,
  sx,
  ...props
}: ButtonProps) => {
  return (
    <MaterialButton
      sx={{ ...buttonStyle, ...sx }}
      size='large'
      variant='contained'
      {...props}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
