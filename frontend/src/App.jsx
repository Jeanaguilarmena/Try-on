import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainPage from "./pages/mainPage/mainPage";
import HeaderPage from "./pages/header/headerPage";
import LoginPage from "./pages/loginPage/loginPage";
import AuthApp from "./AuthApp";
import { AuthProvider } from "./context/authContext";
import ProfilePage from "./pages/profilePage/profilePage";
import EditProfilePage from "./pages/editProfilePage/editProfilePage";
import SaveGeneratedImagePage from "./pages/saveGeneratedImagePage/saveGeneratedImagePage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="login" element={<LoginPage />} />

            <Route path="/" element={<AuthApp />}>
              <Route path="/home" element={<HeaderPage />}>
                <Route index element={<MainPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="profile/edit" element={<EditProfilePage />} />
                <Route path="save" element={<SaveGeneratedImagePage />} />
              </Route>
            </Route>

            {/* <Route path="/" element={<HeaderPage />}>
            <Route index element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
