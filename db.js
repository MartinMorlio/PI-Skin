const mongoose = require('mongoose');

const { APP_DB, APP_NAME_DB } = process.env;
const MONGODB_URI = `mongodb://${APP_DB}/${APP_NAME_DB}`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(db => console.log('DB is connected'))
  .catch(err => console.log('DB error', err));


