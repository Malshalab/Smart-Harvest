"use client";

import React, { ReactNode } from "react";
import { ThemeContext } from "@/app/library/context/themeContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "SF Pro, SF Pro Display, SF Pro Text, Arial, sans-serif",
    h1: {
      fontFamily: "SF Pro Display",
      fontSize: "4.5rem",
      fontWeight: 400,
    },
    h6: {
      fontFamily: "SF Pro Display",
      fontSize: "1.25rem",
      fontWeight: 400,
      color: "#FFFF",
    },
    button: {
      fontFamily: "SF Pro Rounded",
      fontSize: "0.875rem",
      textTransform: "uppercase",
    },
  },
});

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
