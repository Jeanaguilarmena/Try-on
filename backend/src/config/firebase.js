import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccountPath = path.join(
  __dirname,
  "../../secrets/firebase-service-account.json"
)

const serviceAccount = JSON.parse(
  fs.readFileSync(serviceAccountPath, "utf8")
)

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "try-on-8c4b6.appspot.com",
  });
}

export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage().bucket();
