const livrosControllers = require('../controllers/livrosController');

const routers = (app) => {
    app.put('/livros/:id', livrosControllers.putLivros);

    app.post('/livros', livrosControllers.postLivros);

    app.get('/livros', livrosControllers.getLivros);

    app.get('/livros/:id', livrosControllers.getIdLivros);

    app.delete('/livros/:id', livrosControllers.deleteLivros);
}

module.exports = routers;