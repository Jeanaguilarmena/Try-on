import { Box, Card, Typography, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function UploadImage({ onUpload, generatedImage }) {
  function handleChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    onUpload?.(file);
    e.target.value = "";
  }

  const primaryButtonSX = {
    px: 3.5,
    py: 1.1,
    minHeight: 38,
    borderRadius: 999,
    textTransform: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#fff",
    background: "linear-gradient(180deg, #1c1c1e 0%, #000 100%)",
    boxShadow:
      "0 6px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
    transition: "all 0.25s cubic-bezier(.2,.8,.2,1)",
    "&:hover": {
      background: "linear-gradient(180deg, #2c2c2e 0%, #111 100%)",
      boxShadow:
        "0 10px 26px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.18)",
      transform: "translateY(-1px)",
    },
    "&:active": {
      transform: "translateY(0)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.4), inset 0 2px 4px rgba(0,0,0,0.5)",
    },
  };

  const secondaryButtonSX = {
    px: 3,
    py: 1.1,
    minHeight: 38,
    borderRadius: 999,
    textTransform: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#6b7280",
    backgroundColor: "rgba(0,0,0,0.03)",
    transition: "all 0.25s cubic-bezier(.2,.8,.2,1)",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.06)",
      color: "#374151",
    },
    "&:active": {
      backgroundColor: "rgba(0,0,0,0.1)",
    },
  };
  return (
    <Card
      component="label"
      sx={{
        width: 420,
        borderRadius: 4,
        p: generatedImage ? 0 : 3,
        cursor: "pointer",
        overflow: "hidden",
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
      }}
    >
      <input hidden type="file" accept="image/*" onChange={handleChange} />

      {!generatedImage ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(180deg, #1c1c1e 0%, #000 100%)",
              color: "#fff",
              boxShadow:
                "0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            <AddIcon fontSize="small" />
          </Box>

          <Box>
            <Typography
              sx={{ fontSize: "0.95rem", fontWeight: 600, color: "#111" }}
            >
              Add a photo
            </Typography>
            <Typography sx={{ fontSize: "0.85rem", color: "#6e6e73", mt: 0.3 }}>
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
              src={generatedImage}
              alt="Preview"
              sx={{
                width: "100%",
                maxHeight: 500,
                objectFit: "cover",
                borderRadius: "20px",
                display: "block",
                animation: "fadeIn 0.35s ease",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 3,
              py: 2.5,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Button sx={secondaryButtonSX}>Cancel</Button>
            <Button sx={primaryButtonSX}>Save</Button>
          </Box>
        </Box>
      )}
    </Card>
  );
}

export default UploadImage;
