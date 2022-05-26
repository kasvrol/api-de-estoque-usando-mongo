const express = require('express')
const app = express();

const livros = [
    { id: 1, 'titulo': 'Senhor dos anéis' },
    { id: 2, 'titulo': 'O Hobbit' }
]

app.get('/', (request, response) => {
    response.status(200).send('Curso de Node')
})

exports.modules = app;