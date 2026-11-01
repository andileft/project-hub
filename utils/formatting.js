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
 * Returns the New-design status chip class for a given project status.
 * Works with the `.ph-status` primitive (wine/orange design system).
 * @param {string} status - The project status
 * @returns {string} `ph-status ph-status--*` class string
 */
export function getStatusChipClass(status) {
  switch (status) {
    case 'Ongoing': return 'ph-status ph-status--ongoing';
    case 'Maintenance': return 'ph-status ph-status--maintenance';
    case 'Belum SDHO': return 'ph-status ph-status--belum';
    case 'Done': return 'ph-status ph-status--done';
    default: return 'ph-status ph-status--archived';
  }
}

/**
 * Returns the New-design status dot color (CSS var) for grouping headers.
 * @param {string} status - The project status
 * @returns {string} CSS color value
 */
export function getStatusDotColor(status) {
  switch (status) {
    case 'Ongoing': return 'var(--blue)';
    case 'Maintenance': return 'var(--wine)';
    case 'Belum SDHO': return 'var(--amber)';
    case 'Done': return 'var(--green)';
    default: return 'var(--muted-2)';
  }
}

/**
 * Formats a number as short value (B for billions, M for millions) without a currency prefix.
 * Mirrors formatShortCurrency so values and counters (e.g. mandays) share one style.
 * @param {number} val - The value to format
 * @returns {string} Formatted string (e.g., "1.5B", "2.3M", "1,234")
 */
export function formatShortNumber(val) {
  if (val >= 1e9) return `${(val / 1e9).toFixed(1)}B`;
  if (val >= 1e6) return `${(val / 1e6).toFixed(1)}M`;
  return `${val?.toLocaleString()}`;
}

/**
 * Formats a number as short currency (B for billions, M for millions).
 * @param {number} val - The value to format
 * @returns {string} Formatted currency string (e.g., "Rp 1.5B", "Rp 2.3M", "Rp 1,234")
 */
export function formatShortCurrency(val) {
  return `Rp ${formatShortNumber(val)}`;
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
 * Inline markdown (already-escaped input): `**bold**`, `*italic*`, `` `code` ``.
 */
function formatInline(text) {
  return text
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/(^|[^*])\*([^*]+?)\*/g, '$1<i>$2</i>');
}

const isTableSeparator = (line) =>
  /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(line);

const splitRow = (line) =>
  line.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map((c) => c.trim());

/**
 * Converts a raw assistant message to safe HTML. Handles the markdown the
 * assistant actually emits: **bold**, *italic*, `code`, fenced code blocks,
 * # headings, - / 1. lists, GitHub-style pipe tables, and line breaks.
 * @param {string} raw - The raw message text
 * @returns {string} HTML-formatted message
 */
export function formatAssistantMessageHtml(raw) {
  const lines = escapeHtml(raw).split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (/^\s*```/.test(line)) {
      const buf = [];
      i++;
      while (i < lines.length && !/^\s*```/.test(lines[i])) { buf.push(lines[i]); i++; }
      i++; // skip closing fence
      out.push(`<pre><code>${buf.join('\n')}</code></pre>`);
      continue;
    }

    // Pipe table: header row + separator row
    if (line.includes('|') && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      const header = splitRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
        rows.push(splitRow(lines[i]));
        i++;
      }
      const head = header.map((c) => `<th>${formatInline(c)}</th>`).join('');
      const body = rows
        .map((r) => `<tr>${r.map((c) => `<td>${formatInline(c)}</td>`).join('')}</tr>`)
        .join('');
      out.push(`<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`);
      continue;
    }

    // Heading
    const h = line.match(/^\s*(#{1,6})\s+(.*)$/);
    if (h) {
      const level = Math.min(h[1].length + 2, 6);
      out.push(`<h${level}>${formatInline(h[2])}</h${level}>`);
      i++;
      continue;
    }

    // Unordered / ordered list (consecutive items)
    if (/^\s*([-*+]|\d+\.)\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      const items = [];
      while (i < lines.length && /^\s*([-*+]|\d+\.)\s+/.test(lines[i])) {
        items.push(`<li>${formatInline(lines[i].replace(/^\s*([-*+]|\d+\.)\s+/, ''))}</li>`);
        i++;
      }
      out.push(ordered ? `<ol>${items.join('')}</ol>` : `<ul>${items.join('')}</ul>`);
      continue;
    }

    // Blank line
    if (line.trim() === '') { out.push(''); i++; continue; }

    // Regular paragraph line
    out.push(formatInline(line));
    i++;
  }

  // Join: keep table/list/pre blocks as-is, turn remaining newlines into <br/>.
  return out
    .join('\n')
    .replace(/\n(?=<(table|ul|ol|pre|h[1-6]))/g, '')
    .replace(/(<\/(table|ul|ol|pre|h[1-6])>)\n/g, '$1')
    .replace(/\n/g, '<br/>');
}
