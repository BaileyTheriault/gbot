const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gbot', { useNewUrlParser: true, useUnifiedTopology: true });

const arraySchema = new mongoose.Schema({});
const arrayModel = mongoose.model('array', arraySchema, 'array');

const stringSchema = new mongoose.Schema({});
const stringModel = mongoose.model('string', stringSchema, 'string');

const objectSchema = new mongoose.Schema({});
const objecModel = mongoose.model('object', objectSchema, 'object');

module.exports = {
  arrayModel,
  stringModel,
  objecModel,
};
