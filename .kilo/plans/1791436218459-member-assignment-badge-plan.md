# Badge "Member Assignment" di Project Card

## Goal

Tambahkan 1 badge baru tepat di sebelah badge **Sisa Budget Labor** pada kartu proyek.
Badge ini adalah lampu on/off kondisi **member assignment** proyek:

- **Nyala** bila ada minimal satu member di subcollection `projects/{id}/team` yang assignment-nya valid saat ini.
- **Mati** bila tidak ada member dengan assignment yang valid saat ini.

Sumber data = subcollection `team` yang sudah dipakai tabel *Assigned Team Members* di
`components/ProjectCard.jsx:513-591` (field per dokumen: `wbs`, `fullWbs`, `npk`, `name`, `role`,
`start`, `end`, `mandays`, `type`). Tidak perlu data lain.

## Decisions (sudah dikonfirmasi user)

1. **Definisi valid**: hari ini berada dalam rentang `start`..`end` (inklusif, granularitas hari).
2. **Fallback**: bila `start` dan `end` dua-duanya kosong/tidak bisa diparse → baris dianggap **valid**
   (jangan sampai lampu salah mati hanya karena tanggal tidak terbaca). Bila salah satu bisa diparse,
   bound yang ada dipakai (yang kosong = tak terbatas).
3. **Bentuk badge** (kreativitas bebas, ditetapkan di plan ini): icon `UserCheckIcon` (sudah ada di
   `components/Icons.jsx:690`, berbeda dari `UserIcon` milik badge labor) yang **berubah warna** —
   emerald + pill latar lembut saat nyala, slate redup saat mati (tanpa dot tambahan supaya tidak
   tumpang-tindih makna dengan dot badge labor). Tooltip native `title` menjelaskan alasan.
4. **Penempatan**:
   - `components/ProjectCard.jsx`: tepat setelah `<LaborBudgetBadge .../>` di baris header (baris ~247).
   - `components/ProjectRow.jsx` `CompactRow`: tepat setelah `<LaborBudgetBadge .../>` (baris ~55),
     sebelum chevron.
5. **Independen dari status proyek** — hanya melihat team subcollection, bukan `project.status`.
6. **Fetch per project**, cache module-level + batas paralel (pola sama seperti `useLaborBudgets`),
   tanpa perubahan Firestore/index/rules. Hook labor **tidak diubah** (menghindari regresi).

## Verified facts

- Badge labor: `components/LaborBudgetBadge.jsx`; hook: `hooks/useLaborBudgets.js` (cache Map +
  listeners + queue paralel 8, `fetch` => `getDocs(query(...))`).
- Wiring labor yang akan ditiru: `src/App.jsx:208` (`useLaborBudgets`), `756` (classic),
  `770` (stacked), `components/GroupedProjectList.jsx:99,142`, `components/ProjectRow.jsx:19,55,64,74,96`,
  `components/ProjectCard.jsx:30,247`.
- `utils/firebase.js` mengekspor `collection`, `getDocs`, `db`, `COLLECTION_PATH`.
- `React.memo` dipakai di `ProjectCard`/`ProjectRow`/badge → entry cache harus mempertahankan identitas objek.
- Filter view memakai `filteredProjects` (`src/App.jsx:164-205`); badge hanya untuk proyek yang tampil.

## Implementation

### 1. `hooks/useMemberAssignments.js` (baru) — tiru pola `useLaborBudgets.js`

Signature: `useMemberAssignments(projects) => { [project.id]: { state, total, active } }`

- Module-level `cache = new Map()`, `listeners = new Set()`, `queue = []`, `active = 0`, `MAX_PARALLEL = 8`
  (persis pola hook labor). Entry identitas dipertahankan; id yang sudah di-cache tidak di-fetch lagi.
- Fetch per project: `getDocs(collection(db, COLLECTION_PATH, id, 'team'))` → ambil `docs.map(d => d.data())`.
  (Subcollection kecil; baca penuh, bukan query terfilter.)
- Hitung:
  - `total` = jumlah **NPK unik** (fallback key `name` / `wbs-start-end` / index bila `npk` kosong).
  - `active` = jumlah NPK unik yang punya minimal satu baris valid.
  - 0 baris → `{ state:'ready', total:0, active:0 }`.
  - Gagal fetch → `{ state:'error', total:0, active:0 }` + `console.warn` (JANGAN `alert()`).
- Parser tanggal toleran (satu fungsi lokal):
  - terima Firestore Timestamp (`toDate()`), ISO `yyyy-mm-dd`, `dd-MMM-yyyy` / `dd MMM yyyy`,
    `MMM dd yyyy`, dan `dd/mm/yyyy`/`dd-mm-yyyy` (day-first, locale Indonesia). Tahun 2 digit → 2000+.
  - kembalikan `Date` di local midnight, atau `null` bila gagal.
  - Validasi baris:
    ```js
    const s = parseDate(row.start), e = parseDate(row.end);
    if (s === null && e === null) return true;      // fallback: tak ada info tanggal → valid
    if (s && today < s) return false;
    if (e && today > e) return false;
    return true;
    ```
  - `today =` `new Date(y, m, d)` dari `now`.
