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
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;