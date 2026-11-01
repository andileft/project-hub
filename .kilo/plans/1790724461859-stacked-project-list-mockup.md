# Promote the stacked + grouped list to the app as the default (with a Classic toggle)

## Goal
Make the List tab use the **new look** (compact stacked rows + grouping) **by default**, and add a header icon
button (next to the night-mode toggle) to switch back to today's **Classic** list. Also apply the Solusi
multi-value behaviour in the real app.

The mockup phase is done; this plan promotes that look into the app. Implementation requires an
implementation-capable agent (this plan was produced in plan mode).

## Current state (verified)
- New look exists only in the standalone `mockups/stacked-project-list-mockup.html` (to be deleted).
- List rendering: `src/App.jsx:650-676` — `FilterBar` + one full `components/ProjectCard.jsx` per project.
- Header theme/logout buttons: `components/Header.jsx:82-91`; nav tabs at `components/Header.jsx:35-50`.
- Filter options + filtering: `src/App.jsx:119-173`; Solution dropdown consumes `filterOptions.solutions` in
  `components/FilterBar.jsx:44`; Solution filter is exact-match at `src/App.jsx:156`.
- Project sort within a group already handled at `src/App.jsx:269` (projNumber desc).
- Reusable helpers: `utils/formatting.js` (`getStatusClasses`, `formatShortCurrency`, `safeParseFloat`),
  `utils/parsers.js`. No `hooks/` dir yet (Tailwind content already includes `./hooks/**`).
- `components/ProjectCard.jsx:237` root shell + `onClick={() => onEdit(project)}`.

## Locked decisions
- Default view = **New**. Toggle lives in the Header, **icon-only + tooltip**, only on the List tab.
- Toggle icons: `LayersIcon` (New/grouped) and `Rows3Icon` (Classic). Button shows the mode you switch **to**;
  tooltip "Classic view" / "New view".
- Separate **Group-by toolbar** above the `FilterBar`: `None | Status | Customer | PM | Solusi` +
  `Expand groups` / `Collapse groups`. Only rendered in New.
- Default **Group by = Status**. Groups open by default; cards collapsed.
- Persist `viewMode` and `groupBy` in localStorage.
- On group-by change: reset expanded cards **and** collapsed groups.
- Solusi multi-value: split on `,` (trim, drop empty, case-insensitive de-dup, keep original casing).
  Applies to **group by Solusi** and to the **Solution filter** (options become single values; a project matches
  if any of its values equals the selected one, case-insensitive).
- Delete `mockups/stacked-project-list-mockup.html` (and the empty `mockups/` folder).

## Compact row field matrix (New view)
Base fields: **Proj No · Proj Name · Customer · PM · Value · Mandays**. No status badge (status shows via the
left `border-l-4` stripe from `getStatusClasses`).
- Group by **Customer** → hide Customer. Group by **PM** → hide PM. Group by **Status/Solusi** → hide nothing.
- Colors consistent everywhere: **value = indigo, mandays = emerald**, no `md` suffix; mandays via
  `Number(safeParseFloat(x)).toLocaleString('id-ID')`.

## Grouping rules
- `None` → flat rows, no group headers.
- `Status` → fixed order `Ongoing, Maintenance, Belum SDHO, Done, Archived`, then unknown; A→Z tiebreak.
- `Customer` / `PM` / `Solusi` → A→Z case-insensitive, empty-value group last.
- `Solusi` → a project with multiple values appears in **each** matching group.
- Group header shows: label + project count + Σ `safeParseFloat(value)` (`formatShortCurrency`) +
  Σ `safeParseFloat(sisaMandays)` (`toLocaleString`).
- Empty labels: `(No Status)`, `(No Customer)`, `(Unassigned PM)`, `(No Solution)`.

## Files

New:
- `utils/solutions.js` → `splitSolutions(value)`
- `hooks/useMorph.js` → `useMorph(open)` → `{ mounted, shown }`
- `components/Morph.jsx` → animated `grid-template-rows: 0fr ↔ 1fr` wrapper (300ms, lazy-mount, opacity fade,
  `aria-hidden`, `pointer-events-none` while hidden)
- `components/ProjectRow.jsx` → the morphing card shell + internal `CompactRow`
- `components/GroupedProjectList.jsx` → grouping, group headers, collapsible bodies via `Morph`
- `components/ListViewToolbar.jsx` → Group by selector + Expand/Collapse groups

Modified:
- `components/ProjectCard.jsx` → add `embedded = false` prop
- `components/Header.jsx` → add `viewMode` / `onToggleViewMode` + toggle button
- `components/Icons.jsx` → add `Rows3Icon`, `LayersIcon` (+ `default` export map)
- `components/index.js` → export `ProjectRow`, `GroupedProjectList`, `ListViewToolbar` (`Morph` may stay internal)
- `src/App.jsx` → state, persistence, filtering, render branches

Deleted:
- `mockups/stacked-project-list-mockup.html` (+ empty `mockups/`)

