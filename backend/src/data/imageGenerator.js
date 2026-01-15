import image from "../../../frontend/assets/generatedImage.png"

export async function generateTryOnImage() {
    setTimeout(() => { }, 1000)
    const generatedImage = image;

    return ({
        image: generatedImage,
        metadata: {
            simulated: true
        }
    }
    )
}