import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  TextField,
  Avatar,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import { useAuth } from "../../context/authContext";
import image from "../../../assets/generatedImage.png";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState({
    name: "",
    description: "",
    profilePhoto: null,
  });
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    async function fetchUserProfile() {
      const token = await user.getIdToken();
      const res = await fetch("http://localhost:3000/api/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      // Next this user is gonna have all the user images so i can use it later
      setForm((prev) => ({
        ...prev,
        name: data.name,
        description: data.description,
      }));
    }
    fetchUserProfile();
  }, [user]);

  const updateProfileMutation = useMutation({
    mutationFn: async () => {
      const token = await user.getIdToken();
      const res = await fetch("http://localhost:3000/api/users/me", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: form.name,
          description: form.description,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update profile");
      }

      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile", user?.uid] });
    },
  });

  async function handleSubmit() {
    updateProfileMutation.mutate();
    navigate("/home/profile");
  }

  function handleCancel() {
    navigate("/home/profile");
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        pt: 8,
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 720,
          borderRadius: 4,
          px: 6,
          py: 5,
          backgroundColor: "#ffffff",
        }}
      >
        {/* Title */}
        <Typography variant="h5" fontWeight={600} sx={{ mb: 0.5 }}>
          Edit Profile
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          This information will be visible on your public profile.
        </Typography>

        {/* Avatar section */}
        <Box display="flex" alignItems="center" gap={3} mb={5}>
          <Avatar
            src={image}
            alt="Profile photo"
            sx={{
              width: 88,
              height: 88,
              bgcolor: "#e0e0e0",
              fontSize: 32,
            }}
          >
            J
          </Avatar>

          <Box>
            <Typography fontWeight={500}>Profile photo</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              PNG or JPG, max 5MB
            </Typography>

            <IconButton
              component="label"
              sx={{
                borderRadius: 2,
                border: "1px solid #ddd",
                px: 2,
                py: 0.5,
                fontSize: 14,
              }}
            >
              <PhotoCameraOutlinedIcon fontSize="small" />
              <Typography ml={1} fontSize={14}>
                Change
              </Typography>
              <input hidden type="file" />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* Name */}
        <Box mb={4}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 0.5, display: "block" }}
          >
            Name
          </Typography>

          <TextField
            variant="standard"
            fullWidth
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            InputProps={{
              disableUnderline: false,
              sx: {
                fontSize: 18,
                py: 0.5,
              },
            }}
          />
        </Box>

        {/* Description */}
        <Box>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 0.5, display: "block" }}
          >
            Description
          </Typography>

          <TextField
            variant="standard"
            fullWidth
            multiline
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            InputProps={{
              sx: {
                fontSize: 16,
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              pt: 8,
              gap: 2,
            }}
          >
            <Button
              onClick={handleSubmit}
              disabled={updateProfileMutation.isLoading}
              sx={{
                px: 3,
                py: 1,
                minHeight: 36,
                borderRadius: 999,
                textTransform: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#fff",
                background: "linear-gradient(180deg, #1c1c1e 0%, #000 100%)",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: "linear-gradient(180deg, #2c2c2e 0%, #111 100%)",
                  boxShadow:
                    "0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                  transform: "translateY(-1px)",
                },
                "&:active": {
                  transform: "translateY(0)",
                  boxShadow:
                    "0 3px 8px rgba(0,0,0,0.3), inset 0 2px 4px rgba(0,0,0,0.4)",
                },
              }}
            >
              {updateProfileMutation.isLoading ? "Saving..." : "Save Changes"}
            </Button>
            <Button
              onClick={handleCancel}
              disabled={updateProfileMutation.isLoading}
              sx={{
                px: 3,
                py: 1,
                minHeight: 36,
                borderRadius: 999,
                textTransform: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#fff",
                background: "linear-gradient(180deg, #1c1c1e 0%, #000 100%)",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: "linear-gradient(180deg, #2c2c2e 0%, #111 100%)",
                  boxShadow:
                    "0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                  transform: "translateY(-1px)",
                },
                "&:active": {
                  transform: "translateY(0)",
                  boxShadow:
                    "0 3px 8px rgba(0,0,0,0.3), inset 0 2px 4px rgba(0,0,0,0.4)",
                },
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default EditProfile;
