import { Box, Card, Typography } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const UploadCard = ({ title, onUpload }) => {
  function handleChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    onUpload(file);
  }
  return (
    <Card
      component="label"
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
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",

        "&:hover": {
          boxShadow: "0 20px 50px rgba(0,0,0,0.16)",
          transform: "translateY(-2px)",
          // borderColor: "primary.main",
        },
      }}
    >
      <Box>
        <Typography fontWeight={500}>{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          Click to upload
        </Typography>
      </Box>

      <CloudUploadOutlinedIcon sx={{ fontSize: 40, color: "text.secondary" }} />

      <input hidden type="file" accept="image/*" onChange={handleChange} />
    </Card>
  );
};

export default UploadCard;
