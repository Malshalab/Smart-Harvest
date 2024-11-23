
import Library from "../pages/events_page";
import { cookies } from "next/headers";
export default async function Home() {

  // const cookieStore = await cookies()
  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 1.5,
          width: "1100px",
          marginTop: 8,
          gap: 6,
        }}
      >
      <img
        src="/assets/images/appLogo.jpeg" // Replace with the path to your logo
        alt="SmartHarvest Logo"
        style={{
          width: "350px", // Adjust size as needed
          height: "350px", // Keep the width and height equal for a circle
          borderRadius: "50%", // Makes the image circular
          objectFit: "cover", // Ensures the image fills the circle
          marginBottom: "10px"
        }}
      />
        <Typography
          variant="h1"
          sx={{
            fontWeight: "semi-bold",
            fontSize: "425%",
            width: "70%",
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          {metadata.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "semi-bold",
            fontSize: "1.25rem",
            color: "#757575",
            marginBottom: 4,
          }}
        >
          {metadata.directions}
        </Typography>
      </Box>
      <Library />
    </Box>
  );
}