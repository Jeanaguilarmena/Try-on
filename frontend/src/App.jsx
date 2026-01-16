import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import HeaderPage from "./pages/header/headerPage";
import LoginPage from "./pages/loginPage/loginPage";
import AuthApp from "./AuthApp";
import { AuthProvider } from "./context/authContext";
import ProfilePage from "./pages/profilePage/profilePage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />

          <Route path="/" element={<AuthApp />}>
            <Route path="/home" element={<HeaderPage />}>
              <Route index element={<MainPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route>

          {/* <Route path="/" element={<HeaderPage />}>
            <Route index element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
