import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <TextField
      placeholder="Search"
      variant="outlined"
      sx={{
        width: "100%",
        maxWidth: "600px", // Limits the width to make it responsive
        margin: "20px auto",
        bgcolor: "#fff",
        borderRadius: "25px",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)", // Adds subtle shadow
        "& .MuiOutlinedInput-root": {
          borderRadius: "25px",
          padding: "5px 15px", // Ensures proper padding inside the input
          "& fieldset": {
            borderColor: "transparent", // Removes border
          },
          "&:hover fieldset": {
            borderColor: "#ccc", // Adds hover effect
          },
          "&.Mui-focused fieldset": {
            borderColor: "#1565c0", // Changes border color when focused
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#999" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;