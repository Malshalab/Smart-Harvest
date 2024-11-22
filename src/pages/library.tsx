"use client";
import React, { useState } from "react";
import { Box, IconButton, Card, CardContent, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import back icon
import { contentMetaData, contentType, tabContent, tabName } from "@/app/configs/libraryConfigs";
import SearchBar from "@/app/search/searchBar";
import { CardCover } from "@mui/joy";

const Library = () => {
  const [selectedTab, setSelectedTab] = useState<tabName>(tabName.articles);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState<contentMetaData | null>(null); // Tracks the clicked card

  const filteredCards = tabContent[selectedTab].filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) // Perform case-insensitive search
  );

  // Function to handle card selection
  const handleCardClick = (card: contentMetaData) => {
    setSelectedCard(card);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        borderRadius: 7,
        boxShadow: selectedCard ? "0px 0px 25px rgba(0, 0, 0, 0.25)" : "0px 0px 0px rgba(0, 0, 0, 0)",
        width: "90%",
      }}
    >
      {selectedCard ? (
        // Details Page for Selected Card
        <Box sx={{ padding: "20px", textAlign: "center", position: "relative" }}>
          {/* Back Button Icon */}
          <IconButton
            onClick={() => setSelectedCard(null)}
            sx={{
              position: "absolute",
              top: "20px",
              left: "20px",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          {/* Card Details */}
          <Typography variant="h4" sx={{ marginBottom: "20px" }}>
            {selectedCard.title}
          </Typography>
          <embed
            src={selectedCard.resourceLocation} // Assuming `resourceLocation` contains the PDF file path
            type="application/pdf"
            style={{
              borderRadius: 10,
              marginTop: "17px",
              width: "100%",
              height: "80vh", // Adjust height as needed
              border: "none",
            }}
          />
          {selectedCard.type === contentType.videos && (
            <iframe
              width="100%"
              height="0px"
              src={selectedCard.resourceLocation.replace("watch?v=", "embed/")} // Ensure proper YouTube embed link
              title={selectedCard.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: "10px",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                marginTop: "20px",
              }}
            ></iframe>
          )}          
          {/* {selectedCard.type === contentType.webPage &&

          } */}
        </Box>
      ) : (
        // Card Grid
        <>
          <SearchBar
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value); // Preserve case in input
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              marginTop: "20px",
            }}
          >
            {Object.keys(tabContent).map((key) => (
              <Button
                key={key}
                variant={selectedTab == key as tabName ? "contained" : "outlined"}
                onClick={() => setSelectedTab(key as tabName)} // Toggle selection
                sx={{
                  padding: "10px 20px",
                  borderColor: "#E7E7E7",
                  borderRadius: "10px",
                  fontSize: "1.5rem",
                  fontFamily: "Roboto",
                  color: selectedTab == key as tabName ? "#FFF" : "#000",
                  backgroundColor:
                    selectedTab == key as tabName ? "#000" : "#E7E7E7",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor:
                      selectedTab == key as tabName ? "#000" : "#a6a6a6",
                    color: selectedTab == key as tabName ? "#FFF" : "#000",
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
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
              padding: 2,
              marginTop: "20px",
            }}
          >
            {filteredCards.length > 0 ? (
              filteredCards.map((card) => (
                <Card
                  key={card.title}
                  sx={{
                    flex: "1 1 calc(33.33% - 16px)",
                    maxWidth: "400px",
                    minWidth: "200px",
                    height: "500px",
                    aspectRatio: "4 / 3",
                    borderRadius: 7,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    ":hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                    },
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCardClick(card)} // Handle card click
                >
                  <CardCover>{card.thumbnail}</CardCover>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      height: "100%",
                      padding: "1.5rem",
                      position: "relative",
                      zIndex: 2,
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontFamily: "'Roboto', Arial, sans-serif",
                        fontWeight: "100",
                        textAlign: "center",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                        padding: "0.5rem",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        borderRadius: "8px",
                        width: "100%",
                        alignSelf: "center",
                      }}
                    >
                      {card.title}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "1.5rem",
                  color: "#666",
                  marginTop: "20px",
                  textAlign: "center",
                }}
              >
                No cards found.
              </Typography>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Library;