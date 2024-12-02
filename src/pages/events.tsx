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
  Tooltip,
  Paper,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RoomIcon from "@mui/icons-material/Room";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "@/components/navbar";
import { getEvents } from "@/api/events/eventsActions";
import { eventConfigs } from "@/app/configs/eventConfigs";
import { styled, keyframes } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/** Animation Keyframes */
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.4);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(46, 204, 113, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
  }
`;

/** Styled Components */
const AnimatedBox = styled(Box)({
  animation: `${fadeInUp} 0.5s ease`,
});

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  animation: `${fadeInUp} 0.5s ease`,
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: theme.shadows[4],
  },
}));

const HoverButton = styled(Button)(({ theme }) => ({
  transition: "transform 0.3s ease, backgroundColor 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: theme.palette.action.hover,
  },
}));

const PulseIconButton = styled(IconButton)(({ theme }) => ({
  animation: `${pulse} 2s infinite`,
}));

/** Event Interface */
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

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", 
    },
    secondary: {
      main: "#000000", 
    },
    text: {
      primary: "#2D3748",
      secondary: "#718096",
    },
    background: {
      default: "#EDF2F7",
      default: "#EDF2F7", 

    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
});

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
        const { data, error } = await getEvents();
        if (error) {
          console.error("Error fetching events from Supabase:", error);
          return;
        }

        const enrichedData = data.map((event: Event, index: number) => {
          const config = eventConfigs[index % eventConfigs.length];
          return {
            ...event,
            attendees: config.attendees,
            location: event.location || "Online",
            agenda: config.agenda,
            documents: config.documents,
            enrolled: Math.random() > 0.5,
          };
        });

        setEvents(enrichedData);
        setVisibleEvents(enrichedData);
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
        filteredEvents = events.filter(
          (event) => event.enrolled && new Date(event.event_date) > now
        );
        break;
      case 1: // Pending
        filteredEvents = events.filter(
          (event) => !event.enrolled && new Date(event.event_date) > now
        );
        break;
      case 2: // Past
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
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: "100vh" }}>
        <Navbar />

        {/* Main Container */}
        <Box display="flex" flexDirection="column" gap={4} padding={2} maxWidth="800px" margin="0 auto">
          {/* Tabs Section */}
          <Box>
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
              Events
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
              <Tab label="Past" />
            </Tabs>
          </Box>

          {selectedEvent ? (
            <AnimatedBox>
              {/* Event Details */}
              <Paper sx={{ padding: 3, position: "relative" }}>
                <IconButton
                  onClick={handleCloseDetails}
                  sx={{ position: "absolute", top: 8, right: 8 }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h5" color="primary" gutterBottom>
                  {selectedEvent.event_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {selectedEvent.description}
                </Typography>
                <Box display="flex" alignItems="center" mt={2} mb={1}>
                  <AccessTimeIcon color="action" sx={{ marginRight: 1 }} />
                  <Typography variant="body2" color="textSecondary">
                    {new Date(selectedEvent.event_date).toLocaleString()}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <RoomIcon color="action" sx={{ marginRight: 1 }} />
                  <Typography variant="body2" color="textSecondary">
                    {selectedEvent.location}
                  </Typography>
                </Box>
                <Divider sx={{ marginY: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Agenda
                </Typography>
                <ul>
                  {selectedEvent.agenda?.map((item, index) => (
                    <li key={index}>
                      <Typography variant="body2" color="textSecondary">
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
                <Divider sx={{ marginY: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Documents
                </Typography>
                <ul>
                  {selectedEvent.documents?.map((doc, index) => (
                    <li key={index}>
                      <Typography variant="body2" color="secondary">
                        {doc}
                      </Typography>
                    </li>
                  ))}
                </ul>
                <Box display="flex" justifyContent="flex-end" mt={3}>
                  <HoverButton variant="contained" color="primary" onClick={handleCloseDetails}>
                    Close
                  </HoverButton>
                </Box>
              </Paper>
            </AnimatedBox>
          ) : (
            <Box>
              {visibleEvents.map((event) => (
                <Card key={event.event_id}>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box onClick={() => setSelectedEvent(event)}>
                      <Typography variant="h6" color="primary">
                        {event.event_name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {event.description}
                      </Typography>
                      <Box display="flex" alignItems="center" mt={1}>
                        <AccessTimeIcon color="action" sx={{ marginRight: 0.5 }} />
                        <Typography variant="body2" color="textSecondary">
                          {new Date(event.event_date).toLocaleString()}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mt={0.5}>
                        <RoomIcon color="action" sx={{ marginRight: 0.5 }} />
                        <Typography variant="body2" color="textSecondary">
                          {event.location}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Tooltip title="Options">
                        <IconButton
                          onClick={(e) => handleMenuOpen(e, event.event_id)}
                          color="primary"
                        >
                          <KeyboardArrowDownIcon />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        anchorEl={menuAnchor}
                        open={Boolean(menuAnchor) && currentEventId === event.event_id}
                        onClose={handleMenuClose}
                      >
                        {event.enrolled ? (
                          <MenuItem onClick={handleDeregisterClick}>Deregister</MenuItem>
                        ) : (
                          <MenuItem onClick={handleRegisterClick}>Register</MenuItem>
                        )}
                      </Menu>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          )}
        </Box>

        {/* Snackbar */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default Events;