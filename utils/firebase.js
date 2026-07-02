/**
 * Firebase module: Exposes all Firebase SDK functions for Firestore, Auth,
 * Storage, and Vertex AI, along with collection path constants.
 */

import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  writeBatch,
  query,
  updateDoc,
  where
} from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInAnonymously
} from 'firebase/auth';
 import {
   getStorage,
   ref,
   uploadBytes,
   getDownloadURL,
   deleteObject
 } from 'firebase/storage';
import {
  getVertexAI,
  getGenerativeModel
} from 'firebase/vertexai';
import { firebaseConfig } from '../constants/config.js';

// Initialize immediately
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const vertexAI = getVertexAI(app);
export const model = getGenerativeModel(vertexAI, { model: 'gemini-2.0-flash' });

// Re-export functions for convenience
export {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  writeBatch,
  query,
  updateDoc,
  where
};
export {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInAnonymously
};
 export { ref, uploadBytes, getDownloadURL, deleteObject };
export { getVertexAI, getGenerativeModel };
// Also export COLLECTION_PATH from constants
import { COLLECTION_PATH } from '../constants/config.js';
export { COLLECTION_PATH };
