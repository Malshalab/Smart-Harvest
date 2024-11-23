"use client";
import React, { useState, useEffect } from "react";
import "@fontsource/roboto/400.css";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  AvatarGroup,
  Avatar,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RoomIcon from "@mui/icons-material/Room";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "@/components/navbar";
import { getEvents } from "@/api/events/eventsActions"; // Replace with your Supabase query
import { eventConfigs } from "@/app/configs/eventConfigs"; // Adjust the path based on your project structure

interface Event {
  event_id: number;
  event_name: string;
  description: string;
  event_date: string;
  created_at: string;
  created_by: number;
  attendees?: string[];
  location?: string;
  agenda?: string[];
  documents?: string[];
  enrolled?: boolean;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [visibleEvents, setVisibleEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [currentEventId, setCurrentEventId] = useState<number | null>(null);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await getEvents(); // Replace with your Supabase query
        if (error) {
          console.error("Error fetching events from Supabase:", error);
          return;
        }

        // Enrich events with dynamic dummy data
        const enrichedData = data.map((event: Event, index: number) => {
          const config = eventConfigs[index % eventConfigs.length]; // Rotate through dummy configs
          return {
            ...event,
            attendees: config.attendees,
            location: event.location || "Online",
            agenda: config.agenda,
            documents: config.documents,
            enrolled: Math.random() > 0.5, // Dummy logic for enrollment
          };
        });

        setEvents(enrichedData);
        setVisibleEvents(enrichedData); // Initially show all events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const filterEvents = (tabIndex: number) => {
    const now = new Date();
    let filteredEvents: Event[] = [];

    switch (tabIndex) {
      case 0: // Upcoming
        filteredEvents = events.filter((event) => event.enrolled && new Date(event.event_date) > now);
        break;
      case 1: // Pending
        filteredEvents = events.filter((event) => !event.enrolled && new Date(event.event_date) > now);
        break;
      case 3: // Past
        filteredEvents = events.filter((event) => new Date(event.event_date) < now);
        break;
      default:
        filteredEvents = events;
    }

    setVisibleEvents(filteredEvents);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    filterEvents(newValue);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, eventId: number) => {
    setMenuAnchor(event.currentTarget);
    setCurrentEventId(eventId);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setCurrentEventId(null);
  };

  const handleRegisterClick = () => {
    if (currentEventId !== null) {
      const eventIndex = events.findIndex((e) => e.event_id === currentEventId);
      if (eventIndex >= 0) {
        events[eventIndex].enrolled = true;
        setSnackbarMessage("Successfully registered for the event!");
        setSnackbarSeverity("success");
        filterEvents(activeTab);
      }
    }
    handleMenuClose();
    setSnackbarOpen(true);
  };

