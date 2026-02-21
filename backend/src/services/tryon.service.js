import { db } from "../config/firebase.js";
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

export const saveGeneratedImageService = async ({
    userId,
    imageUrl,
    brand,
    description,
    link
}) => {
    const docRef = await db.collection("generatedImages").add({
        userId,
        imageUrl,
        brand,
        description,
        link,
        createdAt: new Date(),
    })

    return {
        id: docRef.id,
        userId,
        imageUrl,
        brand,
        description,
        link,
    }
}

export const getUserGeneratedImagesService = async (userId) => {
    //Im in the backend so im using firebase admin sdk to query the database
    const snapshot = await db.collection("generatedImages").where("userId", "==", userId).get();

    if (snapshot.empty) {
        return [];
    }

    const images = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

    return images;
}

export const saveUserImageService = async ({ userId, imageUrl }) => {
    const docRef = await db.collection("savedImages").add({
        userId,
        imageUrl,
        createdAt: new Date(),
    })

    return {
        id: docRef.id,
        userId,
        imageUrl
    }
}

export const getUserSavedImagesService = async (userId) => {
    const snapshot = await db.collection("savedImages").where("userId", "==", userId).get();

    if (snapshot.empty) {
        return [];
    }

    const images = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

    return images;
}