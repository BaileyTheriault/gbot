const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gbot', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', () => console.log('connected to db'));