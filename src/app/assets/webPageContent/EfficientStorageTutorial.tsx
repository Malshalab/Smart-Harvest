import React from "react";
import { Box, Typography, Divider, Card, CardContent } from "@mui/material";

const StorageTutorial = () => {
  const steps = [
    "Use temperature-controlled storage facilities to preserve freshness.",
    "Monitor humidity levels to prevent crop spoilage.",
    "Organize harvested crops for easy access and inventory management.",
    "Implement automated inventory tracking systems for efficient stock control.",
    "Use UV sterilization to reduce the risk of contamination and pathogens.",
    "Store crops in stackable crates to optimize space and reduce handling damage.",
    "Ensure proper ventilation in storage areas to prevent moisture build-up.",
    "Separate different types of crops to avoid cross-contamination and quality loss.",
    "Use sensors to monitor and maintain real-time storage conditions.",
    "Adopt sustainable packaging solutions to minimize environmental impact.",
  ];

  return (
    <Box
      sx={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          textAlign: "justify",
          marginBottom: "30px",
          lineHeight: "1.8",
          color: "#555",
        }}
      >
        Proper storage is critical for preserving the quality and freshness of
        harvested crops. By implementing advanced storage techniques and tools,
        farmers can significantly reduce post-harvest losses and maintain the
        value of their produce. Below are the steps to achieve efficient storage
        management.
      </Typography>
      <Card
        sx={{
          backgroundColor: "#ffffff",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: "10px", color: "#34495e" }}>
            Steps for Efficient Storage Management
          </Typography>
          {steps.map((step, index) => (
            <Typography
              key={index}
              sx={{
                marginBottom: "10px",
                padding: "10px",
                backgroundColor: "#ecf0f1",
                borderRadius: "5px",
              }}
            >
              <strong>Step {index + 1}:</strong> {step}
            </Typography>
          ))}
        </CardContent>
      </Card>
      <Divider sx={{ marginBottom: "20px" }} />
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          color: "#7f8c8d",
        }}
      >
        Efficient storage practices are key to reducing waste and maximizing
        profitability. Explore more tools and techniques for post-harvest
        storage.
      </Typography>
    </Box>
  );
};

export default StorageTutorial;