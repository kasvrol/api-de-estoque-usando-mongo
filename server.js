const express = require('express');
const customExpress = require('./config/customApp');
const PORT = process.env.PORT || 5000;
const app = express();

customExpress(app);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})