import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import React from 'react';


type ThemeProp = {
  children: JSX.Element
}


export enum themePalette {
  BG = "#140325",
  SECONDARY_BG = "#28073D",
  MAIN_COLOR = "#F274C4",
  SECONDARY_COLOR = "#400B61",
  ERROR_ALERT = "#DC3636",
  ERROR_ALERT_BG = "rgba(236, 43, 43, .3)",
  GLOBAL_FONT = "'JetBrains Mono', monospace"
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: themePalette.BG,
      paper: themePalette.SECONDARY_BG,
    },
    primary: {
      main: themePalette.MAIN_COLOR
    },
    secondary: {
      main: themePalette.SECONDARY_COLOR
    },
    text: {
      primary: themePalette.MAIN_COLOR
    }
  },
  typography: {
    fontFamily: themePalette.GLOBAL_FONT,
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightBold: 700
  },
  components: {
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: "0.8em",
          fontSize: "1em"
        }
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${themePalette.ERROR_ALERT}`,
          background: themePalette.ERROR_ALERT_BG
        }
      }
    }
  }
});


export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
};
