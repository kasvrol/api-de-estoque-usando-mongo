const mongoose = require('mongoose')
require('../controller/livrosController');

const db = mongoose.connect('mongodb://localhost/estoqueDeLivros', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com mongo realizada com sucesso')
}).catch(() => { console.log('Perda da conexão com o Mongo') })

exports.modules = db