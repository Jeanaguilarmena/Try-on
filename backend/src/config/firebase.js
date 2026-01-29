import admin from "firebase-admin";
import serviceAccount from "../../secrets/firebase-service-account.json" assert { type: "json" };

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "try-on-8c4b6.appspot.com",
  });
}

export const firestore = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage().bucket();
