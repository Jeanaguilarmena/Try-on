import { imageGenerator } from "../data/imageGenerator.js"

export async function processTryOn(personImage, garmentImage) {
    const generatedMock = await imageGenerator();

    return generatedMock;
}