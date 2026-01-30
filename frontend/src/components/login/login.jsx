import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const { authed, isLoading, loginwithgoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (authed && !isLoading) {
      navigate("/home");
    }
  }, [authed, isLoading, navigate]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center", // vertical
        justifyContent: "center", // horizontal
        backgroundColor: "#FAFAFA",
      }}
    >
      <Card
        sx={{
          width: 380,
          borderRadius: 3,
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        }}
      >
        <CardContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h5" fontWeight={600} textAlign="center">
              Sign in
            </Typography>
            <Box>
              <Typography>
                If you want to login, press continue with google
              </Typography>
            </Box>

            <Button
              onClick={loginwithgoogle}
              variant="contained"
              sx={{
                backgroundColor: "#1D1D1F", // azul Apple
                color: "#fff",
                borderRadius: "999px",
                padding: "10px 22px",
                fontSize: "0.95rem",
                fontWeight: 500,
                textTransform: "none",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                "&:hover": {
                  backgroundColor: "#F5F5F7",
                  boxShadow: "0 6px 14px rgba(0, 0, 0, 0.2)",
                  color: "#1D1D1F",
                },
                "&:active": {
                  transform: "scale(0.97)",
                },
                fontFamily:
                  "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              Continue with Google
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
