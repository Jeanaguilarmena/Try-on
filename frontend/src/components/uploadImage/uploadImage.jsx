import { Box, Card, Typography, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function UploadImage({ onUpload, generatedImage }) {
  const [url, setUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  function handleChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setUrl(URL.createObjectURL(file));
    e.target.value = "";
  }

  function handleUpload(e) {
    if (!selectedFile) return;
    onUpload?.(selectedFile);
    e.target.value = "";
    setSelectedFile(null);
    setUrl(null);
  }

  function handleCancel(e) {
    setSelectedFile(null);
    setUrl(null);
  }

  const primaryButtonSX = (theme) => ({
    px: 3.5,
    py: 1.1,
    minHeight: 38,
    borderRadius: 999,
    textTransform: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: theme.palette.common.white,

    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(180deg, #2c2c2e 0%, #111 100%)"
        : "linear-gradient(180deg, #1c1c1e 0%, #000 100%)",

    boxShadow:
      theme.palette.mode === "dark"
        ? "0 8px 24px rgba(0,0,0,0.8)"
        : "0 6px 16px rgba(0,0,0,0.35)",

    transition: "all 0.25s cubic-bezier(.2,.8,.2,1)",

    "&:hover": {
      transform: "translateY(-1px)",
    },
  });

  const secondaryButtonSX = (theme) => ({
    px: 3,
    py: 1.1,
    minHeight: 38,
    borderRadius: 999,
    textTransform: "none",
    fontSize: "0.9rem",
    fontWeight: 500,

    color: theme.palette.text.secondary,

    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.06)"
        : "rgba(0,0,0,0.03)",

    transition: "all 0.25s cubic-bezier(.2,.8,.2,1)",

    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.12)"
          : "rgba(0,0,0,0.06)",
    },
  });

  return (
    <Card
      component={!selectedFile ? "label" : "div"}
      sx={(theme) => ({
        width: 420,
        borderRadius: 4,
        p: 3,
        cursor: "pointer",
        overflow: "hidden",

        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, rgba(28,28,30,0.85) 0%, rgba(18,18,18,0.85) 100%)"
            : "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(245,245,247,0.9) 100%)",

        backdropFilter: "blur(20px) saturate(180%)",

        boxShadow:
          theme.palette.mode === "dark"
            ? `
              0 20px 40px rgba(0,0,0,0.6),
              inset 0 1px 0 rgba(255,255,255,0.05)
            `
            : `
              0 20px 40px rgba(0,0,0,0.08),
              inset 0 1px 0 rgba(255,255,255,0.6)
            `,

        transition: "all 0.35s cubic-bezier(.2,.8,.2,1)",

        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? `0 30px 70px rgba(0,0,0,0.8)`
              : `0 30px 70px rgba(0,0,0,0.14)`,
        },
      })}
    >
      <input hidden type="file" accept="image/*" onChange={handleChange} />

      {!selectedFile ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={(theme) => ({
              width: 44,
              height: 44,
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(180deg, #2c2c2e 0%, #111 100%)"
                  : "linear-gradient(180deg, #1c1c1e 0%, #000 100%)",

              color: theme.palette.common.white,

              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 8px 22px rgba(0,0,0,0.7)"
                  : "0 6px 18px rgba(0,0,0,0.35)",
            })}
          >
            <AddIcon fontSize="small" />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              Add a photo
            </Typography>
            <Typography
              sx={{ fontSize: "0.85rem", color: "text.secondary", mt: 0.3 }}
            >
              Upload and save another image of yourself
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              p: 3,
            }}
          >
            <Box
              component="img"
              src={url}
              alt="Preview"
              sx={{
                width: "100%",
                maxHeight: 500,
                objectFit: "cover",
                borderRadius: "20px",
                display: "block",
                animation: "fadeIn 0.35s ease",
                boxShadow: (theme) =>
                  theme.palette.mode === "dark"
                    ? "0 20px 50px rgba(0,0,0,0.8)"
                    : "0 10px 30px rgba(0,0,0,0.12)",
              }}
            />
          </Box>

          <Box
            sx={(theme) => ({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 3,
              py: 2.5,

              borderTop: 1,
              borderColor: "divider",

              background:
                theme.palette.mode === "dark"
                  ? "rgba(18,18,18,0.85)"
                  : "rgba(255,255,255,0.85)",

              backdropFilter: "blur(12px)",
            })}
          >
            <Button onClick={handleCancel} sx={secondaryButtonSX}>
              Cancel
            </Button>
            <Button onClick={handleUpload} sx={primaryButtonSX}>
              Save
            </Button>
          </Box>
        </Box>
      )}
    </Card>
  );
}

export default UploadImage;
