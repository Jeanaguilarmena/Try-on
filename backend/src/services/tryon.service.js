export const generateTryOnService = async (personImage, garmentImage) => {
    // Here I should call the IA service that will process the images and generate the try-on preview
    // For now, I will just return a predefined image

    //Im gonna simulate a delay to make it more realistic
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
        id: crypto.randomUUID(),
        image: "http://localhost:3000/public/generated/mock-tryon.png",
        status: "success",
    }
}