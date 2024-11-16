"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
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
      color: "#555",
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "white",
          color: "black",
          boxShadow: "none",
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
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  fontWeight: 400,
                  color: "black",
                }}
              >
                Invest
              </Button>
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  fontWeight: 400,
                  color: "black",
                }}
              >
                About
              </Button>
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  fontWeight: 400,
                  color: "black",
                }}
              >
                Pricing
              </Button>
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
                gap: 2,
                alignItems: "center",
              }}
            >
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  fontWeight: 400,
                  color: "black",
                }}
              >
                Log in
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontWeight: 400,
                  bgcolor: "black",
                  color: "white",
                  borderRadius: "20px",
                  padding: "6px 16px",
                  ":hover": {
                    bgcolor: "#333",
                  },
                }}
              >
                Sign up
              </Button>
            </Box>

            {/* Mobile Menu */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleMenuClose}>Invest</MenuItem>
              <MenuItem onClick={handleMenuClose}>About</MenuItem>
              <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
              <MenuItem onClick={handleMenuClose}>FAQ</MenuItem>
            </Menu>
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
          marginTop: 4,
        }}
      >
        <Box>
          <Typography variant="h1" gutterBottom>
            Discover Tools and Insights to Make Socially Responsible Investments
          </Typography>
          <Typography variant="h6" gutterBottom>
            Explore Resources To Empower <br /> Your Growth Through Sustainable
            Investments And Opportunities.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Navbar;