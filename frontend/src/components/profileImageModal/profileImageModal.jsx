import React from "react";
import { Dialog, Box, Fade } from "@mui/material";

function ProfileImageModal({ image, onClose }) {
  return (
    <Dialog
      open={Boolean(image)}
      onClose={onClose}
      TransitionComponent={Fade}
      transitionDuration={250}
      PaperProps={{
        sx: {
          background: "transparent",
          boxShadow: "none",
          overflow: "visible",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(8px)",
        },
      }}
    >
      <Box
        onClick={onClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          component="img"
          src={image}
          alt="Profile preview"
          onClick={(e) => e.stopPropagation()}
          sx={{
            width: 280,
            height: 280,
            borderRadius: "50%",
            objectFit: "cover",
            backgroundColor: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(20px) saturate(180%)",
            boxShadow:
              "0 20px 60px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.4)",
            animation: "profileZoom 0.25s ease-out",
          }}
        />
      </Box>

      <style>
        {`
          @keyframes profileZoom {
            from {
              opacity: 0;
              transform: scale(0.96);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </Dialog>
  );
}

export default ProfileImageModal;
