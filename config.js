const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MONGO_DB: process.env.MONGO_DB || 'skin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    PORT: process.env.PORT || 3000
}
