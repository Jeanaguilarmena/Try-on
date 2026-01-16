import { Box, Card, Typography } from "@mui/material";
import React from "react";

function Image({ image, alt }) {
  return (
    <Card>
      <Box
        component="img"
        src={image}
        alt={alt}
        sx={{ width: "100%", height: 240, objectFit: "cover", borderRadius: 3 }}
      />
    </Card>
  );
}

export default Image;
