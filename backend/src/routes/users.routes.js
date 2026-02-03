import { Router } from "express";
import { firebaseAuthMiddleware } from "../middlewares/firebaseAuth.middleware.js";
import { getUserProfile, createUser } from "../services/user.service.js";

const router = Router();

router.get("/me", firebaseAuthMiddleware, async (req, res) => {
    const user = await getUserProfile(req.user.uid);
    res.json(user);
})

// I need to see if a have to manage errors here or unsussessful cases

router.post("/me", firebaseAuthMiddleware, async (req, res) => {
    await createUser(req.user);
    res.status(200).json({ ok: true });
})

export default router;