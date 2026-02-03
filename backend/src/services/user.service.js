import { db } from "../config/firebase.js";

export const getUserProfile = async (id) => {
    const ref = db.collection("users").doc(id);
    const snap = await ref.get();

    return snap.exists ? snap.data() : null;
}

export const createUser = async (decodeUser) => {
    const uid = decodeUser.uid;
    const ref = db.collection("users").doc(uid);
    const snap = await ref.get();

    if (!snap.exists) {
        const newUser = {
            uid: decodeUser.uid,
            email: decodeUser.email,
            name: decodeUser.name || decodeUser.displayName || "No Name",
            createdAt: new Date(),
        }

        await ref.set(newUser);
    }
}