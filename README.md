# Axandr Portfolio 🌌

Website portofolio pribadi premium berbasis **Dark Mode, Glassmorphism, dan Neon Accent** yang dirancang khusus untuk mahasiswa Sistem Komputer dengan fokus pada pengembangan **Web, Mobile, IoT, dan Cyber Security**.

Website ini menampilkan rekam jejak akademis, pengalaman magang (di BPS Provinsi Kalimantan Tengah), keahlian teknologi, draf blog teknis, serta sarana kontak interaktif.

---

## ✨ Fitur Utama

- **Desain Glassmorphism & Neon**: Estetika modern menggunakan efek pendaran neon (*violet & cyan*) dan kartu transparan gelap dengan filter blur latar belakang.
- **Typing Animation Ramah SEO**: Animasi efek ketik dinamis untuk daftar minat yang ramah mesin pencari karena konten teks tetap tertulis di dalam DOM.
- **Preloader Typing Animation**: Layar pemuatan penuh (*full screen*) dengan animasi ketik logo **"AXANDR"** yang memudar halus setelah pemuatan selesai.
- **Seksi Blog Terintegrasi**: Menggantikan seksi edukasi tradisional dengan artikel teknis seputar IoT, WebGIS, dan keamanan siber.
- **Responsif & Mobile-Friendly**: Menu navigasi hamburger yang berubah menjadi laci menu samping (*drawer menu*) pada layar ponsel dengan target sentuh (*touch target*) yang nyaman.
- **Optimasi Performa LCP**: Menggunakan `preconnect` CDN dan atribut `fetchpriority="high"` pada gambar utama untuk kecepatan muat maksimal.
- **Validasi Formulir Interaktif**: Menggunakan pseudo-class CSS `:user-valid` dan `:user-invalid` untuk memberikan umpan balik visual instan setelah pengguna mengetik.

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Teknologi | Keterangan |
| :--- | :--- | :--- |
| **Kerangka Dasar** | HTML5 | Semantik penuh untuk aksesibilitas & SEO optimal |
| **Gaya & Layout** | CSS3 | Variabel CSS, CSS Grid/Flexbox, `@layer` untuk arsitektur bersih |
| **Interaksi** | JavaScript (ES6+) | Logika murni tanpa library pihak ketiga (Vanilla JS) |
| **Ikon** | FontAwesome 6 | Representasi visual menu, keahlian, dan tombol |
| **Tipografi** | Google Fonts | Font *Poppins* untuk estetika modern |

---

## 📂 Struktur Direktori

```text
Axan_portofolio/
├── index.html        # Struktur HTML utama portofolio
├── style.css         # Desain token, variabel, dan gaya responsif
├── script.js         # Logika interaksi (typist, mobile menu, scroll spy)
├── asset/            # Folder berkas gambar (profile.png, favicon.png, dll)
└── README.md         # Dokumentasi proyek (file ini)
```

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Proyek ini dibuat menggunakan teknologi web statis murni sehingga tidak memerlukan proses *build* atau kompilasi. Anda dapat menjalankannya langsung di komputer lokal menggunakan server web sederhana.

### Langkah 1: Jalankan Web Server Lokal
Gunakan perintah Python di dalam terminal direktori proyek:
```bash
python3 -m http.server 8000
```
Setelah berjalan, buka browser dan akses alamat berikut:
```text
http://localhost:8000
```

### Langkah 2: Ekspos ke Perangkat Mobile (Opsional)
Jika Anda ingin menguji tampilan responsif langsung pada HP asli Anda secara jarak jauh, gunakan `localtunnel` di terminal baru:
```bash
npx localtunnel --port 8000
```
Perintah di atas akan menghasilkan URL publik (seperti `https://xxxx.loca.lt`). Buka URL tersebut pada HP Anda, dan jika diminta **IP Address/IP Publik**, masukkan IP eksternal komputer Anda yang menjalankan server tersebut.

---

## 💡 Rencana Pengembangan lanjutan

Untuk membuat portofolio ini semakin lengkap dan menarik bagi calon klien atau rekruter, berikut adalah beberapa rencana pengembangan selanjutnya yang disarankan:

1. **Seksi Portofolio Proyek (Projects Showcase)**:
   * Menambahkan galeri/grid kartu berisi proyek nyata yang pernah dibuat (seperti visualisasi peta WebGIS, prototipe IoT berbasis mikroprosesor, atau skrip Cyber Security).
2. **Integrasi Formulir Kontak Nyata**:
   * Menghubungkan formulir kontak ke layanan pihak ketiga seperti **EmailJS** atau **Formspree** agar pesan pengunjung terkirim langsung ke inbox email pribadi Anda (`axan.developer@gmail.com`).
3. **Modal Popup untuk Membaca Artikel Blog**:
   * Mengimplementasikan jendela modal popup interaktif sehingga pengunjung dapat membaca teks lengkap postingan blog langsung di situs tanpa berpindah halaman.
4. **Animasi Efek Muncul (Scroll-Reveal)**:
   * Menggunakan JavaScript *Intersection Observer API* untuk menganimasikan elemen (seperti kartu layanan atau seksi blog) agar bergeser atau memudar masuk secara halus saat halaman di-scroll ke bawah.
5. **Tooltip Detail Keterampilan**:
   * Menambahkan tooltip informatif saat ikon keahlian di seksi *Skills* di-hover (misalnya saat ikon Python di-hover, muncul deskripsi: *"Digunakan untuk otomatisasi skrip & pengolahan data sensor"*).

---

## 📝 Kontak & Lisensi

- **Nama**: Axandr
- **Email**: [axan.developer@gmail.com](mailto:axan.developer@gmail.com)
- **Bidang**: Sistem Komputer (Web, Mobile, IoT, Cyber Security)

Dibuat dengan 💻 untuk memvisualisasikan karya dan keahlian di bidang teknologi.
