# 🍽️ SmartQueue POS

Sistem Kasir dan Manajemen Pesanan UMKM Berbasis Web dengan Arsitektur Offline First dan Realtime Queue Management.

---

# 📖 Deskripsi Project

SmartQueue POS merupakan sistem kasir berbasis web yang dirancang untuk membantu UMKM kuliner dalam mengelola pesanan pelanggan secara lebih efisien, terstruktur, dan minim kesalahan.

Saat ini banyak UMKM masih menggunakan metode pencatatan pesanan menggunakan kertas. Ketika jumlah pelanggan meningkat, kertas pesanan sering bertumpuk dan menyebabkan urutan pengerjaan makanan menjadi tidak sesuai dengan waktu pemesanan. Akibatnya, pelanggan yang datang lebih akhir berpotensi menerima pesanan lebih dahulu dibanding pelanggan yang datang lebih awal.

Selain itu, komunikasi antara kasir dan pemasak masih dilakukan secara manual sehingga sulit mengetahui status pesanan secara cepat dan akurat.

SmartQueue POS hadir sebagai solusi digital yang memungkinkan kasir mencatat pesanan pelanggan secara elektronik, sementara koki dapat melihat antrean pesanan secara realtime berdasarkan urutan pemesanan. Sistem juga menerapkan konsep Offline First sehingga tetap dapat digunakan ketika koneksi internet tidak stabil atau terputus.

---

# 🎯 Tujuan Produk

Tujuan utama pengembangan SmartQueue POS adalah:

* Menghilangkan ketergantungan terhadap pencatatan pesanan menggunakan kertas.
* Mengurangi kesalahan urutan pengerjaan pesanan.
* Mempercepat komunikasi antara kasir dan koki.
* Menyediakan sistem antrean yang transparan dan realtime.
* Menyediakan histori transaksi yang terdokumentasi dengan baik.
* Memastikan operasional UMKM tetap berjalan meskipun terjadi gangguan internet.

---

# 🚨 Permasalahan yang Diselesaikan

## Permasalahan Saat Ini

UMKM masih menggunakan sistem pencatatan manual menggunakan kertas.

Contoh kasus:

1. Pelanggan A datang terlebih dahulu dan melakukan pemesanan.
2. Kasir mencatat pesanan pada kertas.
3. Pelanggan B datang beberapa menit kemudian.
4. Saat kondisi ramai, kertas pesanan pelanggan B berada di atas kertas pelanggan A.
5. Pemasak mengambil kertas paling atas.
6. Pesanan pelanggan B selesai terlebih dahulu.

Dampak yang ditimbulkan:

* Urutan pelayanan tidak sesuai antrean.
* Pelanggan merasa dirugikan.
* Meningkatnya potensi komplain.
* Sulit melacak status pesanan.
* Risiko kehilangan catatan pesanan.
* Tidak tersedia data transaksi yang terstruktur.

---

# 💡 Solusi

SmartQueue POS menyediakan sistem antrean digital yang secara otomatis mengurutkan pesanan berdasarkan waktu pemesanan.

Kasir dapat membuat pesanan baru dan sistem akan menghasilkan nomor antrean secara otomatis. Seluruh pesanan akan muncul pada dashboard koki secara realtime. Koki dapat memperbarui status pesanan sehingga kasir dapat langsung mengetahui perkembangan setiap pesanan tanpa perlu komunikasi manual.

---

# 👥 Role Pengguna

## Kasir

Kasir bertanggung jawab untuk:

* Login ke sistem.
* Membuat pesanan pelanggan.
* Menambahkan item menu.
* Mengubah jumlah item.
* Menghapus item pesanan.
* Melihat seluruh antrean pesanan.
* Melihat status pesanan.
* Memanggil pelanggan ketika pesanan selesai.

### Dashboard Kasir

Informasi yang ditampilkan:

* Total pesanan hari ini.
* Total pendapatan hari ini.
* Jumlah pesanan menunggu.
* Jumlah pesanan sedang dimasak.
* Jumlah pesanan selesai.

---

## Koki

Koki bertanggung jawab untuk:

* Login ke sistem.
* Melihat antrean pesanan.
* Melihat detail pesanan.
* Mengubah status menjadi "Sedang Dimasak".
* Mengubah status menjadi "Selesai".

### Dashboard Koki

Informasi yang ditampilkan:

* Jumlah pesanan aktif.
* Jumlah pesanan selesai.
* Daftar antrean realtime.
* Estimasi antrean pesanan.

---

# 🔄 Alur Sistem

