import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import colors from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      light: colors.primary_orange_common,
      main: colors.primary_orange_common,
      dark: colors.primary_orange_variant,
      contrastText: colors.primary_orange_variant,
    },
    secondary: {
      light: colors.secondary_dark_black,
      main: colors.black,
      dark: colors.dark_gradient,
      contrastText: colors.gray_dark,
    },
  },
});

export default function UsingColorObject() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Primary</Button>
      <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
        Secondary
      </Button>
    </ThemeProvider>
  );
}
