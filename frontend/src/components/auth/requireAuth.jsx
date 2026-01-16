import { useAuth } from "../../context/authContext";
import { Box, Typography } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const { authed, isLoading } = useAuth();
  const location = useLocation();

  return (
    <Box>
      {isLoading && <Typography>Loading...</Typography>}
      {authed && !isLoading && children}
      {!authed && !isLoading && (
        <Navigate to={"/login"} replace state={{ path: location.pathname }} />
      )}
    </Box>
  );
}

export default RequireAuth;
