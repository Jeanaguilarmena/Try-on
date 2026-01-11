import { Dialog, Box, Fade } from "@mui/material";
import React from "react";

function DemoModal({ image, onClose }) {
  return (
    <Dialog
      open={Boolean(image)}
      onClose={onClose}
      TransitionComponent={Fade}
      transitionDuration={300}
      PaperProps={{
        sx: {
          borderRadius: 4,
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
          overflow: "hidden",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(4px)",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box
          component="img"
          src={image}
          sx={{
            width: "100%",
            maxWidth: 520,
            borderRadius: 3,
            display: "block",
          }}
        />
      </Box>
    </Dialog>
  );
}

export default DemoModal;
