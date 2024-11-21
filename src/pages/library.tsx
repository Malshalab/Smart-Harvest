"use client";
import React, { useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { cards, tabContent, tabName } from "@/app/configs/libraryConfigs";
import { CardCover } from "@mui/joy";
import SearchBar from "@/app/search/searchBar";

const Library = () => {
  console.log("Library Component Rendered");
  const [currentTab, setCurrentTab] = useState(tabName.articles);
  const [searchQuery, setSearchQuery] = useState(""); // Track search input
  // Filter cards based on the search query (matching "title" only)
  const filteredCards = cards.filter((card) => {
    const query = searchQuery.toLowerCase();
    const matches = card.title.toLowerCase().includes(query);
    console.log(`Card Title: ${card.title}, Matches: ${matches}`); // Debug each card
    return matches;
  });

  console.log("Filtered Cards:", filteredCards); // Debugging filtered results


  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "10px" }}>
      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChange={(e) => {
          console.log("Search Query Updated in Library:", e.target.value); // Debugging in parent
          setSearchQuery(e.target.value); // Update the state
        }}
      />

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
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

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          padding: 2,
        }}
      >
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 calc(33.33% - 16px)",
              maxWidth: "400px",
              minWidth: "200px",
              height: "auto",
              aspectRatio: "4 / 3",
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
                position: "relative",
                zIndex: 2,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontFamily: "SF Pro Display, Arial, sans-serif",
                  fontWeight: "600",
                }}
              >
                {card.text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Library;