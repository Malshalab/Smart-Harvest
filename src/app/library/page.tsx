import React from "react";
import '@fontsource/roboto/400.css';
import Box from '@mui/material/Box';
import TypographyJoy from '@mui/joy/Typography';
import { Button } from "@mui/material";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Navbar from "../../components/navbar";

const Library = () => {
  const cards = [
    { 
      src: "images/12255905_1280_720_30fps.mp4", 
      type: "video", 
      text: "View More Videos"   
    },
    { 
      src: "https://assets.codepen.io/6093409/river.mp4", 
      type: "video", 
      text: "Explore Journals" 
    },
    { 
      src: "images/180026-863378301_small.mp4", 
      type: "video", 
      text: "Discover Certifications" 
    },
  ];

  return (
    <Box display="flex" flexDirection="column" gap={4} padding={2}>
      <Box>
        <Navbar />
      </Box>

      {/* Button Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Button
          sx={{
            padding: 1.4,
            bgcolor: "#2046C7",
            color: "white",
            borderRadius: 8,
            ":hover": {
              bgcolor: "#1565c0",
            },
          }}
        >
          Explore Opportunities
        </Button>
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          padding: 2,
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 calc(25% - 16px)",
              minWidth: "200px",
              maxWidth: "500px",
              minHeight: "500px",
              height: "auto",
              flexGrow: 1,
              borderRadius: 20,
              transition: "all 0.3s ease",
            }}
          >
            <CardCover>
              {card.type === "video" ? (
                <video autoPlay loop muted>
                  <source src={card.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={card.src}
                  alt={`Image ${index + 1}`}
                  loading="lazy"
                />
              )}
            </CardCover>
            <CardContent>
              <TypographyJoy
                level="body-lg"
                textColor="#fff"
                sx={{
                  fontFamily: "SF Pro Display, Arial, sans-serif",
                  fontWeight: "600",
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                }}
              >
                {card.text}
              </TypographyJoy>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Library;