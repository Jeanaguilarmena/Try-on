import { Box, Card, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

function UploadImage({ onUpload }) {
  function handleChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    onUpload?.(file);
    e.target.value = "";
  }

  return (
    <Card
      component="label"
      sx={{
        width: 420,
        borderRadius: 4,
        p: 3,
        cursor: "pointer",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(245,245,247,0.9) 100%)",
        backdropFilter: "blur(20px) saturate(180%)",
        boxShadow: `
          0 20px 40px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.6)
        `,
        transition: "all 0.35s cubic-bezier(.2,.8,.2,1)",

        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: `
            0 30px 70px rgba(0,0,0,0.14),
            inset 0 1px 0 rgba(255,255,255,0.7)
          `,
        },

        "&:active": {
          transform: "translateY(0)",
        },
      }}
    >
      <input hidden type="file" accept="image/*" onChange={handleChange} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(180deg, #1c1c1e 0%, #000 100%)",
            color: "#fff",
            boxShadow:
              "0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          <AddIcon fontSize="small" />
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#111",
              lineHeight: 1.2,
            }}
          >
            Add a photo
          </Typography>

          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "#6e6e73",
              mt: 0.3,
            }}
          >
            Upload another image of yourself
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default UploadImage;
