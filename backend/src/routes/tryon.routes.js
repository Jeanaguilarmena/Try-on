import { Router } from 'express';
import { firebaseAuthMiddleware } from '../middlewares/firebaseAuth.middleware.js';
import multer from "multer";
import { generateTryOnService, saveGeneratedImageService, getUserGeneratedImagesService, saveUserImageService, getUserSavedImagesService } from '../services/tryon.service.js';
import fs from "fs";
import path from "path";
import crypto from "crypto";

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

//This endpoint will handle the saving of an image in local storage and save de metadata in firestore
router.post("/save", firebaseAuthMiddleware, async (req, res) => {
    try {
        const { imageUrl, brand, description, link } = req.body;
        const userId = req.user.uid;

        if (!imageUrl) {
            return res.status(400).json({ message: "imageUrl is required" });
        }

        const result = await saveGeneratedImageService({
            userId,
            imageUrl,
            brand,
            description,
            link,
        });

        res.status(200).json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/generatedImages", firebaseAuthMiddleware, async (req, res) => {
    try {
        const userId = req.user.uid;

        const result = await getUserGeneratedImagesService(userId);

        if (!result) {
            return res.status(404).json({ message: "No generated images found for this user" });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
})

router.post("/savedImages", firebaseAuthMiddleware, upload.single("image"), async (req, res) => {
    //Here I'm gonna save the images in local storage and then save it on the firestore.
    try {
        const { file } = req;
        const userId = req.user.uid;

        if (!file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const imageId = `${crypto.randomUUID()}.png`;
        const uploadPath = path.join("public", "uploads", userId);

        fs.mkdirSync(uploadPath, { recursive: true });

        const filePath = path.join(uploadPath, imageId);
        await fs.promises.writeFile(filePath, req.file.buffer);

        const imageUrl = `http://localhost:3000/public/uploads/${userId}/${imageId}`;

        //Here I call the service that its gonna save the metadata of the image in firestore
        // Just imageUrl, userId and createdAt are required
        const result = await saveUserImageService({ userId, imageUrl });

        res.status(200).json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }

})

router.get("/savedImages", firebaseAuthMiddleware, async (req, res) => {
    try {
        const userId = req.user.uid;

        const result = await getUserSavedImagesService(userId);

        if (!result) {
            return res.status(404).json({ message: "No saved images found for this user" });
        }

        res.status(200).json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
})



export default router;