import { Box } from "@mui/material";
import Image from "../image/image";
function MediaGrid({ posts, onSelectPost, type }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 3,
      }}
    >
      {posts
        .filter((item) => item.type === type)
        .map((image) => (
          <Image
            key={image.id}
            image={image.image}
            alt={image.alt}
            onClick={() => onSelectPost(image.image)}
          />
        ))}
    </Box>
  );
}

export default MediaGrid;
