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
    <AppBar
      position="sticky"
      sx={{
        padding: "7px",
        bgcolor: "white",
        color: "black",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/">
              <Button sx={{ textTransform: "none", color: "black", fontSize: 20 }}>Home</Button>
            </Link>
            <Link href="/events" passHref>
              <Button sx={{ textTransform: "none", color: "black", fontSize: 20 }}>
                Events
              </Button>
            </Link>
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              letterSpacing: "0.1rem",
              textAlign: "center",
              color: "black",
            }}
          >
            SmartHarvest
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="outlined" sx={{ textTransform: "none", fontSize: 16, color: "black", borderRadius: 20, borderColor: "black" }}>Log in</Button>
            <Button
              variant="contained"
              sx={{
                fontSize: 16,
                textTransform: "none",
                bgcolor: "black",
                color: "white",
                borderRadius: 20,
                ":hover": { bgcolor: "#333" },
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
            Learn More About Sustainability Through Our Events Hosted by Our Subject Matter Experts
          </Typography>
          <Typography variant="h6" gutterBottom>
            Explore and Register Below <br/> 
            For Webinars, Workshops, and Sustainability Events.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Navbar;