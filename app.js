const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config');

//Importo todas las rutas.

const app = express();

//Configuraciones
app.set('port', config.PORT);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));

//Rutas
// app.use('/', /* Alguna ruta */)

module.exports = app;
