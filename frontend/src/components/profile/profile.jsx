import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import image from "../../../assets/generatedImage.png";
import ImagesGrid from "../imagesGrid/imagesGrid";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "../../api/user.api";
import ProfileImageModal from "../profileImageModal/profileImageModal";
import UploadImage from "../uploadImage/uploadImage";

function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleEditProfile() {
    navigate("edit");
  }

  const {
    data: userProfile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userProfile", user?.uid],
    queryFn: () => fetchUserProfile(user),
    enabled: !!user,
  });

  function handleClick(image) {
    setSelectedImage(image);
  }

  async function handleUpload(image) {
    setUploadedImage(image);
    const token = await user.getIdToken();

    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("http://localhost:3000/api/tryon/savedImages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await res.json();
    console.log("Image uploaded successfully:", data);
  }

  if (isLoading) {
    return <Box sx={{ p: 4 }}>👤 Loading profile...</Box>;
  }

  if (isError) {
    return <Box sx={{ p: 4, color: "red" }}>Error loading profile</Box>;
  }

  if (!userProfile) {
    return <Box sx={{ p: 4 }}>👤 Loading profile...</Box>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        // gap: 4,
        // px: 3,
        gap: 5,
        px: { xs: 2, md: 6 },
      }}
    >
      <Box
        sx={{
          width: 420,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Card
          sx={(theme) => ({
            mt: 4,
            width: 420,
            borderRadius: 4,
            p: 3,

            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(180deg, rgba(28,28,30,0.85) 0%, rgba(18,18,18,0.85) 100%)"
                : "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(245,245,247,0.9) 100%)",

            backdropFilter: "blur(20px) saturate(180%)",

            boxShadow:
              theme.palette.mode === "dark"
                ? `
          0 20px 40px rgba(0,0,0,0.6),
          inset 0 1px 0 rgba(255,255,255,0.05)
        `
                : `
          0 20px 40px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.6)
        `,

            transition: "all 0.35s cubic-bezier(.2,.8,.2,1)",

            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow:
                theme.palette.mode === "dark"
                  ? `
            0 30px 70px rgba(0,0,0,0.8),
            inset 0 1px 0 rgba(255,255,255,0.08)
          `
                  : `
            0 30px 70px rgba(0,0,0,0.14),
            inset 0 1px 0 rgba(255,255,255,0.7)
          `,
            },

            "&:active": {
              transform: "translateY(0)",
            },
          })}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 3,
            }}
          >
            <Avatar
              onClick={() => handleClick(image)}
              src={image}
              alt="Profile photo"
              sx={{
                width: 72,
                height: 72,
                borderRadius: 3,
                cursor: "pointer",
                "&hover": {
                  background: "linear-gradient(180deg, #2c2c2e 0%, #111 100%)",
                  boxShadow:
                    "0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                  transform: "translateY(-2px)",
                },
              }}
            />

            <Box>
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "text.primary",
                  lineHeight: 1.2,
                }}
              >
                {userProfile.name}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "text.secondary",
                  mt: 0.5,
                }}
              >
                {userProfile.description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: 1,
              bgcolor: "divider",
              mb: 2,
            }}
          />
          <Button
            onClick={handleEditProfile}
            sx={(theme) => ({
              px: 3,
              py: 1,
              minHeight: 36,
              borderRadius: 999,
              textTransform: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#fff",

              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(180deg, #2c2c2e 0%, #111 100%)"
                  : "linear-gradient(180deg, #1c1c1e 0%, #000 100%)",

              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 6px 18px rgba(0,0,0,0.7)"
                  : "0 4px 12px rgba(0,0,0,0.25)",

              transition: "all 0.2s ease",

              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 8px 24px rgba(0,0,0,0.9)"
                    : "0 6px 18px rgba(0,0,0,0.35)",
              },

              "&:active": {
                transform: "translateY(0)",
              },
            })}
          >
            Edit
          </Button>
          {selectedImage && (
            <ProfileImageModal
              image={selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </Card>
        <UploadImage onUpload={handleUpload} generatedImage={uploadedImage} />
      </Box>
      <ImagesGrid />
    </Box>
  );
}

export default Profile;
