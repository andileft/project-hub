# Badge "Sisa Budget Labor" di Project Card

## Context

- Kartu proyek: `components/ProjectCard.jsx` (dirender di `src/App.jsx:752` untuk view classic, dan lewat `components/GroupedProjectList.jsx → ProjectRow.jsx → ProjectCard embedded` untuk stacked/New view). Baris pendek stacked view: `CompactRow` di `components/ProjectRow.jsx:18-57`.
- **Tidak ada field budget labor di object project.** Data labor hanya ada di subcollection Firestore `projects/{id}/financials` dengan field `{ wbs, glAccount, glAccountName, costPlan, costCommit, costActual, availableBudget, updatedAt }` (dibaca di `ProjectCard.jsx:178-234`, saat ini hanya saat tombol *View Financials* ditekan).
- Baris labor (dari user): `glAccount = 6200000000`, `glAccountName = "Dir. Cost Service - Labor"`.
- `availableBudget` berada dalam **satuan juta (Mio IDR)** — sesuai tabel finansial yang mencetak nilai + suffix `M` dan header "Project Financials (Mio IDR)". Jadi threshold **15 juta = `15`** pada nilai mentah.
- Konvensi warna yang sudah dipakai: emerald = sehat, amber = peringatan, merah = negatif/error (`ProjectCard.jsx:446-447, 486, 497`).
- Icon: modul lokal `components/Icons.jsx` (named export per icon + default object). Belum ada `UserIcon` polos (hanya `UserCogIcon`, `UsersIcon`, `UserCheckIcon`).

## Decisions (sudah dikonfirmasi)

1. **Nilai** = `Σ availableBudget` untuk baris `glAccount` labor pada project tersebut (satuan juta) — ditampilkan di tooltip. **Lampu TIDAK diturunkan dari total ini**: lampu = severity per-WBS, ambil yang terburuk (lihat keputusan 2a).
2. **Aturan lampu** (v = nilai tersebut):
   | Kondisi | Lampu | Kelas Tailwind (dot) |
   |---|---|---|
   | tidak ada data (tidak ada baris labor / `availableBudget` bukan angka / fetch gagal) | **mati** | `bg-slate-300 dark:bg-slate-600` |
   | `v < 0` | **merah** | `bg-red-500` |
   | `0 ≤ v ≤ 15` | **kuning** | `bg-amber-400` |
   | `v > 15` | **hijau** | `bg-emerald-500` |

   Merah didahulukan (negatif ⇒ merah, bukan kuning). Threshold 15 disimpan sebagai konstanta.

   **2a. Evaluasi per-WBS (update, dikonfirmasi user)**: baris labor dikelompokkan per `wbs` (fallback `'No WBS'`), tiap grup dihitung sendiri (`severity = 0 merah | 1 kuning | 2 hijau | 3 mati`), lalu **lampu badge = severity terburuk antar grup** — 1 WBS merah ⇒ badge merah meski total project hijau. Tie-break antar grup severity sama: ambil nilai terkecil. Tooltip hanya satuan juta (tanpa `Rp` panjang): `Sisa budget labor: <total> jt`, dan saat lampu merah/kuning ditambahkan penjelas WBS pemicu (` — WBS <label>: <worst> jt`).
3. **Bentuk badge** = icon orang (silhouette) dengan titik lampu di pojok kanan-bawah (gaya presence indicator), **tooltip native `title`** berisi angka pasti.
4. **Penempatan**: (a) baris header `ProjectCard` tepat setelah pill methodology (`ProjectCard.jsx:245`); (b) `CompactRow` sebelum chevron (`ProjectRow.jsx:54`) — juga ikut masuk ke kartu embedded saat expand.
5. **Pengambilan data**: query per-project yang sudah di-filter (hanya baris labor yang dibaca), dengan cache + batas paralel. Tanpa perubahan infrastruktur/index Firestore.

## Implementation

### 1. `constants/config.js`
Tambah (angka/string saja — **jangan taruh string kelas Tailwind di `constants/`, folder itu tidak masuk Tailwind content globs**):
```js
export const LABOR_GL_ACCOUNTS = ['6200000000', '6200000099'];   // Labor + Labor Adj; dipakai both string & number di `in`
export const LABOR_BUDGET_THRESHOLD = 15;          // juta
```

