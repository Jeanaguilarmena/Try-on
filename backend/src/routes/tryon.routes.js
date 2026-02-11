import { Router } from 'express';
import { firebaseAuthMiddleware } from '../middlewares/firebaseAuth.middleware.js';
import multer from "multer";
import { generateTryOnService } from '../services/tryon.service.js';

//Here I will import the services that I need to manage the try on data

const router = Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/generate", firebaseAuthMiddleware, upload.fields([
    { name: "personImage", maxCount: 1 },
    { name: "garmentImage", maxCount: 1 }
]), async (req, res) => {
    try {
        const { personImage, garmentImage } = req.files;

        if (!personImage || !garmentImage) {
            return res.status(400).json({ message: "Both person and garment images are required" });
        }

        // Here I will call the service that will process the images and generate the try-on preview
        const result = await generateTryOnService(personImage[0].buffer, garmentImage[0].buffer);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
})

//This endpoint will handle the saving of an image in storage
router.post("/save", firebaseAuthMiddleware, upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }
        const file = req.file;
        const image = file.buffer;

        // Here I will call the service that will save the image to firebase storage
        res.status(200).json({ message: "Image saved successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
})

export default router;