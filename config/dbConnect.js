const mongoose = require('mongoose')
require('../models/Livros');

const db = mongoose.connect('mongodb://localhost/estoqueDeLivros', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com mongo realizada com sucesso')
}).catch(() => { console.log('Perda da conexão com o Mongo') })
