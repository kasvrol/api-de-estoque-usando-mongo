const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost/tresawallethomolog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com mongo sucesso')
}).catch((error) => { console.log(error) })

exports.modules = db