1. Kasir membuat pesanan.
2. Sistem membuat nomor antrean otomatis.
3. Data pesanan tersimpan.
4. Pesanan muncul pada dashboard koki.
5. Koki mulai memasak.
6. Status berubah menjadi "Sedang Dimasak".
7. Setelah selesai dimasak, status berubah menjadi "Selesai".
8. Kasir menerima notifikasi realtime.
9. Kasir memanggil pelanggan.

---

# 📶 Offline First Architecture

## Latar Belakang

Banyak UMKM memiliki koneksi internet yang tidak selalu stabil. Oleh karena itu sistem harus tetap dapat digunakan ketika jaringan internet terputus.

---

## Cara Kerja Offline Mode

Ketika internet terputus:

* Kasir tetap dapat membuat pesanan.
* Data disimpan ke IndexedDB.
* Sistem menandai data sebagai Pending Sync.
* Koki tetap dapat melihat data yang sudah tersimpan lokal.

Ketika internet kembali tersedia:

* Sistem melakukan sinkronisasi otomatis.
* Data yang belum terkirim akan dikirim ke server.
* Status sinkronisasi diperbarui secara otomatis.

---

# ⚡ Penanganan Gangguan Internet

Fitur yang digunakan:

* IndexedDB Local Storage
* Background Synchronization
* Offline Queue
* Auto Retry Request
* Connection Monitoring

Manfaat:

* Tidak ada pesanan yang hilang.
* Operasional tetap berjalan.
* Pengguna tetap dapat bekerja secara normal.

---

# 🔋 Penanganan Mati Listrik

Untuk meminimalkan kehilangan data:

* Auto Save setiap perubahan.
* Penyimpanan lokal sementara.
* Sinkronisasi otomatis saat sistem kembali online.
* Backup database pada server Supabase.

Jika menggunakan laptop atau perangkat yang memiliki baterai cadangan, sistem tetap dapat digunakan meskipun listrik padam.

---

# ⭐ Fitur Utama

## Authentication

* Login
* Logout
* Role Based Access Control

## Order Management

* Tambah Pesanan
* Edit Pesanan
* Detail Pesanan
* Update Status Pesanan
* Histori Pesanan

## Realtime Queue

* Antrean otomatis
* Update status realtime
* Notifikasi realtime

## Dashboard

* Statistik pesanan
* Statistik pendapatan
* Ringkasan aktivitas

## Offline First

* Penyimpanan lokal
* Sinkronisasi otomatis
* Mode offline

---

# 🗄️ Desain Database

## users

Menyimpan data pengguna.

| Field      | Tipe      |
| ---------- | --------- |
| id         | UUID      |
| name       | VARCHAR   |
| username   | VARCHAR   |
| password   | VARCHAR   |
| role       | ENUM      |
| created_at | TIMESTAMP |

---

## orders

Menyimpan data pesanan.

| Field         | Tipe      |
| ------------- | --------- |
| id            | UUID      |
| queue_number  | INTEGER   |
| customer_name | VARCHAR   |
| total_price   | NUMERIC   |
| status        | VARCHAR   |
| created_by    | UUID      |
| created_at    | TIMESTAMP |

---

## order_items

Menyimpan detail menu pesanan.

| Field     | Tipe    |
| --------- | ------- |
| id        | UUID    |
| order_id  | UUID    |
| menu_name | VARCHAR |
| quantity  | INTEGER |
| price     | NUMERIC |
| subtotal  | NUMERIC |

---

## sync_logs

Mencatat proses sinkronisasi offline.

| Field       | Tipe      |
| ----------- | --------- |
| id          | UUID      |
| order_id    | UUID      |
| sync_status | BOOLEAN   |
| synced_at   | TIMESTAMP |

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Context API / Zustand
* IndexedDB
* Service Worker

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt

## Database

* Supabase PostgreSQL

## Realtime

* Socket.IO

## Deployment

* Vercel (Frontend)
* Railway / Render (Backend)
* Supabase (Database)

---

# 📁 Struktur Folder

```text
ProjectBE/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── routes/
│   ├── db.js
│   ├── response.js
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

# 🚀 Future Development

Fitur yang dapat dikembangkan pada versi berikutnya:

* Cetak Struk Thermal Printer
* QR Code Tracking Pesanan
* Integrasi QRIS
* Manajemen Menu
* Multi Cabang
* Dashboard Analitik
* Laporan Harian dan Bulanan
* Progressive Web App (PWA)
* Push Notification
* Prediksi Waktu Penyelesaian Pesanan

---

# 🎯 Expected Impact

Dengan implementasi SmartQueue POS, UMKM dapat meningkatkan efisiensi operasional, mengurangi kesalahan antrean, mempercepat proses pelayanan pelanggan, serta tetap dapat beroperasi ketika terjadi gangguan internet melalui pendekatan Offline First Architecture yang diterapkan pada sistem.