const express = require('express')
const db = require('../config/dbConnect')
const app = express();

const livrosApp = () => {
    const livros = [
        { id: 1, 'titulo': 'Senhor dos anéis' },
        { id: 2, 'titulo': 'O Hobbit' }
    ]

    app.get('/', (request, response) => {
        response.status(200).send('Curso de Node')
    })

    app.post('/livros', (request, response) => {
        livros.push(request.body)
        response.status(201).send('Ivro cadastrado com sucesso')
    })

    app.put('/livros/:id', (request, response) => {
        livros.push(request.body)
        response.status(201).send('Ivro cadastrado com sucesso')
    })
}

exports.modules = livrosApp;