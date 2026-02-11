import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
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
    setUploadedImage(URL.createObjectURL(image));

    const token = await user.getIdToken();

    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("http://localhost:3000/api/tryon/save", {
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
          sx={{
            mt: 4,
            width: 420,
            borderRadius: 4,
            p: 3,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(245,245,247,0.9) 100%)",
            backdropFilter: "blur(20px) saturate(180%)",
            boxShadow: `
          0 20px 40px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.6)
        `,
            transition: "all 0.35s cubic-bezier(.2,.8,.2,1)",

            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: `
            0 30px 70px rgba(0,0,0,0.14),
            inset 0 1px 0 rgba(255,255,255,0.7)
          `,
            },

            "&:active": {
              transform: "translateY(0)",
            },
          }}
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
                  color: "#111",
                  lineHeight: 1.2,
                }}
              >
                {userProfile.name}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "#6e6e73",
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
              backgroundColor: "#e5e5ea",
              mb: 2,
            }}
          />
          <Button
            onClick={handleEditProfile}
            sx={{
              px: 3,
              py: 1,
              minHeight: 36,
              borderRadius: 999,
              textTransform: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#fff",
              background: "linear-gradient(180deg, #1c1c1e 0%, #000 100%)",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
              transition: "all 0.2s ease",
              "&:hover": {
                background: "linear-gradient(180deg, #2c2c2e 0%, #111 100%)",
                boxShadow:
                  "0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                transform: "translateY(-1px)",
              },
              "&:active": {
                transform: "translateY(0)",
                boxShadow:
                  "0 3px 8px rgba(0,0,0,0.3), inset 0 2px 4px rgba(0,0,0,0.4)",
              },
            }}
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
