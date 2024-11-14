import React from "react";
import '@fontsource/roboto/400.css';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TypographyJoy from '@mui/joy/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import Divider from '@mui/material/Divider';
import { Button } from "@mui/material";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

const Library = () => {
    const cards = Array.from({ length: 8 }, (_, i) => i + 1); // Example card data

    return (
        <Box display="flex" flexDirection="column" gap={4} padding={2}>
            {/* Top Section: Header, Avatars, and Stats */}
            <Box 
                display="flex" 
                justifyContent="space-between" 
                alignItems="flex-start"
                width="100%"
            >
                {/* Typography Section */}
                <Box>
                    <Typography variant="h3" color="#006400" gutterBottom>
                        Together Greening our Earth
                    </Typography>
                </Box>

                {/* Avatar and Stats Section */}
                <Box display="flex" alignItems="center" gap={2}>
                    {/* Avatar Group */}
                    <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 64, height: 64 } }}>
                        <Avatar alt="Remy Sharp" src="/images/Multiavatar-Joker.png" />
                        <Avatar alt="Travis Howard" src="/images/Multiavatar-Binx Bond.png" />
                        <Avatar alt="Cindy Baker" src="/images/Multiavatar-Ned Ramirez.png" />
                        <Avatar alt="Agnes Walker" src="/images/Multiavatar-Vincent Plant.png" />
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>

                    {/* Divider */}
                    <Divider orientation="vertical" flexItem sx={{ bgcolor: "gold", width: 2 }} />

                    {/* Stats Section */}
                    <Box textAlign="left">
                        <Typography variant="h4" color="#004d00" fontWeight="bold">
                            160K
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Have joined
                        </Typography>
                    </Box>
                </Box>
            </Box>

                <Box
        sx={{
            display: "flex",
            overflowX: "auto", // Enable horizontal scrolling
            gap: 2, // Space between cards
            padding: 2, // Inner padding
            "&::-webkit-scrollbar": {
                height: 8, // Scrollbar height
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888", // Scrollbar color
                borderRadius: 4,
            },
            "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555", // Scrollbar hover color
            },
        }}
    >
        {cards.map((_, index) => (
            <Card
                key={index}
                sx={{
                    flex: "1 1 calc(25% - 16px)", // Dynamically adjust to 25% of the container width
                    minWidth: "150px", // Ensure a minimum width
                    maxWidth: "400px", // Cap the width for large screens
                    minHeight: "300px", // Set a consistent minimum height
                    height: "auto", // Allow height to adjust based on content, but respect minHeight
                    flexGrow: 1, // Allow dynamic growth in width
                    borderRadius: 10, // Rounded corners
                    transition: "all 0.3s ease", // Smooth resizing effect
                }}
            >
                <CardCover>
                    {index % 2 === 0 ? (
                        <img
                            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                            alt={`Image ${index + 1}`}
                            loading="lazy"
                        />
                    ) : (
                        <video autoPlay loop muted>
                            <source
                                src="https://assets.codepen.io/6093409/river.mp4"
                                type="video/mp4"
                            />
                        </video>
                    )}
                </CardCover>
                <CardContent>
                    <TypographyJoy
                        level="body-lg"
                        textColor="#fff"
                        sx={{
                            fontWeight: "lg",
                            position: "absolute",
                            bottom: 10,
                            left: 10,
                        }}
                    >
                        {index % 2 === 0 ? "Image" : "Video"}
                    </TypographyJoy>
                </CardContent>
            </Card>
        ))}
    </Box>
        </Box>
    );
};

export default Library;