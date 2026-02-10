import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function CustomInput({ label, ...props }) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "0.75rem",
          fontWeight: 500,
          color: "#6e6e73",
          mb: 0.5,
        }}
      >
        {label}
      </Typography>

      <TextField
        fullWidth
        {...props}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            backgroundColor: "rgba(255,255,255,0.9)",
            transition: "all 0.2s ease",
            "& fieldset": {
              borderColor: "#d2d2d7",
            },
            "&:hover fieldset": {
              borderColor: "#b5b5bd",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0071e3",
              boxShadow: "0 0 0 3px rgba(0,113,227,0.15)",
            },
          },
          "& input": {
            padding: "12px 14px",
            fontSize: "0.95rem",
          },
        }}
      />
    </Box>
  );
}

export default CustomInput;
