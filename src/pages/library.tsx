"use client";

import React from "react";

import Navbar from "../components/navbar";
// import React, { SyntheticEvent, useState } from "react";
import { useState } from "react";

import "@fontsource/roboto/400.css";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { Button, Tab, Tabs } from "@mui/material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

// import Card from "@mui/joy/Card";
// import CardCover from "@mui/joy/CardCover";
// import CardContent from "@mui/joy/CardContent";
// import Navbar from "../components/navbar";
// import { tabContent, cards, tabName } from "@/app/configs/libraryConfigs";
import "@fontsource/roboto/400.css";
import { cards, tabContent, tabName } from "@/app/configs/libraryConfigs";
import { CardCover } from "@mui/joy";


const Library = () => {
  const [currentTab, setCurrentTab] = useState(tabName.articles);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 2,
        padding: "10px",
      }}
    >
      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap", // Ensure buttons wrap if needed
          gap: 2, // Space between buttons
        }}
      >
        {Object.keys(tabContent).map((key) => (
        <Button
          key={key}
          variant={currentTab === key ? "contained" : "outlined"}
          onClick={() => setCurrentTab(key as tabName)}
          sx={{
            padding: "10px 20px",
            borderColor: "#E7E7E7",
            borderRadius: "10px",
            fontSize: "1.5rem",
            fontFamily: "Roboto",
            color: currentTab === key ? "#FFF" : "#000", 
            backgroundColor: currentTab === key ? "#000" : "#E7E7E7",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: currentTab === key ? "#000" : "#a6a6a6",
              color: currentTab === key ? "#FFF" : "#000",
            },
          }}
        >
          {key.toUpperCase()}
        </Button>
      ))}
      </Box>
      
          <Box
      sx={{
        display: "flex",
        flexWrap: "wrap", // Allows cards to wrap to the next row
        gap: 2, // Spacing between cards
        justifyContent: "center", // Center-align cards in each row
        padding: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card
        key={index}
        sx={{
          flex: "1 1 calc(33.33% - 16px)", // Dynamic width for 3 cards per row
          maxWidth: "400px", // Limit maximum width
          minWidth: "200px", // Minimum width for responsiveness
          height: "auto", // Allow height to adjust naturally
          aspectRatio: "4 / 3", // Maintain a 4:3 aspect ratio (or adjust as needed)
          borderRadius: 20,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          ":hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          },
          position: "relative",
          overflow: "hidden",
        }}
      >
          <CardCover>
            {card.type === "video" ? (
              <video autoPlay loop muted>
                <source src={card.src} type="video/mp4" />
              </video>
            ) : (
              <img src={card.src} alt={card.text} loading="lazy" />
            )}
          </CardCover>
          <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
                padding: "1.5rem",
                position: "relative", // Ensure content stays above CardCover
                zIndex: 2, // Place above CardCover
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
              }}
            >
            <Typography
              variant="h6"
              sx={{
                color: "#fff", // White text on a dark background
                fontFamily: "SF Pro Display, Arial, sans-serif",
                fontWeight: "600",
              }}
            >
              {card.text}
            </Typography>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                bgcolor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: "25px",
                right: "25px",
                cursor: "pointer",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                ":hover": {
                  bgcolor: "#f0f0f0",
                },
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                →
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
    </Box>
  );
};

export default Library;