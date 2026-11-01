/**
 * Client for the Tech Hub project chat (same RAG engine the Tech Hub UI uses).
 *
 * Talks to `POST {TECH_HUB_API_URL}/api/tkb` with `action: 'chat'`, authenticating
 * with the signed-in user's Firebase ID token. Tech Hub verifies the token against
 * the shared Firebase project and enforces per-project access (admin/viewer, or the
 * project's PM).
 */
import { auth } from './firebase.js';
import { TECH_HUB_API_URL } from '../constants/config.js';

export class TechHubChatError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'TechHubChatError';
    this.status = status;
  }
}

/**
 * Tech Hub's `/api/tkb` returns 500 for every thrown error (including auth),
 * with the reason in the JSON body, so we also inspect the message text.
 */
const errorMessageFor = (status, serverMessage) => {
  const msg = String(serverMessage || '').trim();
  const lower = msg.toLowerCase();
  const looksAuth = lower.includes('bearer token') || lower.includes('id token')
    || lower.includes('auth') || lower.includes('token') || lower.includes('jwt');
  const looksDenied = lower.includes('access denied') || lower.includes('permission')
    || lower.includes('not found or access');

  if (status === 401 || looksAuth) return 'Sesi login kedaluwarsa atau tidak valid. Silakan login ulang.';
  if (status === 403 || looksDenied) return 'Anda tidak punya akses ke proyek ini di Tech Hub.';
  if (status === 400) return msg || 'Pertanyaan ditolak oleh kebijakan Tech Hub.';
  if (status === 429) return 'Terlalu banyak permintaan. Coba lagi sebentar.';
  if (msg) return msg;
  if (status >= 500) return 'Tech Hub sedang bermasalah. Coba lagi nanti.';
  return `Permintaan gagal (${status}).`;
};

/**
 * @param {object} args
 * @param {string} args.projNumber  Project number (Tech Hub `projectId`).
 * @param {string} args.query       The user's question.
 * @param {Array<{role:'user'|'assistant', text:string}>} [args.messages] Prior turns.
 * @returns {Promise<{text: string, citations: Array, usage: object|null}>}
 */
export async function askTechHubChat({ projNumber, query, messages = [] }) {
  if (!projNumber) throw new TechHubChatError('Nomor proyek tidak tersedia.', 400);
  const user = auth.currentUser;
  if (!user) throw new TechHubChatError('Belum login.', 401);

  const token = await user.getIdToken();

  let res;
  try {
    res = await fetch(`${TECH_HUB_API_URL}/api/tkb`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        action: 'chat',
        projectId: projNumber,
        query,
        messages: messages.map(({ role, text }) => ({ role, text })),
        options: { projectScopeOnly: true },
      }),
    });
  } catch (err) {
    throw new TechHubChatError('Tidak bisa menghubungi Tech Hub. Periksa koneksi.', 0);
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new TechHubChatError(errorMessageFor(res.status, data?.error), res.status);
  }

  const data = await res.json();
  return {
    text: data.text || '',
    citations: Array.isArray(data.citations) ? data.citations : [],
    usage: data.usage ?? null,
  };
}

/**
 * Download a cited source document through Tech Hub (server-side proxy).
 *
 * Tech Hub streams the bytes and re-validates access itself, so this works
 * without signed URLs (which need a service-account private key the Cloud Run
 * runtime does not have).
 *
 * @param {object} args
 * @param {string} args.projNumber   Project number (Tech Hub `projectId`).
 * @param {string} args.storagePath  Citation `metadata.storage_path`.
 * @param {string} [args.filename]   Display filename (for Content-Disposition).
 * @returns {Promise<{blob: Blob, filename: string}>}
 */
export async function downloadTechHubFile({ projNumber, storagePath, filename }) {
  if (!projNumber) throw new TechHubChatError('Nomor proyek tidak tersedia.', 400);
  if (!storagePath) throw new TechHubChatError('File sumber tidak tersedia.', 400);

  const user = auth.currentUser;
  if (!user) throw new TechHubChatError('Belum login.', 401);

  const token = await user.getIdToken();

  let res;
  try {
    res = await fetch(`${TECH_HUB_API_URL}/api/tkb`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        action: 'download-file',
        projectId: projNumber,
        metadata: { storagePath, filename },
      }),
    });
  } catch {
    throw new TechHubChatError('Tidak bisa menghubungi Tech Hub. Periksa koneksi.', 0);
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    const msg = data?.error || '';
    if (res.status === 404) throw new TechHubChatError(msg || 'File sumber sudah tidak tersedia.', 404);
    throw new TechHubChatError(errorMessageFor(res.status, msg), res.status);
  }

  return { blob: await res.blob(), filename: filename || 'file' };
}
