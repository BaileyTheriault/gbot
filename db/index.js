const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gbot', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

const arraySchema = new mongoose.Schema({});
const arrayModel = mongoose.model('array', arraySchema, 'array');

const stringSchema = new mongoose.Schema({});
const stringModel = mongoose.model('string', stringSchema, 'string');

db.once('open', () => console.log('connected to db'));

module.exports = {
  arrayModel,
  stringModel,
};
