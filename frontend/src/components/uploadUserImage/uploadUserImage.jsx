import { Box, Button, Card, Typography, Popover, Divider } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import { useState } from "react";

const UploadUserImage = ({ title, onUpload, onOpenModal }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUploadPhoto = (e) => {
    handleClose();
    const file = e.target.files[0];
    if (!file) return;

    onUpload(file);
  };

  const handleSelectPhoto = () => {
    onOpenModal(true);
    handleClose();
    console.log("Use saved image");
  };

  return (
    <>
      <Card
        onClick={handleOpen}
        sx={{
          width: 380,
          height: 120,
          borderRadius: 4,
          cursor: "pointer",
          border: "1px solid rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          transition: "all 0.25s ease",
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          "&:hover": {
            boxShadow: "0 20px 50px rgba(0,0,0,0.16)",
            transform: "translateY(-2px)",
          },
        }}
      >
        <Box>
          <Typography fontWeight={500}>{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            Click to choose an option
          </Typography>
        </Box>

        <CloudUploadOutlinedIcon
          sx={{ fontSize: 40, color: "text.secondary" }}
        />
      </Card>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{
          sx: {
            mt: 1,
            width: 300,
            borderRadius: 3,
            p: 1,
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
            backdropFilter: "blur(20px)",
          },
        }}
      >
        <Button
          component="label"
          fullWidth
          startIcon={<CloudUploadOutlinedIcon />}
          sx={{
            justifyContent: "flex-start",
            px: 2,
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
            color: "text.primary",
          }}
        >
          Upload from device
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={handleUploadPhoto}
          />
        </Button>

        <Divider sx={{ my: 0.5 }} />

        <Button
          fullWidth
          onClick={handleSelectPhoto}
          startIcon={<PhotoLibraryOutlinedIcon />}
          sx={{
            justifyContent: "flex-start",
            px: 2,
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
            color: "text.primary",
          }}
        >
          Use saved image
        </Button>
      </Popover>
    </>
  );
};

export default UploadUserImage;
