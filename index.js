const express = require('express');
const app = express();
const port = 3000;
const tugasRoutes = require('./routes/tugasRoutes');

app.use(express.json());

app.use('/', tugasRoutes);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});