import { useContext, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { ColorModeContext } from "../../context/themeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export default function Header() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { logout } = useAuth();
  const { toggleColorMode, mode } = useContext(ColorModeContext);

  const menu = [
    { label: "Home", function: () => navigate("/home") },
    { label: "Profile", function: () => navigate("profile") },
    { label: "Logout", function: logout },
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
                  onClick={item.function}
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
              <IconButton
                onClick={toggleColorMode}
                disableRipple
                sx={(theme) => ({
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backdropFilter: "blur(20px)",
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "rgba(0,0,0,0.04)"
                      : "rgba(255,255,255,0.08)",
                  border: "1px solid",
                  borderColor:
                    theme.palette.mode === "light"
                      ? "rgba(0,0,0,0.06)"
                      : "rgba(255,255,255,0.12)",
                  transition: "all 0.25s cubic-bezier(.2,.8,.2,1)",
                  color: "text.primary",

                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? "rgba(0,0,0,0.08)"
                        : "rgba(255,255,255,0.15)",
                    transform: "translateY(-1px)",
                  },

                  "&:active": {
                    transform: "translateY(0)",
                  },
                })}
              >
                {mode === "dark" ? (
                  <LightModeOutlinedIcon fontSize="small" />
                ) : (
                  <DarkModeOutlinedIcon fontSize="small" />
                )}
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
