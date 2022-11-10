import React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
interface SuccessButtonProps extends ButtonProps {
  success?: boolean;
}
const SuccessButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "success",
})<SuccessButtonProps>(({ success, theme }) => ({
  background: success ? theme.palette.success.main : theme.palette.error.main,
  [theme.breakpoints.down("md")]: {
    background: theme.palette.error.main,
  },
}));

export default SuccessButton;
