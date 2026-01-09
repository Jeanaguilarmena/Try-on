import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import HeaderPage from "./pages/header/headerPage";
import LoginPage from "./pages/loginPage/loginPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderPage />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