## Implementation steps (ordered)
1. `utils/solutions.js`: add `splitSolutions(solusi)` (port from the mockup).
2. `hooks/useMorph.js` + `components/Morph.jsx`: port the mockup's shared morph logic. `Morph` takes `open` +
   `children`; children mount on first open and stay mounted.
3. `components/ProjectCard.jsx`: add `embedded = false`. When truthy, root becomes
   `p-5 group relative flex flex-col gap-4` (drop `bg-*`, `border*`, `rounded-xl`, `border-l-4 ${statusStyle.border}`,
   `cursor-pointer`) and keep `onClick={() => onEdit(project)}`. When falsy, keep today's classes exactly.
4. `components/ProjectRow.jsx`: port `CompactRow` + `ProjectRow` from the mockup.
   Props: `{ project, groupBy, expanded, onToggle, isAdmin, onEdit, onDelete }`. Compact layer uses the
   `expanded ? '0fr' : '1fr'` grid; full card sits in a `<Morph open={expanded}>` and is rendered as
   `<ProjectCard embedded ... />`; include the small `Collapse` button above the full card.
5. `components/GroupedProjectList.jsx`: port `buildGroups` + group header + `<Morph open={!collapsed}>` body.
   Props: `{ projects, groupBy, expandedIds, onToggleCard, collapsedGroups, onToggleGroup, isAdmin, onEdit, onDelete }`.
6. `components/ListViewToolbar.jsx`: props `{ groupBy, onGroupByChange, onExpandAll, onCollapseAll }`. Segmented
   `None/Status/Customer/PM/Solusi` + Expand/Collapse groups buttons.
7. `components/Icons.jsx`: add `Rows3Icon` (classic list) and `LayersIcon` (stacked/grouped) and include them in
   the `default` export object (names are implementer's choice).
8. `components/index.js`: export the new components.
9. `components/Header.jsx`: add `viewMode`, `onToggleViewMode` props; render the icon button immediately before the
   theme button (`components/Header.jsx:82`), only when `activeTab === 'list'`; `title` = "Classic view" /
   "New view"; icon = mode you switch to.
10. `src/App.jsx`:
    - localStorage helpers with `try/catch`: read `ph_view_mode` (default `'new'`) and `ph_group_by` (default
      `'status'`); write on change via effects.
    - state: `viewMode`, `groupBy`, `expandedIds` (Set), `collapsedGroups` (Set).
    - effect: when `groupBy` changes → `setExpandedIds(new Set())` and `setCollapsedGroups(new Set())`.
    - `filterOptions.solutions`: build from `splitSolutions` (Map lowercase→original, sorted A→Z case-insensitive).
    - `filteredProjects` Solution check → `splitSolutions(p.solusi).some(s => s.toLowerCase() === filters.solution.trim().toLowerCase())`.
    - List render: always `FilterBar`; `viewMode === 'classic'` → today's `flex flex-col gap-6` of `ProjectCard`;
      otherwise render `ListViewToolbar` + `GroupedProjectList`. Keep the existing loading skeleton, error and
      empty states (`src/App.jsx:663-675`).
    - Compute `groupKeys` (via `buildGroups`) for `Collapse all`; wire `expandAllGroups` / `collapseAllGroups` /
      `toggleCard` / `toggleGroup`.
    - Pass `viewMode` + `onToggleViewMode` to `Header`.
11. Delete `mockups/stacked-project-list-mockup.html` and the now-empty `mockups/` directory.

## Edge cases
- localStorage unavailable/blocked → try/catch, fall back to defaults (`new` / `status`).
- Solution values with extra spaces, empty segments, or case-only differences → trimmed + de-duped.
- Missing/`null` `solusi` → only in the `(No Solution)` group; excluded when a Solution filter is active.
- Legacy string `value` / `sisaMandays` → always via `safeParseFloat`.
- An expanded id that gets filtered out → harmless (row just isn't rendered).
- Group collapsed while it contains an expanded row → row stays mounted and reopens expanded.
- `Classic` must be byte-for-byte today's list rendering (no toolbar, no grouping).

## Out of scope
- Dashboard tab, `ProjectModal`, CSV import, AI/chat, Firebase/Security Rules.
- `components/FilterBar.jsx` markup is unchanged (options still arrive via `filterOptions`); only `App.jsx`
  changes how Solution options and matching work.

## Validation
- `npm run lint` and `npm run build` must pass.
- Manual: login → List opens on New + Group by Status; group headers show correct count / Σvalue / Σmandays;
  group expand/collapse animates; row expand morphs in place and the Collapse button returns it; Classic toggle
  switches the list and survives reload; Group by choice survives reload; a project with `"cisco, hpe"` appears in
  both Solusi groups and matches a `cisco` filter; Solution dropdown lists single values only; a PM-role user still
  sees only their own projects; admin Edit modal still opens from an expanded card; filter/search/empty states work
  in both modes; dark mode OK; Dashboard unaffected.
