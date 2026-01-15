import { onRequest } from "firebase-functions/v2/https";
import { tryOnFunction } from "./api/tryOn.function";

//Kinda similar to Post("/tryOn", tryOnFunction)
export const tryOn = onRequest(tryOnFunction);