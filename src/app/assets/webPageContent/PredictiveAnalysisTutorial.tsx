import React from "react";
import { Box, Typography, Divider, Card, CardContent } from "@mui/material";

const PredictiveAnalyticsTutorial = () => {
  const steps = [
    "Collect historical crop yield data for analysis.",
    "Integrate data into predictive analytics software.",
    "Analyze weather patterns and historical trends to predict crop growth.",
    "Schedule harvesting based on optimal timing predictions.",
    "Incorporate soil quality data to refine predictions for higher accuracy.",
    "Monitor real-time market trends to determine the best selling times.",
    "Utilize satellite imagery to enhance predictive models.",
    "Generate reports for long-term planning and resource allocation.",
    "Iteratively improve predictive algorithms using feedback from previous harvests.",
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
        Predictive analytics empowers farmers to optimize harvest schedules by 
        leveraging historical and real-time data. With precise forecasting, it becomes 
        possible to achieve higher yields, reduce waste, and maximize market value. 
        Below are the essential steps for utilizing predictive analytics effectively.
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
            Steps for Implementing Predictive Analytics
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
        Predictive analytics transforms traditional farming into a data-driven practice.
        Start leveraging its power to make smarter, more informed harvesting decisions.
      </Typography>
    </Box>
  );
};

export default PredictiveAnalyticsTutorial;