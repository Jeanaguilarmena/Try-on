import React from "react";
import HeaderPage from "../header/headerPage";
import Demos from "../../components/demos/demos";
import { Button, Typography, Box } from "@mui/material";
import Uploads from "../../components/uploadImages/uploads";

function MainPage() {
  function handleGeneratePreview() {
    console.log("Generating preview");
  }
  return (
    <main className="app">
      <h1>Try-On</h1>
      <p className="subtitle">
        Upload a full-body photo and a garment to preview how it might look on
        you.
      </p>
      <div className="upload-section">
        <h2>Upload your photo</h2>
      </div>
      <Uploads />
      <Typography>-</Typography>
      <Button
        variant="contained"
        sx={{
          padding: "0.75rem 2rem",
          borderRadius: "999px",
          backgroundColor: "#111827",
          color: "white",
          fontSize: "1rem",
          textTransform: "none", // evita que MUI ponga el texto en mayúsculas
          "&:hover": {
            backgroundColor: "#1f2937", // un hover ligeramente más claro
          },
        }}
        onClick={handleGeneratePreview}
      >
        Generate preview
      </Button>
      <Box>
        <Typography>-</Typography>
      </Box>
      <Demos />
    </main>
  );
}

export default MainPage;
