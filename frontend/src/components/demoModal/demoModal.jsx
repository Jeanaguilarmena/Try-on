import { Dialog, Box, Fade } from "@mui/material";
import React from "react";

function DemoModal({ image, onClose }) {
  return (
    <Dialog
      open={Boolean(image)}
      onClose={onClose}
      TransitionComponent={Fade}
      transitionDuration={250}
      PaperProps={{
        sx: {
          borderRadius: 3,
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(24px) saturate(180%)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
          overflow: "hidden",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(6px)",
        },
      }}
    >
      {/* Marco fino */}
      <Box sx={{ p: 1 }}>
        <Box
          component="img"
          src={image}
          sx={{
            width: "100%",
            maxWidth: 540,
            display: "block",
            borderRadius: 2,
            boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
          }}
        />
      </Box>
    </Dialog>
  );
}

export default DemoModal;
