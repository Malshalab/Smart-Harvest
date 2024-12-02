"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "white",
        color: "black",
        boxShadow: "none",
        borderBottom: "1px solid #E0E0E0",
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
          {/* Left Section */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button sx={{ textTransform: "none", color: "black" }}>Invest</Button>
            <Button sx={{ textTransform: "none", color: "black" }}>About</Button>
            <Button sx={{ textTransform: "none", color: "black" }}>Pricing</Button>
            <Button sx={{ textTransform: "none", color: "black" }}>Events</Button>
          </Box>

          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: "0.1rem",
              textAlign: "center",
            }}
          >
            SmartHarvest
          </Typography>

          {/* Right Section */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button sx={{ textTransform: "none", color: "black" }}>Log in</Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                bgcolor: "black",
                color: "white",
                borderRadius: 20,
                ":hover": { bgcolor: "#333" },
              }}
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const EventRegistrationPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={4}>
      <Navbar />
      {/* Event Registration Page Title */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: 3 }}>
        Event Registration
      </Typography>
      <Typography sx={{ marginTop: 2}}>
        Explore and register for events below.
      </Typography>
      {/* Additional event registration content goes here */}
    </Box>
  );
};

export default EventRegistrationPage;