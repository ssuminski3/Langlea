// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase-config";
import { getVertexAI, getGenerativeModel } from "firebase/vertexai-preview";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize the Vertex AI service
export const vertexAI = getVertexAI(app);

// Initialize the generative model with a model that supports your use case
// Gemini 1.5 models are versatile and can be used with all API capabilities
export const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash" });
export const modelTranslate = getGenerativeModel(vertexAI, {model: "gemini-1.5-flash"})

