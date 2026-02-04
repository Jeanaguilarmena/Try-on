import { Router } from "express";
import { firebaseAuthMiddleware } from "../middlewares/firebaseAuth.middleware.js";
import { getUserProfile, createUser, updateUserProfile } from "../services/user.service.js";

const router = Router();

router.get("/me", firebaseAuthMiddleware, async (req, res) => {
    try {
        const user = await getUserProfile(req.user.uid);

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
})

// I need to see if a have to manage errors here or unsussessful cases

router.post("/me", firebaseAuthMiddleware, async (req, res) => {
    try {
        const created = await createUser(req.user);
        if (!created) {
            return res.status(409).json({ ok: false, message: "User already exists" });
        }
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
})

router.patch("/me", firebaseAuthMiddleware, async (req, res) => {
    try {
        const id = req.user.uid;
        const profileData = req.body;
        const updatedUser = await updateUserProfile(id, profileData);

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
})

export default router;