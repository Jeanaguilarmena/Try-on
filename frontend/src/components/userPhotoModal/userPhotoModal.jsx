import { Dialog, Box, Fade } from "@mui/material";

function UserPhotoModal({ image, onClose }) {
  return (
    <Dialog
      open={Boolean(image)}
      onClose={onClose}
      TransitionComponent={Fade}
      transitionDuration={520}
      maxWidth="md"
      PaperProps={{
        sx: {
          background: "transparent",
          boxShadow: "none",
          overflow: "visible",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(14px) saturate(180%)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 3,
          py: 4,
        }}
      >
        <Box
          component="img"
          src={image}
          alt="User photo preview"
          sx={{
            maxHeight: "80vh",
            maxWidth: "100%",
            objectFit: "contain",

            borderRadius: "18px",

            boxShadow: "0 60px 160px rgba(0,0,0,0.55)",

            animation: "modalImageAppear 0.75s cubic-bezier(.16,1,.3,1)",
          }}
        />
      </Box>
    </Dialog>
  );
}

export default UserPhotoModal;
