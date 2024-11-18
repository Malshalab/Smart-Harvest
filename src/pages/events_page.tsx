import React from "react";
import '@fontsource/roboto/400.css';
import Box from '@mui/material/Box';
import TypographyJoy from '@mui/joy/Typography';
import { Button } from "@mui/material";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Navbar from "../components/navbar";

const Library = () => {
  const cards = [
    { 
      type: "text",
      text: "Webinar: Sustainable Agriculture Practices",
      description: "Event Description and Date/Time will be available here"
    },
    { 
      type: "text",
      text: "Workshop: Leveraging IoT and AI for Precision Farming"
    },
    { 
      
      type: "text", 
      text: "Webinar: Adapting Farming Systems to Climate Change" 
    },
    { 

      type: "text", 
      text: "Workshop: Farming in the Digital Age: Apps, Software, and Automation"   
    },
    { 
    
      type: "text", 
      text: "Event: Smart AgriTech Expo" 
    },
    { 
    
      type: "text", 
      text: "Virtual Summit: Vertical Farming" 
    },
    { 
   
      type: "text", 
      text: "Event: Sustainability Hackathon" 
    },
    { 
  
      type: "text", 
      text: "Panel: Green Energy in Agriculture Forum" 
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
              minHeight: "300px",
              height: "auto",
              flexGrow: 1,
              borderRadius: 20,
              transition: "all 0.3s ease",
              
            }}
          >
          
            <CardContent>
              {/* Event Title */}
              <TypographyJoy
                level="body-lg"
                textColor="#0f0f0f"
                sx={{
                  fontFamily: "SF Pro Display, Arial, sans-serif",
                  fontWeight: "600",
                  position: "absolute",
                  top: 10,
                  left: 10,
                }}
              >
                {card.text}
              </TypographyJoy>

              {/* Event Description */}
              <TypographyJoy
                level="body-md"
                textColor="#0f0f0f"
                sx={{
                  fontFamily: "SF Pro Display, Arial, sans-serif",
                  fontWeight: "400",
                  position: "absolute",
                  top: 70,
                  left: 10,
                }}
              >
                {card.description}
              </TypographyJoy>
              {/* Button at the Bottom */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", // Center the button horizontally
                marginTop: "auto", // Push button to the bottom
              }}
            >
              <Button
                sx={{
                  padding: 1.4,
                  bgcolor: "#006400",
                  color: "white",
                  borderRadius: 8,
                  ":hover": {
                    bgcolor: "#228B22",
                  },
                }}
              >
                Register
              </Button>
            </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Library;