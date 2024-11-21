"use client";
import React, { useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { cards, tabContent, tabName } from "@/app/configs/libraryConfigs";
import { CardCover } from "@mui/joy";
import SearchBar from "@/app/search/searchBar";

const Library = () => {
  console.log("Library Component Rendered");

  const [selectedTabs, setSelectedTabs] = useState<tabName[]>([]); // Track selected tabs
  const [searchQuery, setSearchQuery] = useState(""); // Track search input

  // Toggle tab selection
  const toggleTab = (tab: tabName) => {
    setSelectedTabs((prev) =>
      prev.includes(tab) ? prev.filter((t) => t !== tab) : [...prev, tab]
    );
  };

  // Filter cards based on selected tabs and search query
  const filteredCards = cards.filter((card) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = card.title.toLowerCase().includes(query);
    const matchesTab =
      selectedTabs.length === 0 || // If no tabs selected, show all
      selectedTabs.some((tab) =>
        card.tags.includes(tab.toLowerCase()) // Match tabs with card tags
      );
    return matchesSearch && matchesTab;
  });

  console.log("Filtered Cards:", filteredCards); // Debugging filtered results
  console.log("Selected Tabs:", selectedTabs); // Debugging selected tabs

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
            variant={selectedTabs.includes(key as tabName) ? "contained" : "outlined"}
            onClick={() => toggleTab(key as tabName)} // Toggle selection
            sx={{
              padding: "10px 20px",
              borderColor: "#E7E7E7",
              borderRadius: "10px",
              fontSize: "1.5rem",
              fontFamily: "Roboto",
              color: selectedTabs.includes(key as tabName) ? "#FFF" : "#000",
              backgroundColor: selectedTabs.includes(key as tabName) ? "#000" : "#E7E7E7",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: selectedTabs.includes(key as tabName) ? "#000" : "#a6a6a6",
                color: selectedTabs.includes(key as tabName) ? "#FFF" : "#000",
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
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
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

                {/* Circle with Arrow */}
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
                    right: "35px",
                    cursor: "pointer",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    ":hover": {
                      bgcolor: "#f0f0f0",
                    },
                  }}
                  onClick={() => console.log(`Arrow clicked for card: ${card.text}`)}
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
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              marginTop: "20px",
              color: "#757575",
            }}
          >
            No cards match the selected criteria.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Library;