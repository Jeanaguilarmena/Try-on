import { Box, Card, Typography } from "@mui/material";
import React from "react";

function Image({ image, alt, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        transition: "transform 0.25s ease",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={alt}
        sx={{
          width: "100%",
          height: 240,
          objectFit: "cover",
          borderRadius: 3,
        }}
      />
    </Card>
  );
}

export default Image;
