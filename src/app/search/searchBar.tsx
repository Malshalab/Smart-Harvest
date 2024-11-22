import React, { ChangeEvent } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) => {
  console.log("Current Search Query (Prop):", value);

  return (
    <TextField
      value={value}
      onChange={(e) => {
        console.log("Input Value Changed:", e.target.value);
        onChange(e);
      }}
      placeholder="Search"
      variant="outlined"
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "20px auto",
        bgcolor: "#fff",
        borderRadius: 40,
        borderWidth: "2px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "25px",
          padding: "5px 15px",
          "& fieldset": {
            borderColor: "grey",
          },
          "&:hover fieldset": {
            borderColor: "#1565c0",
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
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