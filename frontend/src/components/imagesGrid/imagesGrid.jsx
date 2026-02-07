import { Card, Box } from "@mui/material";
import React, { useState } from "react";
import image1 from "../../../assets/garment2.png";
import image2 from "../../../assets/Demo.jpeg";
import image3 from "../../../assets/generatedImage.png";
import Image from "../image/image";
import DemoModal from "../demoModal/demoModal";
import ImageDetailModal from "../imageDetailModal/imageDetailModal";

function ImagesGrid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { image: image1, alt: "image1", id: 1 },
    { image: image2, alt: "image2", id: 2 },
    { image: image3, alt: "image3", id: 3 },
  ];

  // For now, using static info for the image
  const imageInfo = {
    Brand: "Adidas",
    Type: "T-Shirt",
    Link: "https://www.adidas.com/us/ultraboost-22-shoes/FX6935.html",
    Price: "$180",
    Description: "Its a beautiful t-shirt that is perfect for any occasion.",
    Date: "2026-02-07",
  };

  function handleSelect(image) {
    setSelectedImage(image.image);
  }

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          {images.map((image) => (
            <Image
              key={image.id}
              image={image.image}
              alt={image.alt}
              onClick={() => handleSelect(image)}
            />
          ))}
        </Box>
        {selectedImage && (
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
