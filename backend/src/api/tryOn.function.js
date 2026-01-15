import { processTryOn } from "../services/tryOn.service";

export const tryOnFunction = async (req, res) => {
    const { personImage, garmentImage } = req.body;

    if (!personImage || !garmentImage) {
        return res.status(400).json({ error: "Images required" })
    }

    const result = await processTryOn(personImage, garmentImage);
    res.json(result);
}