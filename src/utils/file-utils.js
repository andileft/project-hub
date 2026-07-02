/**
 * File utilities: upload to Firebase Storage and extract text from files.
 * Supports PDF, DOCX, TXT, CSV, MD, JSON.
 */

import { storage, ref, uploadBytes, getDownloadURL, deleteObject } from '../../utils/firebase.js';

/**
 * Extract plain text from a file (PDF, DOCX, TXT, CSV, MD, JSON).
 * Uses PDF.js for PDFs, Mammoth for DOCX, and FileReader for text files.
 */
export async function extractTextFromFile(file) {
  const extension = file.name.split('.').pop()?.toLowerCase();
  let text = '';

  try {
    if (extension === 'pdf') {
      // Load PDF.js dari CDN (global pdfjsLib)
      if (typeof window !== 'undefined' && window.pdfjsLib) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map(item => item.str).join(' ') + ' ';
        }
      } else {
        console.warn('PDF.js not loaded. Install pdfjs-dist or include via CDN.');
        text = '[PDF text extraction unavailable - PDF.js not loaded]';
      }
    } else if (extension === 'docx' || extension === 'doc') {
      // Load Mammoth dari CDN (global mammoth)
      if (typeof window !== 'undefined' && window.mammoth) {
        const arrayBuffer = await file.arrayBuffer();
        const result = await window.mammoth.extractRawText({ arrayBuffer });
        text = result.value;
      } else {
        console.warn('Mammoth not loaded. Install mammoth or include via CDN.');
        text = '[DOCX text extraction unavailable - Mammoth not loaded]';
      }
    } else if (['txt', 'csv', 'md', 'json'].includes(extension)) {
      text = await file.text();
    } else {
      text = `[Unsupported file type: .${extension}]`;
    }

    console.log(`Extracted text from ${file.name}: ${text.length} chars`);
    return text;
  } catch (err) {
    console.error('Extraction error:', err);
    return `Error during extraction: ${err.message}`;
  }
}

/**
 * Upload a file to Firebase Storage under 'attachments/' folder.
 * Returns the download URL string.
 */
export async function uploadFileToStorage(file) {
  const filename = `${Date.now()}_${file.name}`;
  const storageRef = ref(storage, `attachments/${filename}`);

  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);

  console.log('File uploaded to Storage:', url);
  return url;
}

/**
 * Delete a file from Firebase Storage given its download URL.
 * Returns true if deleted, false if URL invalid or not found.
 */
export async function deleteFileFromStorageByUrl(url) {
  try {
    // Parse URL to get path: https://firebasestorage.googleapis.com/v0/b/<bucket>/o/<encodedPath>?...
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/o/');
    if (pathParts.length < 2) throw new Error('Invalid storage URL format');

    const encodedPath = pathParts[1];
    const filePath = decodeURIComponent(encodedPath);

    const fileRef = ref(storage, filePath);
    await deleteObject(fileRef);
    console.log('Deleted from Storage:', filePath);
    return true;
  } catch (err) {
    console.error('Delete from Storage failed:', err);
    return false;
  }
}
