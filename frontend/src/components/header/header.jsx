import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Collapse from "@mui/material/Collapse";
import { useNavigate, useParams } from "react-router-dom";
import SearchIcon from "../../../assets/Search-Icon.png";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const authed = false;

  const menu = [{ label: "Login", path: "/login" }];

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setTimeout(() => inputRef.current?.focus(), 150);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        backgroundColor: "#fff",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <ClickAwayListener onClickAway={() => setShowSearch(false)}>
        <Box>
          {/* Header bar */}
          <Container>
            <Box
              sx={{
                height: 52,
                display: "flex",
                alignItems: "center",
                px: 4,
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              }}
            >
              {/* Logo */}
              <Button
                onClick={() => navigate("/")}
                disableRipple
                sx={{
                  color: "#1d1d1f",
                  textTransform: "none",
                  fontSize: 18,
                  fontWeight: 500,
                  padding: 0,
                }}
              >
                ⭑ Try-On!
              </Button>

              {/* Navegación */}
              <Box sx={{ display: "flex", gap: 3, ml: "auto", mr: 2 }}>
                {menu.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => navigate(item.path)}
                    disableRipple
                    sx={{
                      color: "#1d1d1f",
                      textTransform: "none",
                      fontSize: 14,
                      fontWeight: 400,
                      padding: 0,
                      minWidth: "auto",
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Search trigger */}
              <Button
                onClick={toggleSearch}
                disableRipple
                sx={{
                  color: "#1d1d1f",
                  fontSize: 14,
                  padding: 0,
                  minWidth: "auto",
                }}
              >
                {<img src={SearchIcon} alt="Search" width={20} height={20} />}
              </Button>
            </Box>
          </Container>

          {/* Search panel (debajo del header) */}
          <Collapse in={showSearch} timeout={200}>
            <Box
              sx={{
                borderTop: "1px solid #e5e5e5",
                backgroundColor: "#fff",
              }}
            >
              <Container>
                <Box
                  sx={{
                    py: 3,
                    px: 4,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <TextField
                    inputRef={inputRef}
                    fullWidth
                    placeholder="Search..."
                    variant="outlined"
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setShowSearch(false);
                    }}
                    sx={{
                      maxWidth: 520,
                      "& .MuiOutlinedInput-root": {
                        height: 48,
                        borderRadius: "12px",
                        backgroundColor: "#f5f5f7",
                        fontSize: 15,
                        "& fieldset": {
                          borderColor: "transparent",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#0071e3",
                        },
                      },
                    }}
                  />
                </Box>
              </Container>
            </Box>
          </Collapse>
        </Box>
      </ClickAwayListener>
    </Box>
  );
}