  const handleDeregisterClick = () => {
    if (currentEventId !== null) {
      const eventIndex = events.findIndex((e) => e.event_id === currentEventId);
      if (eventIndex >= 0) {
        events[eventIndex].enrolled = false;
        setSnackbarMessage("Successfully deregistered from the event!");
        setSnackbarSeverity("success");
        filterEvents(activeTab);
      }
    }
    handleMenuClose();
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <Box display="flex" flexDirection="column" gap={4} padding={2}>
      <Navbar />

      {/* Tabs Section */}
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Bookings
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
          See your scheduled events from your calendar events links.
        </Typography>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="Upcoming" />
          <Tab label="Pending" />
          <Tab label="Recurring" />
          <Tab label="Past" />
          <Tab label="Cancelled" />
        </Tabs>
      </Box>

      {selectedEvent ? (
        // Styled detailed event view
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 8,
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              background: "linear-gradient(135deg, #2ecc71, #27ae60)", // Jade green gradient
              padding: 4,
              color: "white",
              position: "relative",
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6" fontWeight="bold">
                Event Details
              </Typography>
              <IconButton
                onClick={handleCloseDetails}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" },
                  borderRadius: "50%",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider sx={{ borderColor: "white", mb: 2 }} />
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
              {selectedEvent.event_name}
            </Typography>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="body2">
                {new Date(selectedEvent.event_date).toLocaleDateString("en-US", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
                , {new Date(selectedEvent.event_date).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
            </Box>
            <Box display="flex" gap={2}>
              <Button
                variant="contained"
                startIcon={<AccessTimeIcon />}
                sx={{
                  backgroundColor: "white",
                  color: "#2ecc71",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.8)" },
                }}
              >
                Join with Google Meet
              </Button>
              <Button
                variant="outlined"
                startIcon={<KeyboardArrowDownIcon />}
                sx={{
                  borderColor: "white",
                  color: "white",
                  textTransform: "none",
                  "&:hover": { borderColor: "rgba(255, 255, 255, 0.8)" },
                }}
              >
                Going
              </Button>
            </Box>
          </Box>

          <Divider />

          {/* Attendees Section */}
          <Box
            sx={{
              paddingX: 4,
              paddingY: 3,
              borderBottom: "1px solid #E0E0E0",
            }}
          >
            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              {selectedEvent.attendees?.length} people invited
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <AvatarGroup max={5}>
                {selectedEvent.attendees?.map((avatar, index) => (
                  <Avatar key={index} src={avatar} />
                ))}
              </AvatarGroup>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  backgroundColor: "#F9FAFB",
                  "&:hover": { backgroundColor: "#F3F4F6" },
                }}
              >
                Add
              </Button>
            </Box>
          </Box>

          {/* Agenda Section */}
          <Box
            sx={{
              paddingX: 4,
              paddingY: 3,
              borderBottom: "1px solid #E0E0E0",
            }}
          >
            <Typography variant="body1" fontWeight="bold" mb={2}>
              📝 Agenda
            </Typography>
            {selectedEvent.agenda?.map((item, index) => (
              <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                {item}
              </Typography>
            ))}
          </Box>

          {/* Documents Section */}
          <Box sx={{ paddingX: 4, paddingY: 3 }}>
            <Typography variant="body1" fontWeight="bold" mb={2}>
              📄 Documents
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap">
              {selectedEvent.documents?.map((doc, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#F9FAFB",
                    "&:hover": { backgroundColor: "#F3F4F6" },
                  }}
                >
                  {doc}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      ) : (
        // Card layout
        <Box>
          {visibleEvents.map((event) => (
            <Box
              key={event.event_id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 4,
                border: "1px solid #ddd",
                borderRadius: "8px",
                marginBottom: 2,
                "&:hover": { backgroundColor: "#f9f9f9" },
              }}
              onClick={() => setSelectedEvent(event)}
            >
              {/* Date */}
              <Box
                sx={{
                  flex: 1,
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" sx={{ color: "darkgreen" }}>
                  {new Date(event.event_date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </Typography>
                <Typography variant="h3" sx={{ color: "darkgreen" }}>
                  {new Date(event.event_date).toLocaleDateString("en-US", {
                    day: "numeric",
                  })}
                </Typography>
                <Typography variant="h6" sx={{ color: "darkgreen" }}>
                  {new Date(event.event_date).toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </Typography>
              </Box>

              <Divider orientation="vertical" flexItem sx={{ marginX: 2 }} />

              {/* Time and Location */}
              <Box
                sx={{
                  flex: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccessTimeIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                <Typography variant="body2" sx={{ marginRight: 2 }}>
                  {new Date(event.event_date).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Typography>
                <RoomIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                <Typography variant="body2">{event.location}</Typography>
              </Box>

              {/* Event Name and Avatars */}
              <Box sx={{ flex: 3, textAlign: "center" }}>
                <Typography variant="body1">{event.event_name}</Typography>
                <AvatarGroup max={3} sx={{ justifyContent: "center", marginTop: 1 }}>
                  {event.attendees?.map((avatar, index) => (
                    <Avatar key={index} src={avatar} />
                  ))}
                </AvatarGroup>
              </Box>

              {/* Edit Button */}
              <Box>
                <Button
                  sx={{
                    padding: 1,
                    backgroundColor: "#e0e0e0",
                    color: "black",
                    "&:hover": { backgroundColor: "#d6d6d6" },
                  }}
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuOpen(e, event.event_id);
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      {/* Menu for dropdown actions */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem onClick={handleRegisterClick}>Register</MenuItem>
        <MenuItem onClick={handleDeregisterClick}>Deregister</MenuItem>
      </Menu>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Events;