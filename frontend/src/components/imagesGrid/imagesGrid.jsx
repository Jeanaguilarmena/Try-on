import { Card, Box } from "@mui/material";
import React, { useState } from "react";
import image1 from "../../../assets/garment2.png";
import image2 from "../../../assets/Demo.jpeg";
import image3 from "../../../assets/generatedImage.png";
import ImageDetailModal from "../imageDetailModal/imageDetailModal";
import MediaTabs from "../mediaTabs/mediaTabs";
import MediaGrid from "../mediaGrid/mediaGrid";

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
          borderRadius: 4,
          p: 3,
          background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        }}
      >
        <MediaTabs active={activeTab} onChange={setActiveTab} />
        <MediaGrid
          posts={images}
          onSelectPost={setSelectedImage}
          type={activeTab}
        />
        {selectedImage && (
          //This image DetailModal should be different for generated images and saved images
          //Generated images have details
          //Saved images only have the image
          <ImageDetailModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            brand={imageInfo.Brand}
            link={imageInfo.Link}
            date={imageInfo.Date}
            description={imageInfo.Description}
          />
        )}
      </Card>
    </Box>
  );
}

export default ImagesGrid;
