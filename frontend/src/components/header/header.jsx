import { useRef } from "react";
import { AppBar, Toolbar, Container, Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const menu = [
    { label: "Home", path: "/home" },
    { label: "Profile", path: "profile" },
    { label: "Logout", path: "/login" },
  ];

  return (
    <Box>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={(theme) => ({
              minHeight: 48,
              px: 2,
              borderRadius: "999px",
              backdropFilter: "blur(24px)",
              backgroundColor:
                theme.palette.mode === "light"
                  ? "rgba(255,255,255,0.6)"
                  : "rgba(0,0,0,0.5)",
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 4px 20px rgba(0,0,0,0.08)"
                  : "0 4px 20px rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            })}
          >
            <Button
              disableRipple
              onClick={() => navigate("/home")}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                color: "text.primary",
                px: 1,
              }}
            >
              ⭑ Try-On
            </Button>

            <Stack direction="row" spacing={3} alignItems="center">
              {menu.map((item) => (
                <Button
                  key={item.label}
                  disableRipple
                  onClick={() => navigate(item.path)}
                  sx={{
                    textTransform: "none",
                    fontSize: "0.85rem",
                    fontWeight: 400,
                    color: "text.primary",
                    minWidth: "auto",
                    px: 0,
                    "&:hover": {
                      backgroundColor: "transparent",
                      opacity: 0.7,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
