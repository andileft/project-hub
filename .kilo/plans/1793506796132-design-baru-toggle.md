# Rencana: Design Baru Project Hub + Toggle Design Lama/Baru

## Tujuan
Menambahkan **design baru** untuk Project Hub React (`C:\Users\andic\.gemini\antigravity\scratch\project-hub`) berdasarkan mockup di `d:\project-hub-redesign` (bahasa visual career.ag-it.com: wine `#812049` / orange `#de7c00`, Montserrat + Inter, kartu radius 20px, tombol pill). Design lama **disimpan** dan bisa dipilih lewat tombol toggle di Header.

## Batasan (WAJIB)
- **Jangan buat page baru** (tidak ada route/halaman baru).
- **Jangan buat field baru** di Firestore atau form. Struktur data `projects` (projName, projNumber, customer, pm, status, value, sisaMandays, start, end, subcon, methodology, note, solusi, files) tidak berubah.
- Hanya **design & layout** yang berubah. Semua aksi/fitur/handler yang sudah ada tetap berfungsi: login, list `new`/`classic`, grouped list, deep link `?proj=`, Dashboard, ProjectModal, import CSV, truncate, upload file, AI Copilot, theme dark/light.
- Elemen mockup yang tampak "baru" (Risk radar, aging bar Belum SDHO, health meter) **harus diturunkan dari data yang sudah ada** (`laborBudget`, `memberAssignment`, `end`, `status`, `value`, `sisaMandays`) — bukan field baru. Jika tidak bisa diturunkan, jangan diimplementasikan.

## Keputusan yang sudah disetujui
1. Pendekatan: **token + rewrite komponen** (bukan port CSS mentah). Token wine/orange/font/radius ditambahkan ke `tailwind.config.js` + `src/index.css`; komponen React di-rewrite className-nya.
2. Design lama: **disimpan sebagai mode 'old'** (komponen varian lama dipertahankan), bisa dipilih via toggle.
3. Tombol toggle: **di Header, terlihat untuk semua user yang login**. Pilihan persist di `localStorage`.
4. Cakupan: **semua layar sekaligus** (login, header, filter, list, dashboard, card/row detail, modal, toast, badge).
5. Konten baru: **diturunkan dari data eksisting**.

## Arsitektur Toggle Design
- Nilai mode: `'new'` | `'old'`. Storage key baru: `ph_design_mode` (mengikuti pola `readStored`/`writeStored` yang sudah ada di `src/App.jsx:49-65`). Default: `'new'`.
- **CSS isolation tanpa page baru**: karena Tailwind butuh `darkMode:'class'` pada `<html>`, gunakan skema prefix kelas, bukan class pada `<html>`:
  - Design **baru** = default; token baru ditulis pada `:root` di `src/index.css`.
  - Design **lama** = seluruh style lama dipindah ke scope `.ph-old { ... }` (var CSS) dan komponen lama memakai className dengan prefix `ph-old-*` (atau memakai var `--old-*`).
  - Dark mode lama tetap jalan: `.dark .ph-old { ... }` dan `.dark .ph-old-*`.
  - Hasil: tidak ada konflik Tailwind karena kelas baru dan kelas lama tidak bertabrakan, dan mode dapat diganti instan (React re-render) tanpa reload.
- Alternatif lebih murah (cadangan bila prefix terlalu berat): pada `<html>` pasang `data-design="new|old"`, dan simpan style lama di bawah `[data-design="old"]`. Pilih **satu** di antara keduanya saat implementasi; rekomendasi: `data-design` pada `<html>` + wrapper var, karena paling sedikit menyentuh className.

## Struktur File
- Tambah (baru): `components/` tidak diubah namanya. Komponen design baru ditulis langsung di file komponen yang sama **kecuali** `ProjectCard`/`ProjectRow`/`GroupedProjectList`/`Dashboard` yang besar — untuk ini buat file varian:
  - `components/ProjectCardNew.jsx`, `components/ProjectRowNew.jsx`, `components/DashboardNew.jsx` (versi baru), sedangkan `ProjectCard.jsx`/`ProjectRow.jsx`/`Dashboard.jsx` **tetap** sebagai versi lama (rename tidak perlu, cukup ubah isinya jadi versi old atau salin dulu).
  - **Urutan aman**: sebelum rewrite, `git`-less salin file lama ke `*Old.jsx` (mis. `ProjectCardOld.jsx`) sehingga versi lama utuh, lalu isi `ProjectCard.jsx` dengan versi baru. Akses via `components/index.js`.
