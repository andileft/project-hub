// Application Configuration Constants

// Firestore collection path for projects
export const COLLECTION_PATH = 'projects';

// Vertex AI Gemini model name
export const GEMINI_MODEL = 'gemini-2.0-flash';

// Maximum batch operations per Firestore batch (Firestore limit)
export const MAX_BATCH_OPS = 500;

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCBz55HZYrgOICFHCrZNMzsqUCsbBJXZ8E",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "project-tracker-prod-aae7c.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "project-tracker-prod-aae7c",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "project-tracker-prod-aae7c.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "22966312336",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:22966312336:web:8ffc666511048cb4716715"
};

export const TECH_HUB_URL = import.meta.env.VITE_TECH_HUB_URL || 'https://tech-hub-22966312336.asia-southeast2.run.app';
export const ASSIGNMENT_GEN_URL = import.meta.env.VITE_ASSIGNMENT_GEN_URL || '';