### 2. `components/Icons.jsx`
Tambah named export `UserIcon` (path lucide `user`: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2` + `<circle cx=12 cy=7 r=4>`), terima `{ className, style, ...props }`, dan daftarkan di `export default { ... }` (baris ~896).

### 3. `hooks/useLaborBudgets.js` (baru)
```js
useLaborBudgets(projects) => ({ [project.id]: { state: 'loading' | 'ready' | 'error', value: number | null, worst?: { label, value }, sev?: 0|1|2|3 } })
```
- **Cache module-level** `Map<id, entry>` — entry object **dipertahankan identitasnya** (hanya diganti saat state berubah) supaya `React.memo(ProjectCard)` tetap efektif dan re-render/filter tidak memicu fetch ulang. Project yang sudah di-cache tidak di-fetch lagi.
- Effect berjalan saat daftar `projects` berubah: enqueue fetch untuk id yang belum ada di cache, **batas paralel 8**, hasil ditulis ke cache lalu `setState` dengan objek map baru.
- Fetch per project:
  ```js
  getDocs(query(collection(db, COLLECTION_PATH, id, 'financials'),
                where('glAccount', 'in', ['6200000000', 6200000000])))
  ```
  (dua tipe menangani string vs number; murah karena hanya baris labor yang terbaca).
- **Post-filter longgar** terhadap hasil: `String(r.glAccount ?? '').replace(/\D/g, '') === '6200000000'` (toleran spasi/prefix/suffix).
- Hitung nilai:
  - 0 baris cocok → `{ state:'ready', value: null }` (lampu mati).
  - baris ada tapi `availableBudget` bukan angka (`null/undefined/''/NaN`) di **semua** baris → `value: null` (mati). Waspada: `safeParseFloat(undefined) === 0`, jadi jangan pakai `safeParseFloat` untuk deteksi "tidak ada data" — cek keaslian angkanya dulu.
  - selain itu → hitung per-WBS: kelompokkan per `wbs`, jumlahkan yang angka per grup, `sev = severity(grup)` (0/1/2/3), `worst` = grup dengan sev terburuk (tie → nilai terkecil), `value` = total semua grup → `{ state:'ready', value, worst, sev }`.
- Gagal fetch → `{ state:'error', value:null }` + `console.warn` saja (**jangan `alert()`** — ini berjalan di latar untuk semua kartu).

### 4. `components/LaborBudgetBadge.jsx` (baru)
Props: `budget` (objek entry dari hook; `undefined` ⇒ dianggap mati/tanpa data).
- Render: `<span className="relative inline-flex shrink-0" title={tooltip}>` berisi `<UserIcon className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />` + dot mutlak:
  `className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full ring-2 ring-white dark:ring-slate-800 <warna per tabel di atas>"`.
- Dot warna dari `budget.sev` (0 merah, 1 kuning, 2 hijau, 3 mati); `state !== 'ready'` (loading/error) ⇒ mati; loading ditambah `animate-pulse`.
- Tooltip `title` (hanya satuan juta, tanpa format `Rp` panjang):
  - `ready` + angka (sev hijau): `Sisa budget labor: ${value.toLocaleString('id-ID')} jt`
  - `ready` + sev merah/kuning: tambah ` — WBS <label>: <worst> jt` dari `budget.worst`
  - `ready` + null: `Sisa budget labor: data tidak tersedia`
  - loading: `Sisa budget labor: memuat...`
- Export dari `components/index.js`.

### 5. Wiring
- `src/App.jsx`: setelah `filteredProjects` memo (~baris 163-190) panggil `const laborBudgets = useLaborBudgets(filteredProjects);`
  - baris 752: `laborBudget={laborBudgets[project.id]}`
  - baris 756: `laborBudgets={laborBudgets}`
- `components/GroupedProjectList.jsx`: terima `laborBudgets`, teruskan `laborBudget={laborBudgets[p.id]}` ke `ProjectRow` (baris 132).
- `components/ProjectRow.jsx`: terima `laborBudget`, teruskan ke `CompactRow` (badge sebelum `<ChevronDownIcon>` baris 54) dan ke `ProjectCard embedded` (baris 88).
- `components/ProjectCard.jsx`: prop opsional `laborBudget` (default: anggap `null`/mati supaya tidak crash), render
  ```jsx
  <LaborBudgetBadge budget={laborBudget} />
  ```
  di baris header tepat setelah pill methodology (baris 245), dengan `shrink-0` agar tidak merusak wrap baris badge.
- Catatan: badge murni tampilan — klik kartu tetap membuka modal edit (`ProjectCard.jsx:237`), badge tidak butuh handler khusus.

## Validation

1. `npm run lint` lalu `npm run build` (tanpa error baru).
2. **Verifikasi format data (wajib, urutan pertama saat implementasi)**: buka salah satu kartu → *View Financials* → cek kolom `glAccount` baris "Dir. Cost Service - Labor". Pastikan digitnya persis `6200000000`. Jika query `in` tidak mengembalikan apa-apa padahal tabel menampilkan baris itu, longgarkan penyaringan: fallback yang sudah disiapkan = fetch subcollection penuh per project lalu filter longgar di client (cukup ganti isi satu fungsi fetch di hook).
3. Cocokkan angka tooltip dengan `Σ availableBudget` baris labor di tabel finansial untuk 2-3 project.
4. Uji 4 kondisi lampu per-WBS: cari project dengan 1 WBS minus (merah), WBS ≤ 15 jt (kuning), WBS > 15 jt (hijau), tanpa data labor (mati). **Kasus mixed**: project dengan beberapa WBS di mana 1 saja merah ⇒ badge merah (worst menang), tooltip menyebut WBS pemicu. Saat pertama load, dot berdenyut lembut lalu stabil.
5. Cek view classic + stacked (compact row & expand), light & dark mode, dan bahwa tombol-tombol kartu (Team/Financials/CPC/dll) tetap berfungsi.
6. Regression: buka modal edit dari klik kartu, pastikan badge tidak mengganggu.

## Risks

- **Silent failure format `glAccount`** (type/penulisan beda) ⇒ semua lampu jadi "mati". Mitigasi: query `in` [string, number] + post-filter longgar + langkah verifikasi #2 di atas.
- **Volume read**: 1 query per project tiap load (hanya baris labor yang dibaca), paralel dibatasi 8, hasil di-cache. Bila suatu saat project sangat banyak dan lambat, jalur upgrade-nya adalah satu `collectionGroup(db,'financials')` (butuh export `collectionGroup` di `utils/firebase.js` + kemungkinan collection-group index) — di luar scope sekarang.
- Banyak project tanpa baris labor ⇒ banyak lampu mati; itu memang perilaku yang diminta.

## Out of scope

- Menambah field budget labor ke form project / import CSV.
- Perubahan struktur data Firestore, rules, atau index.
- Badge di Dashboard/`StatCard`/header group.