- Update `components/index.js` untuk mengekspor varian baru + lama.
- Update `tailwind.config.js`: tambah warna `wine`, `orange` (dengan shade), fontFamily `display`/`body`/`mono`, borderRadius, boxShadow.
- Update `index.html`: tambah `<link>` Google Fonts (Inter, Montserrat, JetBrains Mono) — pola sama seperti mockup.
- Update `src/index.css`: token `:root` baru + scope `.ph-old` (atau `[data-design="old"]`).
- Update `src/App.jsx`: state `designMode`, persist ke localStorage, tombol toggle di Header, dan pilih komponen sesuai mode.

## Task List (berurutan)

### Fase 1 — Fondasi token & font
1. `index.html`: tambahkan link Google Fonts (Inter, Montserrat, JetBrains Mono).
2. `tailwind.config.js`: tambah `colors.wine` (`DEFAULT #812049`, `600 #b32068`, `dark #5f1537`, `soft #fdf1f6`), `colors.orange` (`DEFAULT #de7c00`, `300 #ffb03a`, `soft #fff1e3`), `colors.cream #faf8f6`, `colors.soft #fff8ef`, `ink #1d1c21`, `ink2 #33343b`, `muted #6d7280`; `fontFamily.display=['Montserrat',...]`, `fontFamily.body=['Inter',...]`, `fontFamily.mono=['JetBrains Mono',...]`; `borderRadius.card='20px'`, `hero='34px'`, `input='14px'`; `boxShadow.card`, `lift`, `btn`, `panel` (nilai dari `theme.css:49-52`).
   - Pertahankan `colors.indigo`/`slate` lama agar komponen mode old tetap valid.
3. `src/index.css`: definisikan token baru di `:root` (wine/orange/soft/cream, `--r-*`, `--sh-*`); pindahkan seluruh blok style lama (`--primary`, `.btn-primary`, `.btn-secondary`, `.filter-label`, `.filter-input`, `.dashboard-card`, `.dashboard-title`, `.prose`, `.custom-scrollbar`) ke dalam scope `.ph-old` / `[data-design="old"]`. Tambah util `.ph-old-*` bila perlu.
4. Verifikasi visual: app masih tampil sama saat `designMode='old'` (tidak ada regresi dari pemindahan CSS).

### Fase 2 — Toggle di Header
5. `src/App.jsx`: tambah `const DESIGN_KEY='ph_design_mode'`, `const [designMode,setDesignMode]=useState(()=>readStored(DESIGN_KEY,'new',['new','old']))`, effect persist, dan set `document.documentElement.setAttribute('data-design', designMode)`.
6. `components/Header.jsx`: tambah prop `designMode`, `onToggleDesign`; render tombol toggle (mis. seg pill "Design: Baru/Lama") untuk semua user. Pastikan tetap responsif.
7. `src/App.jsx`: pilih komponen sesuai mode (lihat Fase 4).

### Fase 3 — Komponen design baru (wine/orange)
Rewrite className tiap komponen memakai token baru. Struktur props & logika tetap identik.
8. `Header.jsx` (baru): topbar sticky, brand + subtitel, nav-pills, aksi admin sebagai tombol pill, toggle tema + toggle design + logout.
9. `FilterBar.jsx`: toolbar sticky; input `.input` radius pill; select; chips filter aktif bisa dihapus; ringkasan (n projects · value · mandays · customers).
10. `ListViewToolbar.jsx`: segmented "Group by" pill + Expand/Collapse groups.
11. `GroupedProjectList.jsx` (baru): kartu grup (`.group`) dengan dot status, count, "N at risk", total value/mandays, akordeon.
12. `ProjectRow.jsx` (baru, dari `assets/app.js` `row()`): grid baris dengan id mono, nama, customer, PM, value wine, mandays green, status chip, lamp labor/end.
13. `ProjectCard.jsx` (baru, dari `cardBody()`): KPI strip (value, mandays, remaining labor, active team), financials WBS accordion (tabel 6 kolom, stack di wadah sempit), notes timeline, team, documents (4 slot), quick links (CPC/Simplify/iServe/Tech Hub), footer edit/copilot.
14. `StatCard.jsx`: gaya `.stat` (label uppercase, value display, delta).
15. `Dashboard.jsx` (baru): hero ringkas + KPI 4 + Belum SDHO queue (dengan aging bar dari end date) + ranking (value/mandays/PM/customer) + risk radar (diturunkan dari `laborBudget.remaining<15` & `daysTo(end)<=30`). Semua memakai field eksisting.
16. `ProjectModal.jsx`: modal radius 28px, field `.input/.select/.textarea`, FileDropZone 4 slot, aksi Discard/Simpan pill. **Field & validasi tidak berubah.**
17. `FileDropZone.jsx`: gaya `.drop` (dashed, is-filled hijau).
18. `Toast.jsx`: gaya slide-in kanan bawah + progress bar (motion `app.js:667-676`).
19. `LaborBudgetBadge.jsx`, `MemberAssignmentBadge.jsx`, `EndDateBadge.jsx`: ganti jadi lamp berlabel teks (mis. `42M`, `3/4`, `23 hari lagi`) memakai `chip`/`lamp` — tetap span aman di dalam `<button>`.
20. `ChatWindow.jsx` (Copilot): bubble wine untuk user, gaya `.copilot` (tab di ProjectCard/detail bila ditampilkan sebagai panel).
21. `SuccessModal.jsx`, `SkeletonLoader.jsx`, `BackToTopButton.jsx`, `Morph.jsx`: selaraskan radius/shadow/token baru.
22. `src/components/ErrorBoundary.jsx` (fallback error): selaraskan token.

