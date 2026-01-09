import Box from "@mui/material/Box";
import React from "react";
import Header from "../../components/header/header";
import { Outlet } from "react-router-dom";

function HeaderPage() {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
}

export default HeaderPage;
