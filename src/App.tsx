import React, { useMemo, useState } from "react";
import DashboardRoutes from "routes/routes";
import { RouterProvider } from "react-router-dom";
import { Button, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import getDesignTokens from "theme/theme";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );
  const theme = getDesignTokens(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={DashboardRoutes} />
      <Button onClick={() => setDarkMode("dark")}>change mode</Button>
    </ThemeProvider>
  );
}

export default App;
