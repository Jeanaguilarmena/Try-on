import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Demos from "../../components/demos/demos";
import UploadCard from "../../components/uploads/uploads";
import UploadPreview from "../../components/uploadPreview/uploadPreview";
import UploadUserImage from "../../components/uploadUserImage/uploadUserImage";
import { useAuth } from "../../context/authContext";
import ImagePreviewModal from "../../components/imagePreviewModal/imagePreviewModal";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [personImage, setPersonImage] = useState(null);
  const [garmentImage, setGarmentImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shownModal, setShownModal] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const personPreviewURL = personImage
    ? URL.createObjectURL(personImage)
    : null;

  const garmentPreviewURL = garmentImage
    ? URL.createObjectURL(garmentImage)
    : null;

  async function handleGeneratePreview() {
    if (!personImage || !garmentImage) return;

    setLoading(true);

    const token = await user.getIdToken();
    const formData = new FormData();
    formData.append("personImage", personImage);
    formData.append("garmentImage", garmentImage);

    const res = await fetch("http://localhost:3000/api/tryon/generate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) {
      setLoading(false);
      throw new Error("Failed to generate try-on preview");
    }
    const data = await res.json();
    setGeneratedImage(data.image);
    setLoading(false);
  }

  function handleGeneratedImageClick() {
    setShownModal(true);
  }

  function handleDeleteImages() {
    setPersonImage(null);
    setGarmentImage(null);
    setGeneratedImage(null);
    setShownModal(false);
  }

  function handleSaveGeneratedImage() {
    // Here I should implement the logic to save the generated image to the user's profile
    // For now, I will just log a message
    console.log("Saving generated image to profile...");
    navigate("save", { state: { image: generatedImage } });
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

      <Box mt={6}>
        <Button
          variant="contained"
          disabled={!personImage || !garmentImage}
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
            "&.Mui-disabled": {
              backgroundColor: "#111827",
              color: "#fff",
              opacity: 0.28,
              filter: "saturate(0.8)",
            },
          }}
        >
          Generate preview
        </Button>
        {loading && (
          <Box
            mt={8}
            sx={{
              width: 440,
              height: 580,
              mx: "auto",
              borderRadius: "28px",
              background:
                "linear-gradient(110deg, #f3f4f6 8%, #e5e7eb 18%, #f3f4f6 33%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.4s ease infinite",
            }}
          />
        )}

        {generatedImage && !loading && (
          <>
            <Typography
              sx={{
                mt: 6,
                mb: -4,
                textAlign: "center",
                fontSize: "0.9rem",
                color: "text.secondary",
              }}
            >
              Preview generated
            </Typography>

            <Box
              onClick={handleGeneratedImageClick}
              mt={6}
              sx={{
                maxWidth: 440,
                cursor: "pointer",
                mx: "auto",
                borderRadius: "28px",
                overflow: "hidden",
                backgroundColor: "#fff",
                position: "relative",
                boxShadow: `
          0 40px 80px rgba(0,0,0,0.18),
          0 10px 20px rgba(0,0,0,0.08)
        `,
                animation: "resultAppear 0.6s cubic-bezier(.2,.8,.2,1)",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "28px",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
                  pointerEvents: "none",
                },
              }}
            >
              <img
                src={generatedImage}
                alt="Generated try-on"
                style={{
                  width: "100%",
                  display: "block",
                }}
              />
            </Box>
          </>
        )}
      </Box>

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
      {shownModal && (
        <ImagePreviewModal
          image={generatedImage}
          onClose={() => setShownModal(false)}
          onDelete={handleDeleteImages}
          onSave={handleSaveGeneratedImage}
        />
      )}
    </Box>
  );
}

export default MainPage;
