import { Box, Typography, Link } from "@mui/material";

function ImageMeta({ brand, date, description, link }) {
  return (
    <Box
      sx={{
        flex: 1,
        p: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Box
        sx={(theme) => ({
          p: 2.5,
          borderRadius: 3,

          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(180deg, rgba(28,28,30,0.85), rgba(18,18,18,0.85))"
              : "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(245,245,247,0.9))",

          backdropFilter: "blur(20px) saturate(180%)",

          boxShadow:
            theme.palette.mode === "dark"
              ? "inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 24px rgba(0,0,0,0.6)"
              : "inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 24px rgba(0,0,0,0.06)",
        })}
      >
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.015em",
          }}
        >
          {brand}
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            fontSize: 13,
            color: "text.secondary",
          }}
        >
          {date}
        </Typography>
      </Box>
      <Box
        sx={(theme) => ({
          p: 2.5,
          borderRadius: 3,

          background:
            theme.palette.mode === "dark"
              ? "rgba(28,28,30,0.7)"
              : "rgba(255,255,255,0.65)",

          backdropFilter: "blur(24px)",

          boxShadow:
            theme.palette.mode === "dark"
              ? "inset 0 1px 0 rgba(255,255,255,0.04), 0 10px 30px rgba(0,0,0,0.7)"
              : "inset 0 1px 0 rgba(255,255,255,0.5), 0 10px 30px rgba(0,0,0,0.08)",
        })}
      >
        <Typography
          sx={{
            fontSize: 15,
            lineHeight: 1.65,
            color: "text.primary",
          }}
        >
          {description}
        </Typography>
      </Box>

      {link && (
        <Box
          sx={(theme) => ({
            alignSelf: "flex-start",
            px: 2,
            py: 1,
            borderRadius: 999,

            background:
              theme.palette.mode === "dark"
                ? "rgba(0,113,227,0.18)"
                : "rgba(0,113,227,0.08)",

            backdropFilter: "blur(10px)",

            transition: "all .25s ease",

            "&:hover": {
              background:
                theme.palette.mode === "dark"
                  ? "rgba(0,113,227,0.28)"
                  : "rgba(0,113,227,0.14)",
            },
          })}
        >
          <Link
            href={link}
            target="_blank"
            underline="none"
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "text.secondary",
            }}
          >
            View product →
          </Link>
        </Box>
      )}
    </Box>
  );
}

export default ImageMeta;
