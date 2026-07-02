/**
 * Parse CSV text into an array of project objects.
 * Expected headers: projNumber, projName, customer, pm, status, value, sisaMandays, start, end, subcon, methodology, solusi
 */
export function parseCSVFile(csvText) {
  const lines = csvText.split(/\r?\n/).filter(l => l.trim());
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
  const projects = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length !== headers.length) continue;

    const proj = {};
    headers.forEach((header, idx) => {
      let val = values[idx]?.trim() || '';

      // Normalize field names
      switch (header) {
        case 'projnumber':
        case 'proj_number':
        case 'projectnumber':
        case 'project_number':
        case 'projno':
        case 'project no':
        case 'project no.':
          proj.projNumber = val;
          break;
        case 'projname':
        case 'proj_name':
        case 'projectname':
        case 'project_name':
        case 'name':
        case 'project name':
          proj.projName = val;
          break;
        case 'customer':
        case 'client':
          proj.customer = val;
          break;
        case 'pm':
        case 'project manager':
        case 'project_manager':
          proj.pm = val;
          break;
        case 'status':
          proj.status = normalizeStatus(val);
          break;
        case 'value':
        case 'projectvalue':
        case 'project_value':
        case 'contractvalue':
        case 'contract_value':
          proj.value = parseNumber(val);
          break;
        case 'sisaMandays':
        case 'sisa_mandays':
        case 'mandays':
        case 'sisa':
          proj.sisaMandays = parseNumber(val);
          break;
        case 'start':
        case 'startdate':
        case 'start_date':
        case 'start date':
          proj.start = normalizeDate(val);
          break;
        case 'end':
        case 'enddate':
        case 'end_date':
        case 'end date':
          proj.end = normalizeDate(val);
          break;
        case 'subcon':
        case 'subcontractor':
        case 'sub_contractor':
          proj.subcon = val;
          break;
        case 'methodology':
        case 'method':
          proj.methodology = normalizeMethodology(val);
          break;
        case 'solusi':
        case 'solution':
        case 'sol':
          proj.solusi = val;
          break;
        default:
          // store unknown headers as-is if they match known alternate names
          if (val) proj[header] = val;
      }
    });

    // Only add if essential fields present
    if (proj.projNumber || proj.projName) {
      // Set defaults
      if (!proj.status) proj.status = 'Ongoing';
      if (!proj.value) proj.value = 0;
      if (!proj.sisaMandays) proj.sisaMandays = 0;
      if (!proj.methodology) proj.methodology = 'BAST Only';
      if (!proj.files) proj.files = { sdho: '', mom: '', kickoff: '', report: '' };
      projects.push(proj);
    }
  }

  return projects;
}

/**
 * Parse a single CSV line handling quoted fields with commas.
 */
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);

  // Trim empty trailing fields
  while (result.length > 0 && result[result.length - 1] === '') {
    result.pop();
  }

  return result;
}

function parseNumber(val) {
  const n = Number(String(val).replace(/,/g, ''));
  return isNaN(n) ? 0 : n;
}

function normalizeDate(val) {
  if (!val) return '';
  // Accept YYYY-MM-DD, MM/DD/YYYY, DD/MM/YYYY
  const parts = String(val).split(/[-\/]/);
  if (parts.length === 3) {
    const [a, b, c] = parts;
    // YYYY-MM-DD or YYYY/MM/DD
    if (a.length === 4) return `${a}-${b.padStart(2, '0')}-${c.padStart(2, '0')}`;
    // MM/DD/YYYY → convert
    if (a.length <= 2 && b.length <= 2 && c.length === 4) return `${c}-${a.padStart(2, '0')}-${b.padStart(2, '0')}`;
    // DD/MM/YYYY → convert
    if (a.length <= 2 && b.length <= 2 && c.length === 4) return `${c}-${b.padStart(2, '0')}-${a.padStart(2, '0')}`;
  }
  return val;
}

function normalizeStatus(val) {
  const v = String(val).toLowerCase();
  if (v.includes('ongoing')) return 'Ongoing';
  if (v.includes('complete') || v.includes('done') || v.includes('finished')) return 'Complete';
  if (v.includes('hold') || v.includes('paused')) return 'Hold';
  if (v.includes('maintenance')) return 'Maintenance';
  if (v.includes('belum') || v.includes('sdho')) return 'Belum SDHO';
  if (v.includes('archived')) return 'Archived';
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function normalizeMethodology(val) {
  const v = String(val).toLowerCase();
  if (v.includes('bast')) return 'BAST Only';
  if (v.includes('complex')) return 'Complex';
  if (v.includes('simple')) return 'Simple';
  return val;
}
