import React from "react";
import { Box, Typography, Divider, Card, CardContent } from "@mui/material";

const RoboticsTutorial = () => {
  const steps = [
    "Set up automated robotic arms in the field.",
    "Program robots to identify and pick ripe crops.",
    "Regularly maintain and calibrate robotic systems for efficiency.",
    "Integrate sensors for monitoring crop health and readiness.",
    "Implement AI algorithms for predictive harvesting schedules.",
    "Train staff on operating and troubleshooting robotic systems.",
    "Monitor and analyze data collected by robots for continuous improvement.",
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
        Robotics is transforming the agricultural industry by improving efficiency, reducing labor costs, and increasing crop yields. Automated harvesting robots
        can work around the clock, ensuring crops are picked at their peak readiness. This tutorial will guide you through the essential steps to implement and
        optimize robotic systems for your farm.
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
            Steps to Automate Harvesting
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
        For more advanced tutorials, visit our knowledge base or reach out to our team of experts.
      </Typography>
    </Box>
  );
};

export default RoboticsTutorial;