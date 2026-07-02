/**
 * AI utilities for interacting with Google Vertex AI / Gemini models.
 */

import { vertexAI, getGenerativeModel } from './firebase.js';

export const DEFAULT_MODEL_NAME = 'gemini-2.0-flash';

/**
 * Calls the Gemini model with a prompt and optional system instruction.
 * Uses gemini-2.0-flash model by default. Provides user-friendly error messages for common issues.
 *
 * Simplified API: directly uses imported Vertex AI dependencies.
 *
 * @param {string} prompt - The user prompt to send
 * @param {string} systemInstruction - Optional system instruction for the model
 * @returns {Promise<string>} Model response text or error message
 */
export async function callGemini(prompt, systemInstruction = '') {
  try {
    const activeModel = getGenerativeModel(vertexAI, {
      model: 'gemini-2.0-flash',
      systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined
    });
    const result = await activeModel.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Vertex AI Detailed Error:', error);
    const errorMsg = error.message || String(error);

    if (errorMsg.includes('403')) {
      return `Error: Access Denied (403). Please verify Blaze plan is active and Vertex AI is enabled in the Google Cloud Console. Details: ${errorMsg}`;
    }
    if (errorMsg.includes('404')) {
      return `Error: Model Not Found (404). Gemini 2.0 Flash might not be available in your project's region. Try checking the "Firebase AI Logic" settings in the console. Details: ${errorMsg}`;
    }
    if (errorMsg.includes('auth')) {
      return `Auth Error: Please confirm Anonymous Authentication is ENABLED in your Firebase Console (Build > Authentication > Sign-in method). Details: ${errorMsg}`;
    }
    return `AI Error: ${errorMsg}. Please check console for full stack trace.`;
  }
}

/**
 * Analyzes MOM SDHO document text to infer the project methodology.
 * Returns 'BAST Only', 'Simple', 'Complex', or null if uncertain.
 *
 * @param {string} text - Extracted document text
 * @returns {Promise<string|null>} Inferred methodology or null
 */
export async function inferMethodologyFromText(text) {
  if (!text || text.length < 50) return null;

  const prompt = `
    Analyze this "MOM SDHO" document text and find the project "Type" (Methodology).
    Options: "BAST Only", "Simple", "Complex".
    Look for the "Type" section where one of these is checked. Usually there is a checkbox like [x] or similar next to the chosen type.

    Document Text excerpt:
    ${text.substring(0, 6000)}

    Return ONLY the exact matched name: "BAST Only", "Simple", or "Complex". If you cannot be sure, return "Unknown".
  `;

  try {
    const result = await callGemini(prompt, 'You are a precise document parser. Your goal is to identify the project methodology from MOM documents.');
    const cleaned = result?.trim().replace(/[^a-zA-Z ]/g, '');
    if (cleaned.includes('BAST Only')) return 'BAST Only';
    if (cleaned.includes('Simple')) return 'Simple';
    if (cleaned.includes('Complex')) return 'Complex';
    return null;
  } catch (err) {
    console.error('Methodology inference error:', err);
    return null;
  }
}
