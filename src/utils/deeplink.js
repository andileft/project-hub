// Deep link parsing for Project Hub.
// Contract: https://andileft.github.io/project-hub/?proj=<PROJNUMBER>
// The `proj` value is matched against a project's projNumber, exact,
// case-insensitive, with surrounding whitespace ignored.

export const DEEPLINK_PARAM = 'proj';

/**
 * Normalize a raw proj value for comparison: trim + lowercase.
 * @param {unknown} value
 * @returns {string} normalized value, or '' when absent/not a string
 */
export const normalizeProjNumber = (value) => {
  if (value === null || value === undefined) return '';
  return String(value).trim().toLowerCase();
};

/**
 * Read the first `proj` parameter from a URL search string.
 * Unknown / empty parameters are treated as "no parameter".
 * @param {string} [search] - location.search (e.g. "?proj=P26-0847")
 * @returns {string|null} normalized proj number, or null when absent/empty
 */
export const readProjParam = (search) => {
  if (typeof search !== 'string' || search.length === 0) return null;
  let params;
  try {
    params = new URLSearchParams(search);
  } catch (e) {
    return null;
  }
  // getAll keeps duplicates in order; the first one wins.
  const values = params.getAll(DEEPLINK_PARAM);
  if (values.length === 0) return null;
  const normalized = normalizeProjNumber(values[0]);
  return normalized || null;
};

/**
 * Find the project matching a normalized proj number.
 * @param {Array<object>} projects
 * @param {string} projNumber - normalized value from readProjParam
 * @returns {object|null} the matching project, or null
 */
export const findProjectByProjNumber = (projects, projNumber) => {
  if (!projNumber || !Array.isArray(projects)) return null;
  return projects.find(p => normalizeProjNumber(p.projNumber) === projNumber) || null;
};
