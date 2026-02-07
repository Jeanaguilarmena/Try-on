import { Dialog, Box, Fade } from "@mui/material";
import ImagePreview from "../modalImagePrev/modalImagePrev";
import ImageMeta from "../modalImageMeta/ModalImageMeta";

function ImageDetailModal({ image, onClose, brand, link, date, description }) {
  return (
    <Dialog
      open={Boolean(image)}
      onClose={onClose}
      TransitionComponent={Fade}
      transitionDuration={300}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 5,
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(30px) saturate(180%)",
          boxShadow: "0 50px 120px rgba(0,0,0,0.35)",
          overflow: "hidden",
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
        sx={{
          display: "flex",
          height: "70vh",
          minHeight: 420,
        }}
      >
        <ImagePreview image={image} />

        <Box
          sx={{
            width: "1px",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.05), transparent)",
          }}
        />

        <ImageMeta
          brand={brand}
          date={date}
          description={description}
          link={link}
        />
      </Box>
    </Dialog>
  );
}

export default ImageDetailModal;
