import { Box, Button, Container, Typography, Card, Modal } from "@mui/material";
import React, { useState } from "react";
import image1 from "../../../assets/model2.png";
import image2 from "../../../assets/garment2.png";
import image3 from "../../../assets/result2.png";
import DemoModal from "../demoModal/demoModal";

function Demos() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [shownModal, setShownModal] = useState(false);

  function handleShowDemos(img) {
    setSelectedImage(img);
  }

  const images = [image1, image2, image3];
  return (
    <Card
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        borderBottom: "1px solid #e5e5e5",
        borderRadius: 4,
      }}
    >
      <Box>
        <Container>
          <Box
            sx={{
              height: 52,
              alignItems: "center",
              px: 4,
            }}
          >
            <Typography
              textAlign="center"
              sx={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                color: "text.secondary",
              }}
            >
              Try-on examples in pairs of person and garment images
            </Typography>
          </Box>
        </Container>
        {images.map((img, index) => (
          <Box
            onClick={() => handleShowDemos(img)}
            key={index}
            component="img"
            src={img}
            alt={`Demo ${index + 1}`}
            sx={{
              height: 100,
              width: "auto",
              marginLeft: 2,
              borderRadius: 4,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              border: "1px solid rgba(0,0,0,0.08)",
              justifyContent: "space-between",
              transition: "all 0.25s ease",

              "&:hover": {
                boxShadow: "0 20px 50px rgba(0,0,0,0.16)",
                transform: "translateY(-2px)",
              },
            }}
          />
        ))}
      </Box>
      {selectedImage && (
        <DemoModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </Card>
  );
}

export default Demos;
