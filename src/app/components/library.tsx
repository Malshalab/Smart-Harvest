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

    const cards = Array.from({ length: 10 }, (_, i) => i + 1); // Example card data

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

            {/* New Section Below */}
            <Box 
            display={"flex"}
                padding={4} 
                bgcolor="#f0f4f7" 
                borderRadius={2} 
                textAlign="left"
                width="100%"
                gap={2}
            >
                
                <Button
                    variant="contained"
                    sx={{
                        padding: "8px 24px",     // Increase button padding
                        fontSize: "1rem",      // Increase font size
                        minWidth: "150px",        // Set minimum width
                        minHeight: "40px",
                        bgcolor: "white",
                        borderRadius:"20px",
                        color: "grey","&:hover": {
                            bgcolor: "#FFD700",  // Background changes to yellow
                            color: "green",     // Text changes to green
                        },
                        }}
                    >
                        Articles
                    </Button>
                    <Button
                    variant="contained"
                    sx={{
                        padding: "8px 24px",     // Increase button padding
                        fontSize: "1rem",      // Increase font size
                        minWidth: "150px",        // Set minimum width
                        minHeight: "40px",
                        bgcolor: "white",
                        borderRadius:"20px",
                        color: "grey","&:hover": {
                            bgcolor: "#FFD700",  // Background changes to yellow
                            color: "green",     // Text changes to green
                        },
                        }}
                    >
                        Tutorials
                    </Button>
                    <Button
                    variant="contained"
                    sx={{
                        padding: "8px 24px",     // Increase button padding
                        fontSize: "1rem",      // Increase font size
                        minWidth: "150px",        // Set minimum width
                        minHeight: "40px",
                        bgcolor: "white",
                        borderRadius:"20px",
                        color: "grey","&:hover": {
                            bgcolor: "#FFD700",  // Background changes to yellow
                            color: "green",     // Text changes to green
                        },
                        }}
                    >
                        Videos
                    </Button>
                    <Button
                    variant="contained"
                    sx={{
                        padding: "8px 24px",     // Increase button padding
                        fontSize: "1rem",      // Increase font size
                        minWidth: "150px",        // Set minimum width
                        minHeight: "40px",
                        bgcolor: "white",
                        borderRadius:"20px",
                        color: "grey","&:hover": {
                            bgcolor: "#FFD700",  // Background changes to yellow
                            color: "green",     // Text changes to green
                        },
                        }}
                    >
                        Certifications
                    </Button>
            </Box>
            <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
    
        <Card component="li" sx={{ minWidth: 150, minHeight:300 ,flexGrow: 1 }}>
            <CardCover>
            <img
                src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                loading="lazy"
                alt=""
            />
            </CardCover>
            <CardContent>
            <TypographyJoy
                level="body-lg"
                textColor="#fff"
                sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 }, position: "absolute", bottom:10 }}
            >
                Image
            </TypographyJoy>
            </CardContent>
        </Card>
        <Card component="li" sx={{ minWidth: 150, minHeight:300 ,flexGrow: 1 }}>
            <CardCover>
            <video
                autoPlay
                loop
                muted
                poster="https://assets.codepen.io/6093409/river.jpg"
            >
                <source
                src="https://assets.codepen.io/6093409/river.mp4"
                type="video/mp4"
                />
            </video>
            </CardCover>
            <CardContent>
                <Box>
                <TypographyJoy
                    level="body-lg"
                    textColor="#fff"
                    sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 }, position:"absolute", bottom:10}}
                    >
                    Video
                </TypographyJoy>
                </Box>
                    

            </CardContent>
      </Card>
    </Box>
    </Box>
        
    );
};

export default Library;