- Export `useMemberAssignments` (named + default), sama seperti hook labor.

### 2. `components/MemberAssignmentBadge.jsx` (baru)

Props: `assignment` (entry hook; `undefined` ⇒ perlakukan seperti mati/loading selesai).

- Root: `<span className="relative inline-flex shrink-0" title={tooltip}>`.
- Di dalam: pembungkus `inline-flex items-center justify-center rounded-full p-0.5 transition-colors`
  dengan kelas kondisional:
  - nyala (`active > 0`): `bg-emerald-50 dark:bg-emerald-900/30`
  - mati: tanpa latar
- Icon: `<UserCheckIcon className={...} />`:
  - nyala: `h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400`
  - mati: `h-3.5 w-3.5 text-slate-300 dark:text-slate-600`
  - loading: warna mati + `animate-pulse`
- Tooltip (`title`):
  - `loading`: `Assignment member: memuat...`
  - `error`: `Assignment member: gagal memuat`
  - `active > 0`: `Assignment member aktif: ${active}/${total}`
  - `active === 0 && total > 0`: `Assignment member: tidak ada yang aktif saat ini (${total} tercatat)`
  - `total === 0`: `Assignment member: belum ada member`
- `export default React.memo(MemberAssignmentBadge)`.

### 3. `components/index.js`

Tambah `export { default as MemberAssignmentBadge } from './MemberAssignmentBadge';`
(tidak wajib bila hanya dipakai internal, tapi konsisten dengan `LaborBudgetBadge`).

### 4. Wiring (mengikuti jalur `laborBudget` persis)

- `src/App.jsx`:
  - setelah `const laborBudgets = useLaborBudgets(filteredProjects);` (baris ~208):
    `const memberAssignments = useMemberAssignments(filteredProjects);` + import hook.
  - baris ~756 (classic): `memberAssignment={memberAssignments[project.id]}`
  - baris ~760-771 (stacked): `memberAssignments={memberAssignments}`
- `components/GroupedProjectList.jsx`: terima prop `memberAssignments`, teruskan
  `memberAssignment={memberAssignments?.[p.id]}` ke `ProjectRow` (dekat baris 142).
- `components/ProjectRow.jsx`: terima `memberAssignment`, teruskan ke `CompactRow` (render setelah
  badge labor) dan ke `ProjectCard embedded`.
- `components/ProjectCard.jsx`:
  - import `MemberAssignmentBadge`; tambah prop opsional `memberAssignment`.
  - render `<MemberAssignmentBadge assignment={memberAssignment} />` tepat setelah
    `<LaborBudgetBadge budget={laborBudget} />` (baris ~247).

## Notes / risks

- **Format tanggal `start`/`end` belum 100% dipastikan** (nilai berasal dari innerText tabel iServe via
  scraper eksternal `cpc-scraper`, lihat `backup_public/content.js:810-811`). Mitigasi: parser toleran di
  atas + langkah verifikasi #2. Bila format ternyata lain, cukup tambah 1 cabang regex di `parseDate`.
- **Ambigu `dd/mm` vs `mm/dd`**: dipilih day-first (konteks Indonesia). Bila terbukti month-first di data
  nyata, sesuaikan `parseDate`.
- **Volume read**: 1 pembacaan subcollection `team` per project (lebih berat dari query labor yang
  terfilter, tapi subcollection ini kecil). Batas paralel 8 + cache. Bila kelak berat, upgrade ke satu
  `collectionGroup(db, 'team')` (di luar scope).
- **Staleness**: `team` hanya berubah saat scrape dijalankan; selama sesi cache tidak auto-refresh (sama
  seperti labor). Di luar scope: invalidasi cache setelah `fetchTeam`/scrape.
- Badge murni tampilan; klik kartu tetap membuka modal edit (tak perlu handler).

## Validation

1. `npm run lint` lalu `npm run build` — tanpa error/ warning baru.
2. **Verifikasi format (lakukan pertama)**: buka salah satu kartu → *View Team*; catat format `start`/`end`
   apa adanya, dan bandingkan dengan hasil `parseDate` (mis. lewat `console`). Pastikan lampu sesuai.
3. Uji skenario:
   - project dengan member yang rentangnya mencakup hari ini → **nyala**;
   - hanya member yang sudah berakhir (end < today) atau belum mulai (start > today) → **mati**;
   - tanpa baris team → **mati**;
   - tanggal kosong/tak terbaca → **nyala** (fallback).
4. Cek view classic + stacked (compact row & card expanded), light & dark mode, dan badge tetap rapi
   berdampingan dengan badge labor (tidak mendorong wrap/layout).
5. Regression: modal edit dari klik kartu, tombol Team/Financials/CPC/dll tetap berfungsi.
6. Pastikan labor badge tidak berubah perilaku (hook labor tidak disentuh).

## Out of scope

- Perubahan data/struktur Firestore, rules, index, atau scraper.
- Auto-refresh/invalidasi cache saat team di-scrape ulang dalam sesi.
- Badge pada Dashboard/`StatCard`/header group.
- Mengubah atau menambah kolom tabel *Assigned Team Members*.
