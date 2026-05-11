# Mystral Academy

Website komunitas Discord **Mystral Academy** yang dibuat sebagai pusat identitas, informasi, dan aktivitas komunitas. Situs ini menampilkan profil komunitas dengan nuansa akademi fantasi yang rapi, hangat, dan modern.

## Tentang Proyek

Mystral Academy adalah landing page interaktif untuk memperkenalkan komunitas, founder, staff, event, rules, leaderboard, rekrutmen, bot, galeri, dan komentar member dalam satu pengalaman web yang ringan.

Fokus utamanya adalah membuat pengunjung langsung paham karakter komunitas: aesthetic, aktif, ramah untuk member baru, dan punya sistem yang tertata.

## Fitur Utama

- Hero section dengan preview komunitas Discord.
- Navigasi responsif untuk desktop dan mobile.
- Mode tema pastel dan dark.
- Section founder, staff, dan struktur komunitas.
- Riwayat event lengkap dengan poster dan dokumentasi.
- Informasi donasi, leaderboard, rules, recruitment, bot, FAQ, dan galeri.
- Komentar member berbasis local storage.
- Build statis yang siap di-upload ke cPanel.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Menjalankan Project

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka browser ke:

```text
http://localhost:5173
```

## Build Production

Untuk membuat versi production:

```bash
npm run build
```

Hasil build akan masuk ke folder:

```text
dist/
```

## Deploy ke cPanel

1. Jalankan `npm run build`.
2. ZIP semua isi folder `dist`, bukan folder `dist`-nya.
3. Login ke cPanel.
4. Buka **File Manager**.
5. Masuk ke folder `public_html`.
6. Upload ZIP hasil build.
7. Extract di dalam `public_html`.
8. Pastikan `index.html` dan folder `assets` berada langsung di `public_html`.

Jika website dipasang di subfolder, misalnya `domain.com/academy`, ubah `vite.config.ts`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/academy/",
});
```

Setelah itu build ulang dan upload kembali isi `dist`.

## Struktur Singkat

```text
src/
  App.tsx        # Komponen utama website
  main.tsx       # Entry point React
public/
  logo.png       # Logo utama
  events/        # Asset event
  founders/      # Foto founder/staff
data/
  comments.json  # Data komentar awal
```

## Catatan

Project ini sebelumnya berasal dari setup Next.js, lalu disesuaikan menjadi aplikasi Vite React statis agar lebih mudah dideploy di hosting cPanel biasa.
