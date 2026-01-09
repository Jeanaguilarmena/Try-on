import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import uploadIcon from "../../../assets/upload_icon.jpg";
import FileUploadIcon from "@mui/icons-material/FileUpload";

function Uploads() {
  const [media, setMedia] = useState([]);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3, // espacio entre cards
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 380,
          height: 350,
          borderRadius: 3,
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        }}
      >
        <CardContent>
          <Typography>Add a photo of yours</Typography>
          <Button
            component="label"
            sx={{
              fontSize: 12,
              textTransform: "none",
              color: "text.secondary",
            }}
          >
            <Box
              component="img"
              src={uploadIcon}
              alt="Example"
              sx={{
                width: "80%",
                height: "auto",
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;

                setMedia({
                  src: URL.createObjectURL(file),
                  file,
                });
              }}
            />
          </Button>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: 380,
          height: 350,
          borderRadius: 3,
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        }}
      >
        <CardContent>
          <Typography>Add your garment image</Typography>
          <Button
            component="label"
            sx={{
              fontSize: 12,
              textTransform: "none",
              color: "text-secondary",
            }}
          >
            <Box
              component="img"
              src={uploadIcon}
              alt="Example"
              sx={{
                width: "80%",
                height: "auto",
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
            <input hidden type="file" accept="image/*"></input>
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Uploads;
