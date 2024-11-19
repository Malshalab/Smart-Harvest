import Navbar from "@/components/navbar";
import "@fontsource/roboto/400.css";
import SearchBar from "@/app/search/searchBar";
import Library from "@/pages/library";
import { metadata } from "@/app/configs/homeConfigs";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 2
      }}
    >
      <Navbar />
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 4,
          width: "1100px",
          marginTop: 8,
          gap: 6,
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontWeight: "semi-bold", fontSize: "7rem", mb: 2, lineHeight: 1.2 }}
        >
          {metadata.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "semi-bold", fontSize: "1.75rem", color: "#757575", marginBottom: 4 }}
        >
          {metadata.directions}
        </Typography>
        <SearchBar />
      </Box>
      <Library />
    </Box>
  );
}