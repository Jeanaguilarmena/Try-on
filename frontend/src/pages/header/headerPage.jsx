import Box from "@mui/material/Box";
import React from "react";
import Header from "../../components/header/header";
import { Outlet } from "react-router-dom";

function HeaderPage() {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default HeaderPage;
