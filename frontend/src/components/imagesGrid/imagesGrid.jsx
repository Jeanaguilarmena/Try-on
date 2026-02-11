import { Card, Box } from "@mui/material";
import React, { useState } from "react";
import image1 from "../../../assets/garment2.png";
import image2 from "../../../assets/Demo.jpeg";
import image3 from "../../../assets/generatedImage.png";
import ImageDetailModal from "../imageDetailModal/imageDetailModal";
import MediaTabs from "../mediaTabs/mediaTabs";
import MediaGrid from "../mediaGrid/mediaGrid";
import UserPhotoModal from "../userPhotoModal/userPhotoModal";

function ImagesGrid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("generated");
  const images = [
    { image: image1, alt: "image1", id: 1, type: "saved" },
    { image: image2, alt: "image2", id: 2, type: "saved" },
    { image: image3, alt: "image3", id: 3, type: "generated" },
  ];

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
        <MediaGrid
          posts={images}
          onSelectPost={setSelectedImage}
          type={activeTab}
        />
        {selectedImage && activeTab === "generated" && (
          <ImageDetailModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            brand={imageInfo.Brand}
            link={imageInfo.Link}
            date={imageInfo.Date}
            description={imageInfo.Description}
          />
        )}
        {selectedImage && activeTab === "saved" && (
          <UserPhotoModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </Card>
    </Box>
  );
}

export default ImagesGrid;
