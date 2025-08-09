import { type ClassValue, clsx } from "clsx";
import CryptoJS from "crypto-js";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { ApiError } from "../interface/error";
const secretKey = import.meta.env.VITE_APP_SECRET_KEY;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function encrypt(text: string) {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
}

export function decrypt(cipherText: string) {
  if (!cipherText) return "";
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (err) {
    console.error("Decryption failed:", err);
    return null;
  }
}

export function errorHandler(error: unknown, errorMessage: string) {
  if (typeof error === "object" && error !== null && "data" in error) {
    const apiError = error as ApiError;
    toast.error(apiError.data.message);
  } else {
    toast.error(errorMessage);
  }
}
