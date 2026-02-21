import { Box, Modal, Typography, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React from "react";

function LoadSavedImageModal({ open, images = [], onClose, onSelect }) {
  async function handleSelectImage(imageUrl) {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const file = new File([blob], "selected-image.jpg", { type: blob.type });

      onSelect(file);
      onClose();
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: 1000,
          maxHeight: "85vh",
          overflowY: "auto",
          borderRadius: "28px",
          p: 5,
          position: "relative",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(245,245,247,0.75))",
          backdropFilter: "blur(40px) saturate(180%)",
          boxShadow: `
            0 40px 80px rgba(0,0,0,0.25),
            inset 0 1px 0 rgba(255,255,255,0.6)
          `,
          animation: "fadeInScale 0.4s cubic-bezier(.2,.8,.2,1)",
          "@keyframes fadeInScale": {
            from: {
              opacity: 0,
              transform: "scale(0.96) translateY(10px)",
            },
            to: {
              opacity: 1,
              transform: "scale(1) translateY(0)",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              letterSpacing: "-0.5px",
              color: "#111",
            }}
          >
            Select an Image
          </Typography>

          <IconButton
            onClick={onClose}
            sx={{
              borderRadius: "50%",
              background: "rgba(0,0,0,0.04)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(0,0,0,0.08)",
                transform: "rotate(90deg)",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 4,
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              onClick={() => handleSelectImage(img.imageUrl)}
              sx={{
                cursor: "pointer",
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                transition: "all 0.4s cubic-bezier(.2,.8,.2,1)",
                transform: "translateY(0)",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.03)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Box
                component="img"
                src={img.imageUrl || img.image}
                alt="saved"
                sx={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  display: "block",
                  transition: "all 0.6s ease",
                  filter: "brightness(0.97)",
                  "&:hover": {
                    filter: "brightness(1.05)",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
}

export default LoadSavedImageModal;
