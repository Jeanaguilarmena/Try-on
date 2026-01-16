import { Card, Typography, Box } from "@mui/material";
import React from "react";
import image1 from "../../../assets/garment2.png";
import image2 from "../../../assets/model2.png";
import image3 from "../../../assets/generatedImage.png";
import Image from "../image/image";

function ImagesGrid() {
  const images = [
    { image: image1, alt: "image1", id: 1 },
    { image: image2, alt: "image2", id: 2 },
    { image: image3, alt: "image3", id: 3 },
  ];

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
            <Image key={image.id} image={image.image} alt={image.alt} />
          ))}
        </Box>
      </Card>
    </Box>
  );
}

export default ImagesGrid;
