import { Box } from "@mui/material";

function ImagePreview({ image }) {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Box
        component="img"
        src={image}
        alt="Preview"
        sx={{
          maxWidth: "100%",
          maxHeight: "70vh",
          borderRadius: 4,
          backgroundColor: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(30px) saturate(180%)",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.4)",
          transition: "transform .35s ease",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      />
    </Box>
  );
}

export default ImagePreview;
