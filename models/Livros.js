const mongoose = require('mongoose')


const Livro = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    numeroPaginas: { type: Number },
}
);

mongoose.model('Livro', Livro)