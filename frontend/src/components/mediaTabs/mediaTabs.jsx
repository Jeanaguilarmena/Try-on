import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const tabs = ["generated", "saved"];

export default function MediaTabs({ active, onChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 4,
        borderBottom: "1px solid #e5e5e5",
        mb: 3,
      }}
    >
      {tabs.map((tab) => (
        <Typography
          key={tab}
          onClick={() => onChange(tab)}
          sx={{
            cursor: "pointer",
            fontSize: 12,
            fontWeight: active === tab ? 500 : 400,
            pb: 1.5,
            borderBottom:
              active === tab ? "2px solid #000" : "2px solid transparent",
          }}
        >
          {tab.toUpperCase()}
        </Typography>
      ))}
    </Box>
  );
}
