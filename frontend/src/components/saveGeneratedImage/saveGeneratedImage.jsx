import { Box, Button, Card, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomInput from "../customInput/customInput";
import { useAuth } from "../../context/authContext";

function SaveGeneratedImage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { image } = location.state || {};
  const { user } = useAuth();

  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  async function handleSave() {
    const token = await user.getIdToken();

    const res = await fetch("http://localhost:3000/api/tryon/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        imageUrl: image,
        brand,
        description,
        link,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to save try-on image");
    }

    const data = await res.json();
    console.log("Saved try-on image:", data);
    navigate("..");
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #f5f5f7 0%, #ffffff 60%)",
        p: 4,
      }}
    >
      <Card
        sx={{
          display: "flex",
          gap: 4,
          p: 4,
          borderRadius: 6,
          maxWidth: 1000,
          width: "100%",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={image}
            alt="Generated Try-On"
            sx={{
              width: "100%",
              maxHeight: 420,
              objectFit: "cover",
              borderRadius: 4,
              boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Save Generated Image
            </Typography>
            <Typography
              sx={{
                color: "#6e6e73",
                fontSize: "0.9rem",
                mt: 0.5,
              }}
            >
              Add details to keep your try-on organized
            </Typography>
          </Box>

          <Divider />

          <CustomInput
            label="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="e.g. Nike"
          />

          <CustomInput
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description"
          />

          <CustomInput
            label="Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://example.com"
          />

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              onClick={handleSave}
              sx={{
                flex: 1,
                height: 44,
                borderRadius: 999,
                textTransform: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
                color: "#fff",
                background: "linear-gradient(180deg, #1c1c1e 0%, #000 100%)",
                boxShadow:
                  "0 6px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
                transition: "all 0.2s ease",
                "&:hover": {
                  transform: "translateY(-1px)",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
                },
                "&:active": {
                  transform: "translateY(0)",
                },
              }}
            >
              Save Image
            </Button>

            <Button
              variant="text"
              onClick={() => navigate("..")}
              sx={{
                color: "#6e6e73",
                textTransform: "none",
                fontSize: "0.9rem",
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default SaveGeneratedImage;