### Fase 4 — Wiring mode di App
23. `components/index.js`: ekspor `ProjectCardNew`, `ProjectRowNew`, `DashboardNew`, dsb., atau ekspor nama sama yang di-resolve di App berdasarkan `designMode`.
24. `src/App.jsx`: pada render list/dashboard/header/filter, pilih komponen berdasarkan `designMode === 'old'`. Pastikan deep-link focus mode, grouped list, dan classic view tetap konsisten di kedua mode.

### Fase 5 — Motion & responsif
25. Terapkan motion dari `theme.css:623-692` & `app.js`: skeleton shimmer, stagger reveal, accordion `grid-template-rows`, drawer/morph, toast progress, back-to-top, count-up KPI. Semua tunduk `prefers-reduced-motion`.
26. Terapkan breakpoint mockup (1180/960/720) untuk topbar 2 baris, tombol jadi ikon di HP, tabel WBS tetap 6 kolom dengan scroll di wadahnya.

### Fase 6 — Verifikasi
27. Jalankan `npm run dev`, uji manual: login, toggle design lama↔baru (persist setelah reload), list `new` & `classic`, group by semua opsi, expand/collapse, deep link `?proj=`, dashboard + tahun, buat/edit/hapus project, import CSV, upload 4 dokumen, Copilot, dark mode di kedua design, responsif 390/430px.
28. Jalankan `npm run lint` dan `npm run build`. Perbaiki sampai bersih.
29. Cek tidak ada field/page baru: `git diff --stat` + telusuri bahwa skema Firestore & props form tidak berubah.

## Validasi
- Tidak ada page/route baru, tidak ada field Firestore/form baru (`git diff` pada `utils/parsers.js`, `src/App.jsx` formData, dan skema dokumen = tidak berubah).
- Toggle mengganti tampilan instan, tersimpan di `ph_design_mode`, dan kedua design berfungsi penuh (semua fitur).
- `npm run lint` & `npm run build` hijau.
- Tidak ada luber horizontal di 390px/430px (`scrollWidth == innerWidth`).

## Risiko & Mitigasi
- **Bentrokan `darkMode:'class'`**: diselesaikan dengan prefix kelas / `data-design` + var, bukan class pada `<html>` untuk design.
- **Regresi fitur saat rewrite**: salin dulu komponen lama ke `*Old.jsx`, jangan ubah props/logika; rewrite hanya view.
- **File besar (ProjectCard 617 baris, Dashboard 218 baris)**: pecah tanggung jawab ke varian New; jangan ubah handler (fetchTeam/fetchFinancials/window.postMessage ke CPC/Simplify/iServe/Tech Hub/assignment generator).
- **Font eksternal**: Google Fonts via CDN; sediakan fallback `ui-sans-serif` agar tetap rapi offline.

## Open Question (tidak memblokir)
- Apakah tombol toggle harus berupa label teks ("Design baru/lama") atau ikon saja di HP? Rekomendasi: teks di layar lebar, ikon di layar sempit (mengikuti pola tombol lain di Header).
