const mongoose = require('mongoose');
const { timeout } = require('nodemon/lib/config');


const Livro = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    numeroPaginas: { type: Number },
    volume: { type: Number },
    edicao: { type: Number },
    date: { type: Date, default: Date.now },
}
);

mongoose.model('Livro', Livro)