# Express MVC Lab

Proyek Modul Praktikum 2 mata kuliah Pemrograman Web (MK11): web server dengan Express.js, template engine EJS, dan pola Model-View-Controller (MVC) berbasis Monolith SSR.

- Nama: I Wayan Yoga Karang Saputra
- NIM: 42530013

## Isi Praktikum

| Bagian | Materi | Bukti |
|---|---|---|
| Pengalaman 1 | Inisiasi server Express dan inspeksi HTTP Header di DevTools | [01-init-server.png](docs/screenshots/01-init-server.png) |
| Pengalaman 2 | Berkas statis (`express.static`) dan halaman 404 | [02-static-404.png](docs/screenshots/02-static-404.png) |
| Pengalaman 3 | EJS engine dan partials (header, footer) | [03-ejs-partials.png](docs/screenshots/03-ejs-partials.png) |
| Pengalaman 4 | Refactoring ke MVC (routes, controllers, views) | [04-mvc-refactor.png](docs/screenshots/04-mvc-refactor.png) |
| Pengalaman 5 | Payload HTTP POST dan pola Post-Redirect-Get | [05-post-payload.png](docs/screenshots/05-post-payload.png) |
| Kasus 1 | Galat `Cannot read properties of undefined` | [06-error-undefined.png](docs/screenshots/06-error-undefined.png) |
| Kasus 2 | Galat `Failed to lookup view` | [07-error-lookup.png](docs/screenshots/07-error-lookup.png) |
| Kasus 3 | Galat `EADDRINUSE` (port sudah dipakai) | [08-error-port.png](docs/screenshots/08-error-port.png) |

## Rute

| Rute | Keterangan |
|---|---|
| `GET /` | Halaman beranda (data dinamis dari controller) |
| `GET /katalog` | Halaman katalog berisi form tambah produk |
| `POST /katalog/tambah` | Mencetak `req.body` ke terminal, lalu redirect ke `/katalog` (pola PRG) |
| Rute lain | Fallback 404 |

## Struktur Proyek

```
express-mvc-lab/
├── app.js                       # Inisialisasi app, middleware, pasang router
├── package.json
├── public/css/style.css         # Aset statis
├── routes/
│   └── page.routes.js           # Definisi endpoint (express.Router)
├── controllers/
│   └── page.controller.js       # Logika dan pengiriman response render
├── views/
│   ├── pages/                   # home.ejs, katalog.ejs
│   └── partials/                # header.ejs, footer.ejs
└── docs/screenshots/            # Bukti praktikum (01 sampai 08)
```

## Cara Menjalankan

```bash
npm install
npm run dev     # dengan nodemon
```

Buka `http://localhost:3000`.

## Bahasa dan Package

Node.js, Express, EJS, nodemon

## Konsep yang Dipraktikkan

- Siklus HTTP request-response dan pembacaan Headers di DevTools
- Middleware dan urutan pemasangannya (`static`, `urlencoded`, router, 404)
- Template EJS: `include`, `<%= %>`, `<%- %>`, dan loop `forEach`
- Pemisahan tanggung jawab dengan MVC dan `express.Router()`
- HTTP POST, `req.body`, dan pola Post-Redirect-Get (PRG)
- Membaca pesan galat backend: `TypeError`, `Failed to lookup view`, `EADDRINUSE`
