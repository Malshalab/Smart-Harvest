'use client';
import React, { useState, useEffect } from "react";
import '@fontsource/roboto/400.css';
import Box from '@mui/material/Box';
import TypographyJoy from '@mui/joy/Typography';
import { Button } from "@mui/material";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Navbar from "../../../components/navbar";
import { getEvents } from "../../../pages/api/events/actions";
import { registerUserToEvent } from "../../../pages/api/registration/actions"; // Import the function
import { CardCover } from "@mui/joy"; // Import CardCover from @mui/joy

// Define types for the event object
interface Event {
  event_id: number;
  event_name: string;
  description: string;
  event_date: string;
  created_at: string;
  created_by: number;
}

const Library: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]); // State to store events
  const [registrationMessage, setRegistrationMessage] = useState<string | null>(null); // State for registration confirmation message
  const [loading, setLoading] = useState<boolean>(false); // State to manage loading

  // Fetch events when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await getEvents(); // Fetch events from Supabase
        if (error) {
          console.error("Error fetching events:", error);
        } else {
          setEvents(data); // Set fetched events to the state
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  // Handle registration and show confirmation message
  const handleRegisterClick = async (event: Event) => {
    try {
      setLoading(true); // Set loading state to true
      const registrationMessage = await registerUserToEvent(event.event_id); // Call the register API

      setRegistrationMessage(registrationMessage); // Show the returned message

      // Clear message after 5 seconds
      setTimeout(() => {
        setRegistrationMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Error registering for event:", error);
      setRegistrationMessage("An error occurred during registration.");
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={4} padding={2}>
      <Box>
        <Navbar />
      </Box>

      {/* Registration Confirmation Message */}
      {registrationMessage && (
        <Box sx={{ padding: 2, backgroundColor: "#e0ffe0", borderRadius: 2, marginBottom: 2 }}>
          <TypographyJoy level="body-md" textColor="#2e7d32">
            {registrationMessage}
          </TypographyJoy>
        </Box>
      )}

      {/* Cards Section */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, padding: 2 }}>
        {events.map((event) => {
          const randomIndex = Math.floor(Math.random() * 5) + 1; // Get a random number between 1 and 5
          return (
            <Card
              key={event.event_id}
              sx={{
                flex: "1 1 calc(25% - 16px)",
                minWidth: "200px",
                maxWidth: "500px",
                minHeight: "300px",
                height: "auto",
                flexGrow: 1,
                borderRadius: 20,
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card Cover for Background Image */}
              <CardCover
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(/app/assets/images/thumbnails/${randomIndex}.jpeg)`, // Background image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 1,
                }}
              />
              <CardContent
                sx={{
                  background: "rgba(0, 0, 0, 0.5)", // Overlay for readability
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 2,
                  position: "relative",
                  zIndex: 2, // Ensure content is above CardCover
                }}
              >

                {/* Event Title */}
                <TypographyJoy
                  level="body-lg"
                  sx={{
                    fontFamily: "SF Pro Display, Arial, sans-serif",
                    fontWeight: "600",
                    marginBottom: 1,
                  }}
                >
                  {event.event_name}
                </TypographyJoy>

                {/* Event Description */}
                <TypographyJoy
                  level="body-md"
                  sx={{
                    fontFamily: "SF Pro Display, Arial, sans-serif",
                    fontWeight: "400",
                    marginBottom: 1,
                  }}
                >
                  {event.description}
                </TypographyJoy>

                {/* Event Date and Time */}
                <TypographyJoy
                  level="body-sm"
                  sx={{
                    fontFamily: "SF Pro Display, Arial, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  {`Event Date & Time: ${new Date(event.event_date).toLocaleString()}`}
                </TypographyJoy>

                {/* Button */}
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
                  <Button
                    sx={{
                      padding: 1.4,
                      bgcolor: "#006400",
                      color: "white",
                      borderRadius: 8,
                      ":hover": { bgcolor: "#228B22" },
                    }}
                    onClick={() => handleRegisterClick(event)}
                    disabled={loading}
                  >
                    {loading ? "Registering..." : "Register"}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Library;