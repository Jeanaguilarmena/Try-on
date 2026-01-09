import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import image1 from "../../../assets/model2.png";
import image2 from "../../../assets/garment2.png";
import image3 from "../../../assets/result2.png";
import { red } from "@mui/material/colors";

function Demos() {
  function handleShowDemos() {
    console.log("Demos shown");
  }

  const images = [image1, image2, image3];
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        backgroundColor: "#fff",
        borderBottom: "1px solid #e5e5e5",
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
              }}
            >
              Try-on examples in pairs of person and garment images
            </Typography>
          </Box>
        </Container>
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`Demo ${index + 1}`}
            sx={{
              height: 100,
              width: "auto",
              marginLeft: 2,
              borderRadius: 2,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Demos;
