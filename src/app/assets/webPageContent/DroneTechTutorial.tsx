import React from "react";
import { Box, Typography, Divider, Card, CardContent } from "@mui/material";

const DroneTechnologyTutorial = () => {
  const steps = [
    "Deploy drones to capture high-resolution aerial imagery.",
    "Analyze the images using AI algorithms for crop health insights.",
    "Adjust irrigation and harvesting schedules based on the findings.",
    "Map fields for identifying areas with poor growth or pest infestations.",
    "Use multispectral imaging to assess plant stress levels and nutrient deficiencies.",
    "Monitor weather patterns and their impact on crop health in real-time.",
    "Track crop growth stages to optimize fertilizer and pesticide application.",
    "Conduct automated seeding and planting in less accessible areas.",
  ];

  return (
    <Box
      sx={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        borderRadius: "10px",
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
        Drone technology revolutionizes crop monitoring by providing detailed
        aerial views and actionable insights. By integrating drones with
        advanced imaging and AI analytics, farmers can monitor crop health,
        detect stress, and make precise adjustments to improve yield and reduce
        costs. Below are the key steps to effectively leverage drones for crop
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
            Steps for Implementing Drone Technology
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
        Learn more about drone solutions and their role in precision agriculture by exploring our resources.
      </Typography>
    </Box>
  );
};

export default DroneTechnologyTutorial;