import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Demos from "../../components/demos/demos";
import UploadCard from "../../components/uploadImages/uploads";
import UploadPreview from "../../components/uploadPreview/uploadPreview";
import UploadUserImage from "../../components/uploadUserImage/uploadUserImage";

function MainPage() {
  const [personImage, setPersonImage] = useState(null);
  const [garmentImage, setGarmentImage] = useState(null);

  const personPreviewURL = personImage
    ? URL.createObjectURL(personImage)
    : null;

  const garmentPreviewURL = garmentImage
    ? URL.createObjectURL(garmentImage)
    : null;

  function handleGeneratePreview() {
    if (!personImage || !garmentImage) {
      console.log("You need two images");
      return;
    }
    console.log("Generating preview with", personImage, garmentImage);
  }

  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight={600} mt={4}>
        Try-On
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        mt={1}
        sx={{ maxWidth: 520, mx: "auto" }}
      >
        Upload a full-body photo and a garment to preview how it might look on
        you.
      </Typography>

      <Typography
        sx={{
          mt: 6,
          fontSize: "0.95rem",
          fontWeight: 500,
          letterSpacing: "-0.01em",
          color: "text.secondary",
        }}
      >
        Upload your photo
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mt: 3,
        }}
      >
        {!personImage ? (
          <UploadUserImage
            title="Add a photo of yours"
            onUpload={(file) => setPersonImage(file)}
          />
        ) : (
          <UploadPreview
            previewURL={personPreviewURL}
            onClose={() => setPersonImage(null)}
          />
        )}

        {!garmentImage ? (
          <UploadCard
            title="Add your garment image"
            onUpload={(file) => setGarmentImage(file)}
          />
        ) : (
          <UploadPreview
            previewURL={garmentPreviewURL}
            onClose={() => setGarmentImage(null)}
          />
        )}
      </Box>

      {/* Generate button */}
      <Box mt={6}>
        <Button
          variant="contained"
          onClick={handleGeneratePreview}
          sx={{
            px: "2rem",
            py: "0.75rem",
            borderRadius: "999px",
            backgroundColor: "#111827",
            fontSize: "1rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#1f2937",
            },
          }}
        >
          Generate preview
        </Button>
      </Box>

      {/* Demos */}
      <Box
        sx={{
          mt: 6,
          maxWidth: 800,
          mx: "auto",
          px: 2,
        }}
      >
        <Demos />
      </Box>
    </Box>
  );
}

export default MainPage;
