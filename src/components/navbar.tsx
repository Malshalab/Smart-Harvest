"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "next/link"; 

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
            <Link href="/">
              <Button sx={{ textTransform: "none", color: "black" }}>Home</Button>
            </Link>
            <Button sx={{ textTransform: "none", color: "black" }}>About</Button>
            <Link href="/events" passHref>
              <Button sx={{ textTransform: "none", color: "black" }}>
                Events
              </Button>
            </Link>
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
      </Container>
    </AppBar>
  );
};

export default Navbar;