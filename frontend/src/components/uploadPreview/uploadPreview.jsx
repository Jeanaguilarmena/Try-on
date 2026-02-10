import { Card, Box } from "@mui/material";
import React from "react";

function UploadPreview({ previewURL, onClose }) {
  return (
    <Card
      onClick={onClose}
      sx={{
        width: 220,
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(8px)",

        animation: "softAppear 0.55s cubic-bezier(.22,.61,.36,1)",
        willChange: "transform, opacity",

        boxShadow: `
          0 1px 2px rgba(0,0,0,0.08),
          0 8px 24px rgba(0,0,0,0.12)
        `,
        transition: "box-shadow 0.3s ease, transform 0.3s ease",

        "&:hover": {
          transform: "translateY(-4px) scale(1.01)",
          boxShadow: `
            0 4px 8px rgba(0,0,0,0.12),
            0 16px 40px rgba(0,0,0,0.18)
          `,
        },
      }}
    >
      <Box
        component="img"
        src={previewURL}
        alt="img preview"
        sx={{
          width: "100%",
          height: 220,
          objectFit: "cover",
          display: "block",
          transition: "transform 0.35s ease",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      />
    </Card>
  );
}

export default UploadPreview;
