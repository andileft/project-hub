# Plan: Add "View Financial Performance" Button to ProjectCard

## Goal

Add one icon-only button (chart icon) to each project card that opens the project's financial performance dashboard in a new tab:

```
https://data-center-performance-dashboard-700684111556.us-west1.run.app/?screen=project&projectNo=<projNumber>
```

Placed immediately to the **right of the existing "View Financials" button** (the icon-only toggle, `title="View Financials"`), i.e. between it and the CPC badge button.

## Context (verified in code)

- App: React (Vite). Card button cluster: `components/ProjectCard.jsx:270-326`.
- "View Financials" toggle button: `components/ProjectCard.jsx:278-284`. New button inserts right after it (before the CPC button at line 285).
- Icons: hand-copied lucide SVGs in `components/Icons.jsx`. **`BarChart3Icon` already exists** (defined `Icons.jsx:667-686`, exported in default object at `Icons.jsx:816`) — paths: `M3 3v18h18`, `M18 17V9`, `M13 17V5`, `M8 17v-3`. No new icon component needed; just import it.
- New-tab precedent to copy: `handleGoToTechHub` (`components/ProjectCard.jsx:157-165`) — `window.open(url, '_blank', 'noopener,noreferrer')` with `encodeURIComponent(project.projNumber)`.
- Extension-driven buttons use `window.postMessage` instead: CPC (`GO_TO_CPC`, :91), SIMPLIFY (`GO_TO_SIMPLIFY`, :103), ISERVE (`GO_TO_ISERVE`, :115), Financials badge (`GO_TO_DASHBOARD`, :127), plus "Scrape Team" (`GO_TO_TEAM_SCRAPE`, :139) and "Scrape Financials" (`GO_TO_FINANCIALS_SCRAPE`, :151) inside panels. The new button deliberately follows the Tech Hub direct-URL pattern, not the postMessage pattern.
- Project number source: `project.projNumber` (prop). Format e.g. `PRJ-202X-XXX`.
- Card is clickable → every button handler must `e.stopPropagation()`.
- Prototype mirror: `sample/index.html` duplicates the card code inline (handlers `~586-629`, button cluster `~740-789`) using raw lucide SVG markup instead of icon components. Keep it in sync.

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Anchor button for placement | "View Financials" toggle (`title="View Financials"`), not the "Go to Financials" badge | **Confirmed by user**: new button goes immediately to the right of the View Financials toggle, before the CPC badge |
| Icon | Existing `BarChart3Icon` (lucide bar-chart-3) | Matches "gambar chart aja"; zero new code in Icons.jsx |
| Open behavior | `window.open(url, '_blank', 'noopener,noreferrer')` | Same pattern as Tech Hub button; new tab per request |
| Button style | Icon-only, `p-2` like View Team / View Financials, neutral base + **violet** hover | Distinct hover accent (emerald = financials, indigo = team already used); consistent cluster styling |
| Missing projNumber | `alert("Project number is missing for this card.")` guard | Identical to all sibling handlers |
| URL param | `projectNo=${encodeURIComponent(project.projNumber)}` | Dashboard URL names it `projectNo` (same convention as Tech Hub link) |
| Prototype sync | Update `sample/index.html` too | **Confirmed by user**; repo keeps the static prototype mirrored with the app |
| Extension buttons on mobile | Hide all **6** postMessage buttons below the `lg` breakpoint via `hidden lg:flex` | **Confirmed by user**: extension-driven buttons are useless on phones. `lg` is the card's existing desktop breakpoint (`flex-row lg:flex-col`, `flex-1 lg:flex-none`) |
| Extension buttons on touch devices | Additionally `[@media(pointer:coarse)]:!hidden` on the same 6 buttons | **Confirmed by user** ("hide based on pointer: coarse"): tablets landscape ≥1024px (incl. iPad Pro 12.9") must also hide them since the Chrome extension cannot run on tablet/phone browsers. Primary-pointer based, so touchscreen laptops (`pointer: fine`) are unaffected; deliberately NOT using `any-pointer` |

## Tasks

### 1. `components/ProjectCard.jsx`

a. **Import** — add `BarChart3Icon` to the icon import block (lines 5-26), e.g. after `BanknoteIcon` (line 13).

b. **Handler** — add after `handleGoToTechHub` (after line 165):

```jsx
const handleViewPerformance = (e) => {
  e.stopPropagation();
  if (!project.projNumber) {
    alert("Project number is missing for this card.");
    return;
  }
  const url = `https://data-center-performance-dashboard-700684111556.us-west1.run.app/?screen=project&projectNo=${encodeURIComponent(project.projNumber)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};
```

c. **Button JSX** — insert immediately after the View Financials button (after line 284), before the CPC button:

```jsx
<button
  onClick={handleViewPerformance}
  className="p-2 rounded-lg transition-all flex items-center justify-center gap-1 flex-1 lg:flex-none bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-violet-600 hover:bg-violet-50 border border-slate-100 dark:border-slate-800"
  title="View Financial Performance"
>
  <BarChart3Icon className="h-4 w-4" />
</button>
```

d. **Hide extension-driven buttons on mobile** — pure CSS, no JS. Replace the base `flex` with `hidden lg:flex` in the className of all 6 postMessage buttons (keep the rest of each class string intact, incl. `flex-1 lg:flex-none` and the `isAdmin &&` wrappers):
   - CPC badge (`:285-291`), SIMPLIFY badge (`:292-298`), ISERVE badge (`:299-307`), Financials badge (`:308-316`) — pattern: `className="p-1 bg-slate-50 dark:bg-slate-900 hover:bg-... border border-slate-100 dark:border-slate-800 rounded-lg transition-all hidden lg:flex items-center justify-center flex-1 lg:flex-none"`
   - Scrape Financials (`:434-441`) and Scrape Team (`:499-506`) — `className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-emerald-50 / bg-indigo-50 ..."` (keep each button's own colors)
   - Result on mobile: header row keeps only View Team, View Financials, chart (new), TECH — 4 evenly sized buttons.

### 2. `sample/index.html` (prototype parity)

a. **Handler** — add `handleViewPerformance` after `handleGoToTechHub` (after line 629), same code as above.

b. **Button** — insert after the View Financials button (after line 749), before the CPC button. Match the file's local style: `p-2 rounded-lg ... hover:bg-violet-50 hover:text-violet-600 border border-slate-100` (no dark: variants — sample is light-only) and inline raw lucide SVG:

```html
<button
    onClick={handleViewPerformance}
    className="p-2 rounded-lg transition-all flex items-center justify-center gap-1 flex-1 lg:flex-none bg-slate-50 text-slate-400 hover:text-violet-600 hover:bg-violet-50 border border-slate-100"
    title="View Financial Performance"
>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>
</button>
```

c. **Hide extension-driven buttons on mobile** — mirror the same class changes for the 6 buttons: CPC (~`750-756`), SIMPLIFY (~`757-763`), ISERVE (~`764-772`), Financials badge (~`773-781`), Scrape Financials (~`857-863`), Scrape Team (~`922-928`). Same `flex` → `hidden lg:flex` swap (sample classes have no `dark:` variants).

## Validation

1. `npm run build` (or dev server) — no import/lint errors.
2. Open a card with a project number: chart button appears immediately right of the banknote "View Financials" button, before CPC.
3. Click it → new tab opens to `.../?screen=project&projectNo=PRJ-...` with the correct encoded project number; card's outer click handler does not fire.
4. On a card missing `projNumber`: click shows the alert, no navigation.
5. Dark mode: button shows dark variants correctly.
6. `sample/index.html` opened statically: same button renders with inline SVG.
7. Mobile width (<1024px): CPC, SIMPLIFY, ISERVE, Financials badge, Scrape Financials, and Scrape Team are not rendered; header row shows only Team / Financials / chart / TECH. At ≥1024px (`lg`) all 6 buttons reappear.

## Out of scope

- Any change to the browser-extension postMessage flow (`GO_TO_DASHBOARD`) — untouched.
- Loading spinner state on the new button (it's a plain link-open, no async work).