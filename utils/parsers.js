/**
 * Parsing utilities for extracting text from files, parsing project notes,
 * and importing CSV project data.
 */

/**
 * Extracts raw text from PDF, DOCX, TXT, CSV, MD, or JSON files.
 * Requires pdf.js and mammoth.js to be loaded on the page for PDF/DOCX support.
 * @param {File} file - The file object to extract text from
 * @returns {Promise<string>} Extracted text content
 */
export async function extractTextFromFile(file) {
  const extension = file.name.split('.').pop().toLowerCase();
  let text = '';
  try {
    if (extension === 'pdf') {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map(item => item.str).join(' ') + ' ';
      }
    } else if (extension === 'docx') {
      const arrayBuffer = await file.arrayBuffer();
       const result = await window.mammoth.extractRawText({ arrayBuffer });
      text = result.value;
    } else if (['txt', 'csv', 'md', 'json'].includes(extension)) {
      text = await file.text();
    }
    console.log('Extracted text length:', text.length);
    return text;
  } catch (err) {
    console.error('Extraction error:', err);
    return 'Error during extraction: ' + err.message;
  }
}

/**
 * Normalizes various date string formats to "DD MMM YYYY" format (e.g., "05 Apr 2024").
 * Handles ISO dates (YYYY-MM-DD), "YYYY-Mon-DD", and "DD Mon YYYY" patterns.
 * @param {string} raw - The raw date string
 * @returns {string} Normalized date string
 */
export function normalizeDate(raw) {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const months = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
  };

  const formatLabel = (y, m, d, prefix) => {
    const mon = monthNames[parseInt(m) - 1];
    const dd = String(parseInt(d)).padStart(2, '0');
    return prefix ? `${y}-${mon}-${dd} ${prefix.trim()}` : `${y}-${mon}-${dd}`;
  };

  let m = raw.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (m) return formatLabel(m[1], m[2], m[3]);
  m = raw.match(/(\d{4})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-(\d{1,2})/i);
  if (m) {
    const monthKey = m[2].charAt(0).toUpperCase() + m[2].slice(1).toLowerCase();
    return formatLabel(m[1], months[monthKey], m[3]);
  }
  m = raw.match(/(\d{1,2})\s*(?:-|\s)\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(?:-|\s)\s*(\d{4})/i);
  if (m) {
    const monthKey = m[2].charAt(0).toUpperCase() + m[2].slice(1).toLowerCase();
    return formatLabel(m[3], months[monthKey], m[1]);
  }
  return raw;
}

/**
 * Parses project update notes from a note string, grouping content by dated headers.
 * Returns an array of update groups with dates and text content.
 * Identifies headers using regex patterns like [Updated], [YYYY-Mon-DD], or natural dates.
 * @param {string} noteText - The raw note text
 * @returns {Array<{date: string|null, text: string}>} Array of parsed note groups
 */
export function parseNoteUpdates(noteText) {
  if (!noteText) return [];

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const months = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
  };

  const formatLabel = (y, m, d, prefix) => {
    const mon = monthNames[parseInt(m) - 1];
    const dd = String(parseInt(d)).padStart(2, '0');
    return prefix ? `${y}-${mon}-${dd} ${prefix.trim()}` : `${y}-${mon}-${dd}`;
  };

  const _normalizeDate = (raw) => {
    let match = raw.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (match) return formatLabel(match[1], match[2], match[3]);
    match = raw.match(/(\d{4})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-(\d{1,2})/i);
    if (match) {
      const monthKey = match[2].charAt(0).toUpperCase() + match[2].slice(1).toLowerCase();
      return formatLabel(match[1], months[monthKey], match[3]);
    }
    match = raw.match(/(\d{1,2})\s*(?:-|\s)\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(?:-|\s)\s*(\d{4})/i);
    if (match) {
      const monthKey = match[2].charAt(0).toUpperCase() + match[2].slice(1).toLowerCase();
      return formatLabel(match[3], months[monthKey], match[1]);
    }
    return raw;
  };

  // Regex matches: [Updated], [YYYY-Mon-DD], [DD-Mon-YYYY], plain dates, (date), etc.
  const headerRegex = /\[Updated[^\]]*\]|\[\d{4}-(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-\d{1,2}\]|\[\d{1,2}-(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-\d{4}\]|(?:Update\s+(?:per\s+)?)?\b\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}\b|\(\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}\)|\(\d{1,2}-(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-\d{4}\)|\b\d{4}-(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-\d{1,2}\b/gi;

  const parts = [];
  let lastIdx = 0;
  let match;

  while ((match = headerRegex.exec(noteText)) !== null) {
    // Skip if preceded by "W" + digit (e.g., "W5") - likely a week label, not a date
    const before = noteText.slice(Math.max(0, match.index - 3), match.index);
    if (/W\d$/.test(before)) continue;

    if (match.index > lastIdx) {
      parts.push({ date: null, text: noteText.slice(lastIdx, match.index).trim() });
    }

    const hdrEnd = match.index + match[0].length;
    const nextHdrIdx = noteText.slice(hdrEnd).search(headerRegex);
    const contentEnd = nextHdrIdx !== -1 ? hdrEnd + nextHdrIdx : noteText.length;
    const label = match[0];

    let y, m, d;
    const m1 = label.match(/(\d{4})-(\d{2})-(\d{2})/);
    const m2 = label.match(/(\d{4})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-(\d{1,2})/i);
    const m3 = label.match(/(\d{1,2})\s*(?:-|\s)\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(?:-|\s)\s*(\d{4})/i);
    if (m1) { y = m1[1]; m = m1[2]; d = m1[3]; }
    else if (m2) { y = m2[1]; m = m2[2]; d = m2[3]; }
    else if (m3) { y = m3[3]; m = m3[2]; d = m3[1]; }

    const text = noteText.slice(hdrEnd, contentEnd).trim();
    if (y) {
      const mn = monthNames[parseInt(months[m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()] || m) - 1] || m;
      parts.push({ date: `${y}-${mn}-${String(parseInt(d)).padStart(2, '0')}`, text });
    } else {
      parts.push({ date: _normalizeDate(label), text });
    }
    lastIdx = contentEnd;
  }

  if (lastIdx < noteText.length) {
    parts.push({ date: null, text: noteText.slice(lastIdx).trim() });
  }

  // Merge any text-only section that precedes a dated section
  const merged = [];
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].date === null && i + 1 < parts.length && parts[i + 1].date !== null) {
      merged.push({ date: parts[i + 1].date, text: parts[i].text + ' ' + parts[i + 1].text });
      i++;
    } else {
      merged.push(parts[i]);
    }
  }

  return merged.filter(p => p.text);
}

