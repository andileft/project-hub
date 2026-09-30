/**
 * Helpers for project solution values.
 *
 * A project's `solusi` field can hold several solutions separated by commas,
 * e.g. "cisco, hpe". These helpers split that into individual, cleaned values.
 */

/**
 * Splits a solusi string into individual solution values.
 * Trims each value, drops empties, and de-duplicates case-insensitively
 * (keeping the original casing of the first occurrence).
 * @param {string|null|undefined} solusi - Raw solusi value
 * @returns {string[]} Individual solution values
 */
export function splitSolutions(solusi) {
  if (!solusi) return [];
  const seen = new Set();
  const out = [];
  String(solusi)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((s) => {
      const key = s.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        out.push(s);
      }
    });
  return out;
}

/**
 * Builds a de-duplicated, alphabetically sorted list of every individual solution
 * across the given projects.
 * @param {Array<object>} projects - Project records
 * @returns {string[]} Sorted unique solution values (original casing preserved)
 */
export function collectSolutionOptions(projects) {
  const byLower = new Map();
  (projects || []).forEach((p) => {
    splitSolutions(p?.solusi).forEach((s) => {
      const key = s.toLowerCase();
      if (!byLower.has(key)) byLower.set(key, s);
    });
  });
  return [...byLower.values()].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

/**
 * Returns true when any of the project's individual solutions equals the filter value.
 * Comparison is case-insensitive.
 * @param {string|null|undefined} solusi - Raw solusi value
 * @param {string} filterValue - Selected solution filter value
 * @returns {boolean}
 */
export function matchesSolution(solusi, filterValue) {
  const target = (filterValue || '').trim().toLowerCase();
  if (!target) return true;
  return splitSolutions(solusi).some((s) => s.toLowerCase() === target);
}
