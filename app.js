const express = require('express');
const app = express();
const pageRoutes = require('./routes/page.routes'); // 1. Import Router

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Wajib untuk menangkap form berjenis application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// 2. Pasang router ke pipeline Express (Hapus app.get('/') lama)
app.use('/', pageRoutes);

app.use((req, res) => { res.status(404).send('404 Not Found'); });
app.listen(3000, () => console.log('Server MVC Aktif!'));