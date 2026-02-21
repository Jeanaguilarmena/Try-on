import { Box } from "@mui/material";
import Image from "../image/image";
function MediaGrid({ posts, onSelectPost }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 3,
      }}
    >
      {posts.map((image) => (
        <Image
          key={image.id}
          image={image.imageUrl}
          alt="image"
          onClick={() => onSelectPost(image)}
        />
      ))}
    </Box>
  );
}

export default MediaGrid;
