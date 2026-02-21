import { Card, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import ImageDetailModal from "../imageDetailModal/imageDetailModal";
import MediaTabs from "../mediaTabs/mediaTabs";
import MediaGrid from "../mediaGrid/mediaGrid";
import UserPhotoModal from "../userPhotoModal/userPhotoModal";
import { useAuth } from "../../context/authContext";

function ImagesGrid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("generated");
  const [savedImages, setsavedImages] = useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);
  const { user } = useAuth();

  const images = activeTab === "generated" ? generatedImages : savedImages;

  useEffect(() => {
    async function fetchUserImages() {
      try {
        const token = await user.getIdToken();

        const [resGenerated, resSaved] = await Promise.all([
          fetch("http://localhost:3000/api/tryon/generatedImages", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("http://localhost:3000/api/tryon/savedImages", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!resGenerated.ok || !resSaved.ok) {
          throw new Error("Failed to fetch images");
        }

        const generated = await resGenerated.json();
        const saved = await resSaved.json();

        setGeneratedImages(generated);
        setsavedImages(saved);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchUserImages();
  }, []);

  // For now, using static info for the image
  const imageInfo = {
    Brand: "Adidas",
    Type: "T-Shirt",
    Link: "https://www.adidas.com/us/3-stripes-tee/KE3537.html",
    Price: "$180",
    Description: "Its a beautiful t-shirt that is perfect for any occasion.",
    Date: "2026-02-07",
  };

  return (
    <Box
      sx={{
        flex: 1,
        minWidth: 0,
      }}
    >
      <Card
        sx={{
          mt: 4,
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
        <MediaTabs active={activeTab} onChange={setActiveTab} />
        <MediaGrid posts={images} onSelectPost={setSelectedImage} />
        {selectedImage && activeTab === "generated" && (
          <ImageDetailModal
            image={selectedImage.imageUrl}
            onClose={() => setSelectedImage(null)}
            brand={selectedImage.brand}
            link={selectedImage.link}
            date={imageInfo.Date}
            description={selectedImage.description}
          />
        )}
        {selectedImage && activeTab === "saved" && (
          <UserPhotoModal
            image={selectedImage.imageUrl}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </Card>
    </Box>
  );
}

export default ImagesGrid;
