/**
 * Formatting utilities for currency, dates, numbers, and HTML content.
 */

/**
 * Returns status badge styling classes for a given project status.
 * @param {string} status - The project status
 * @returns {{border: string, badge: string}} Border and badge class strings
 */
export function getStatusClasses(status) {
  switch (status) {
    case 'Done': return {
      border: 'border-l-emerald-500 dark:border-l-emerald-400',
      badge: 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/50'
    };
    case 'Maintenance': return {
      border: 'border-l-pink-500 dark:border-l-pink-400',
      badge: 'bg-pink-50 text-pink-600 border-pink-100 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-800/50'
    };
    case 'Belum SDHO': return {
      border: 'border-l-amber-500 dark:border-l-amber-400',
      badge: 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50'
    };
    default: return {
      border: 'border-l-indigo-500 dark:border-l-indigo-400',
      badge: 'bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800/50'
    };
  }
}

/**
 * Formats a number as short currency (B for billions, M for millions).
 * @param {number} val - The value to format
 * @returns {string} Formatted currency string (e.g., "Rp 1.5B", "Rp 2.3M", "Rp 1,234")
 */
export function formatShortCurrency(val) {
  if (val >= 1e9) return `Rp ${(val / 1e9).toFixed(1)}B`;
  if (val >= 1e6) return `Rp ${(val / 1e6).toFixed(1)}M`;
  return `Rp ${val?.toLocaleString()}`;
}

/**
 * Safely parses a float from various string formats (handles commas, dots, currency symbols).
 * Recognizes Indonesian number format (comma as decimal separator) and US/UK format.
 * @param {string|number|null|undefined} val - The value to parse
 * @returns {number} Parsed float, or 0 if invalid
 */
export function safeParseFloat(val) {
  if (val === null || val === undefined || val === '') return 0;
  let result = 0;
  if (typeof val === 'number') {
    result = val;
  } else {
    const clean = String(val).replace(/[^0-9.,-]/g, '');
    if (!clean) return 0;

    const hasComma = clean.includes(',');
    const hasDot = clean.includes('.');

    if (hasComma && hasDot) {
      if (clean.lastIndexOf(',') > clean.lastIndexOf('.')) {
        result = parseFloat(clean.replace(/\./g, '').replace(',', '.'));
      } else {
        result = parseFloat(clean.replace(/,/g, ''));
      }
    } else if (hasComma) {
      const parts = clean.split(',');
      if (parts[parts.length - 1].length === 3) result = parseFloat(clean.replace(/,/g, ''));
      else result = parseFloat(clean.replace(',', '.'));
    } else if (hasDot) {
      const parts = clean.split('.');
      if (parts[parts.length - 1].length === 3 && parts.length > 1) result = parseFloat(clean.replace(/\./g, ''));
      else result = parseFloat(clean);
    } else {
      result = parseFloat(clean);
    }
  }
  return isNaN(result) ? 0 : result;
}

/**
 * Formats a date string to DD MMM YYYY format (e.g., "05 Apr 2024").
 * Handles various input date formats and falls back gracefully.
 * @param {string|null|undefined} dateStr - The date string to format
 * @returns {string} Formatted date string or '?' if empty/invalid
 */
export function formatDisplayDate(dateStr) {
  if (!dateStr) return '?';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;

    const day = d.getDate().toString().padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${month} ${year}`;
  } catch (e) {
    return dateStr;
  }
}

/**
 * Formats a number with comma separators for thousands.
 * @param {string|number} value - The value to format
 * @returns {string} Number with commas (e.g., "1,234,567")
 */
export function formatNumberWithCommas(value) {
  if (!value) return '';
  const numStr = value.toString().replace(/[^0-9]/g, '');
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Removes all non-numeric characters from a formatted number string.
 * @param {string|number|null|undefined} value - The value to parse
 * @returns {string} Digits only
 */
export function parseFormattedNumber(value) {
  if (!value) return '';
  return value.toString().replace(/[^0-9]/g, '');
}

/**
 * Escapes HTML special characters to prevent XSS.
 * @param {string|null|undefined} s - The string to escape
 * @returns {string} Escaped HTML string
 */
export function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Converts a raw assistant message to safe HTML with basic markdown-like formatting.
 * Supports **bold**, *italic*, and line breaks.
 * @param {string} raw - The raw message text
 * @returns {string} HTML-formatted message
 */
export function formatAssistantMessageHtml(raw) {
  const e = escapeHtml(raw);
  return e
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/\*(.+?)\*/g, '<i>$1</i>')
    .replace(/\n/g, '<br/>');
}
