const express = require('express');
const cors = require('cors');
require('./dbConnect');
const routers = require('../routes/routes');

const customApp = (app) => {
    app.use(express.json());

    app.use('/*', (request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        response.header('Access-Control-Allow-Headers', 'Acess, Content-type, Authorization, Acept');

        next()
        app.use(cors());
    })

    routers(app)
}

module.exports = customApp;