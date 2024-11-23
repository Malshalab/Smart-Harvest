import React from "react";
import { Box, Typography, Divider, Card, CardContent } from "@mui/material";

const WaterManagementTutorial = () => {
  const steps = [
    "Deploy smart irrigation systems to optimize water usage.",
    "Install IoT devices to measure soil moisture levels.",
    "Ensure minimal water wastage through data-driven scheduling.",
    "Integrate weather forecasts to adjust watering schedules dynamically.",
    "Implement rainwater harvesting techniques for sustainable water sourcing.",
    "Monitor and reduce water runoff to protect surrounding ecosystems.",
    "Use predictive analytics to anticipate future water requirements.",
    "Establish water recycling systems to maximize efficiency.",
    "Collaborate with local water resource authorities to ensure long-term availability.",
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
        Effective water management is critical for sustainable farming and efficient harvests. 
        By leveraging advanced technology and strategic planning, farmers can reduce water waste, 
        preserve resources, and enhance crop yields. Below are key steps to implement smart water 
        management practices during the harvest season.
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
            Steps for Smart Water Management
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
        Smart water management not only conserves resources but also ensures healthier crops 
        and sustainable farming practices. Start implementing these steps today for a smarter 
        approach to water usage.
      </Typography>
    </Box>
  );
};

export default WaterManagementTutorial;