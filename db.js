const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/skin';

mongoose
    .connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(db => console.log(`Base de datos conectada a ${db.connection.name}`))
    .catch(err => console.log('Error en conexión en base de datos', err))
