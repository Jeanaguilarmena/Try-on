import { Modal, Box, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ImagePreviewModal({ image, onClose, onDelete, onSave }) {
  const primaryButtonSX = {
    px: 3.5,
    py: 1.1,
    minHeight: 38,
    borderRadius: 999,
    textTransform: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#fff",
    background: "linear-gradient(180deg, #1c1c1e 0%, #000 100%)",
    boxShadow:
      "0 6px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
    transition: "all 0.25s cubic-bezier(.2,.8,.2,1)",
    "&:hover": {
      background: "linear-gradient(180deg, #2c2c2e 0%, #111 100%)",
      boxShadow:
        "0 10px 26px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.18)",
      transform: "translateY(-1px)",
    },
    "&:active": {
      transform: "translateY(0)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.4), inset 0 2px 4px rgba(0,0,0,0.5)",
    },
  };

  const secondaryButtonSX = {
    px: 3,
    py: 1.1,
    minHeight: 38,
    borderRadius: 999,
    textTransform: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#6b7280",
    backgroundColor: "rgba(0,0,0,0.03)",
    transition: "all 0.25s cubic-bezier(.2,.8,.2,1)",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.06)",
      color: "#374151",
    },
    "&:active": {
      backgroundColor: "rgba(0,0,0,0.1)",
    },
  };

  return (
    <Modal open={Boolean(image)} onClose={onClose}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(18px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "modalFadeIn 0.45s ease",
        }}
      >
        <Box
          sx={{
            width: 420,
            borderRadius: "32px",
            overflow: "hidden",
            backgroundColor: "rgba(255,255,255,0.97)",
            boxShadow: "0 50px 100px rgba(0,0,0,0.35)",
            animation: "modalScaleIn 0.6s cubic-bezier(.22,.61,.36,1)",
            position: "relative",
          }}
        >
          {/* Close */}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 14,
              right: 14,
              zIndex: 2,
              backgroundColor: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          {/* Image */}
          <img
            src={image}
            alt="Generated preview"
            style={{ width: "100%", display: "block" }}
          />

          {/* Actions */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 4,
              py: 3,
              borderTop: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <Button onClick={onDelete} sx={secondaryButtonSX}>
              Delete
            </Button>

            <Button onClick={onSave} sx={primaryButtonSX}>
              Save image
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default ImagePreviewModal;
