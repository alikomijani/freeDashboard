import { createTheme } from "@mui/material/styles";
import { amber, deepOrange, green, grey, red } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
import vazir from "assets/fonts/Vazirmatn-v.woff2";
const getDesignTokens = (mode: PaletteMode) =>
  createTheme({
    typography: {
      fontFamily: "Vazirmatn",
      fontSize: 16,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Vazirmatn';
          src: local('Vazirmatn'), local('Vazirmatn'), url(${vazir}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
      },
      MuiButton: {
        styleOverrides: {
          root: {
            width: 500,
          },
        },
        defaultProps: {
          variant: "contained",
        },
      },
    },
    palette: {
      mode,
      primary: {
        ...amber,
        ...(mode === "dark" && {
          main: green[300],
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: grey[700],
          paper: grey[900],
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    neutral: true;
  }
}
export default getDesignTokens;
