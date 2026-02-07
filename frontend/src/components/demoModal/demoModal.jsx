import React from "react";
import { Dialog, Box, Fade } from "@mui/material";

function DemoModal({ image, onClose }) {
  return (
    <Dialog
      open={Boolean(image)}
      onClose={onClose}
      TransitionComponent={Fade}
      transitionDuration={300}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        sx: {
          background: "transparent",
          boxShadow: "none",
          overflow: "visible",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <Box
        onClick={onClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 2, md: 4 },
          height: "100%",
        }}
      >
        <Box
          component="img"
          src={image}
          onClick={(e) => e.stopPropagation()}
          sx={{
            maxHeight: "85vh",
            maxWidth: "90vw",
            borderRadius: "20px",
            backgroundColor: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(24px) saturate(180%)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          }}
        />
      </Box>
    </Dialog>
  );
}

export default DemoModal;
