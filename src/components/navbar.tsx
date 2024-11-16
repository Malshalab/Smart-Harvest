"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "SF Pro, SF Pro Display, SF Pro Text, Arial, sans-serif",
    h1: {
      fontFamily: "SF Pro Display",
      fontSize: "2.5rem",
      fontWeight: 400, // Regular weight for hero text
    },
    h6: {
      fontFamily: "SF Pro Display",
      fontSize: "1.25rem",
      fontWeight: 400,
      color: "#555", // Subtle gray for subtitles
    },
    body1: {
      fontFamily: "SF Pro Text",
      fontSize: "1rem",
      fontWeight: 400,
    },
    button: {
      fontFamily: "SF Pro Rounded",
      fontSize: "0.875rem",
      textTransform: "uppercase",
    },
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{
          bgcolor: "white", // White background
          color: "black", // Black text
          boxShadow: "none", // Remove shadow for a clean look
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between", // Spacing between left, center, and right sections
              alignItems: "center",
            }}
          >
            {/* Left Section */}
            <Box
              sx={{
                display: "flex",
                gap: 4, // Even spacing between items
              }}
            >
              <Typography variant="h6" component="div">
                Invest
              </Typography>
              <Typography variant="h6" component="div">
                About
              </Typography>
              <Typography variant="h6" component="div">
                Pricing
              </Typography>
            </Box>

            {/* Center Section (Logo) */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontFamily: "SF Pro Display, Arial, sans-serif",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textAlign: "center",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              SmartHarvest
            </Typography>

            {/* Right Section */}
            <Box
              sx={{
                display: "flex",
                gap: 4, // Even spacing between items
              }}
            >
              <Typography variant="h6" component="div">
                FAQ
              </Typography>
              <Typography variant="h6" component="div">
                Contact
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 4,
        }}
      >
        <Box>
          <Typography variant="h1" gutterBottom>
            Discover Tools And Insights To Make Socially Responsible Investments
            While Growing Your Portfolio With Confidence
          </Typography>
          <Typography variant="h6" gutterBottom>
            Explore Resources To Empower <br/> Your Growth 
            Through Sustainable Investments And Opportunities.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Navbar;