/**
 * Parses CSV text into an array of project objects.
 * Uses intelligent column mapping based on keyword matching.
 * @param {string} csvText - Raw CSV file content
 * @returns {Array<object>} Array of project data objects with numeric fields parsed
 */
export function parseCSVFile(csvText) {
  const lines = csvText.split('\n');
  if (lines.length < 2) return [];

  const firstLine = lines[0];
  const delimiter = firstLine.includes(';') ? ';' : ',';
  const rawHeaders = firstLine.split(delimiter).map(h => h.trim().toLowerCase().replace(/[^a-z0-9]/g, ''));

  const findIdx = (keywords) => {
    for (const k of keywords) {
      const idx = rawHeaders.findIndex(h => h.includes(k));
      if (idx !== -1) return idx;
    }
    return -1;
  };

  const idxMap = {
    id: findIdx(['uuid', 'uid']),
    projNumber: findIdx(['projectno', 'projno', 'projnumber', 'projectid', 'projid', 'nomor', 'number', 'code']),
    projName: findIdx(['projectname', 'projname', 'nama', 'title', 'name', 'description', 'activity', 'project']),
    customer: findIdx(['customer', 'client', 'partner', 'pt', 'cv']),
    pm: findIdx(['pm', 'manager', 'pic', 'lead']),
    status: findIdx(['status', 'state', 'stage']),
    value: findIdx(['value', 'nilai', 'amount', 'price', 'rp', 'budget', 'cost', 'total']),
    sisaMandays: findIdx(['manday', 'sisa', 'resource', 'man']),
    start: findIdx(['start', 'mulai', 'begin', 'date']),
    end: findIdx(['end', 'selesai', 'finish', 'close']),
    solusi: findIdx(['solution', 'solusi', 'tech']),
    subcon: findIdx(['subcon', 'subcontractor', 'vendor', 'contractor', 'partner', 'third']),
    methodology: findIdx(['methodology', 'type', 'category']),
    note: findIdx(['note', 'remark', 'desc', 'catatan'])
  };

  const cleanNumber = (str) => {
    if (!str) return 0;
    return parseInt(str.replace(/[^0-9]/g, '')) || 0;
  };

  const projects = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = line.split(delimiter).map(v => v.trim().replace(/^"|"$/g, ''));
    if (values.length < 2) continue;

    const getValue = (key) => {
      const idx = idxMap[key];
      return idx !== -1 && idx < values.length ? values[idx] : '';
    };

    const rawProjNumber = getValue('projNumber');
    if (!rawProjNumber || rawProjNumber === 'NO-ID' || rawProjNumber.length < 1) {
      continue;
    }

    projects.push({
      projNumber: rawProjNumber,
      projName: getValue('projName') || 'Untitled Project',
      customer: getValue('customer') || 'Unknown Client',
      pm: getValue('pm'),
      status: getValue('status') || 'Ongoing',
      value: cleanNumber(getValue('value')),
      sisaMandays: cleanNumber(getValue('sisaMandays')),
      start: getValue('start'),
      end: getValue('end'),
      solusi: getValue('solusi'),
      subcon: getValue('subcon'),
      methodology: getValue('methodology') || 'BAST Only',
      note: getValue('note')
    });
  }

  return projects;
}
