import React from "react";
import { Box, Typography, Divider, Card, CardContent } from "@mui/material";

const IoTSensorsTutorial = () => {
  const steps = [
    "Install soil moisture sensors in strategic locations.",
    "Connect sensors to a centralized monitoring system.",
    "Analyze the collected data to determine harvesting schedules.",
    "Integrate weather data to optimize irrigation and harvesting timelines.",
    "Monitor real-time soil nutrient levels to predict crop health.",
    "Set up automated alerts for critical conditions such as drought or overwatering.",
    "Utilize IoT data to enhance crop rotation and field management practices.",
    "Ensure sensors are calibrated periodically for accurate measurements.",
    "Leverage cloud-based platforms to access and analyze sensor data remotely.",
    "Collaborate with AI algorithms to generate actionable insights from the data.",
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
        IoT sensors play a vital role in modern agriculture by providing real-time
        insights into soil, crop, and environmental conditions. These sensors
        help farmers make informed decisions and optimize resource usage for
        sustainable harvesting practices. Below are the steps for using IoT
        sensors effectively.
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
            Steps for Implementing IoT Sensors
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
        IoT technology enables smarter farming decisions and boosts efficiency.
        Leverage its full potential to revolutionize your harvesting process.
      </Typography>
    </Box>
  );
};

export default IoTSensorsTutorial;