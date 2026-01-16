import React from "react";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import image from "../../../assets/generatedImage.png";
import ImagesGrid from "../imagesGrid/imagesGrid";

function Profile() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 4,
        px: 3,
      }}
    >
      <Card
        sx={{
          marginLeft: 3,
          width: 420,
          borderRadius: 4,
          p: 3,
          background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <Avatar
            src={image}
            alt="Profile photo"
            sx={{
              width: 72,
              height: 72,
              borderRadius: 3,
              "&hover": {
                background: "linear-gradient(180deg, #2c2c2e 0%, #111 100%)",
                boxShadow:
                  "0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                transform: "translateY(-2px)",
              },
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#111",
                lineHeight: 1.2,
              }}
            >
              Jean Aguilar
            </Typography>

            <Typography
              sx={{
                fontSize: "0.9rem",
                color: "#6e6e73",
                mt: 0.5,
              }}
            >
              Software Developer
            </Typography>
          </Box>
        </Box>
        {/* Divider */}
        <Box
          sx={{
            height: 1,
            backgroundColor: "#e5e5ea",
            mb: 2,
          }}
        />
        <Button
          sx={{
            px: 3,
            py: 1,
            minHeight: 36,
            borderRadius: 999,
            textTransform: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            color: "#fff",
            background: "linear-gradient(180deg, #1c1c1e 0%, #000 100%)",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
            transition: "all 0.2s ease",
            "&:hover": {
              background: "linear-gradient(180deg, #2c2c2e 0%, #111 100%)",
              boxShadow:
                "0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
              transform: "translateY(-1px)",
            },
            "&:active": {
              transform: "translateY(0)",
              boxShadow:
                "0 3px 8px rgba(0,0,0,0.3), inset 0 2px 4px rgba(0,0,0,0.4)",
            },
          }}
        >
          Edit
        </Button>
      </Card>
      <ImagesGrid />
    </Box>
  );
}

export default Profile;
