import { Router } from "express";
import { firebaseAuthMiddleware } from "../middlewares/firebaseAuth.middleware";
import { getUserProfile } from "../services/user.service";

const router = Router();

router.get("me", firebaseAuthMiddleware, async (req, res) => {
    const user = await getUserProfile(req.user.uid);
})

export default router;