const mongoose = require('mongoose')

const livro = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    numeroPaginas: { type: Number },
})

exports.modules = mongoose.model('livro', livro)