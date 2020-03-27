const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gbot', { useNewUrlParser: true, useUnifiedTopology: true });

const arraySchema = new mongoose.Schema({});
const ArrayModel = mongoose.model('array', arraySchema, 'array');

const stringSchema = new mongoose.Schema({});
const StringModel = mongoose.model('string', stringSchema, 'string');

const objectSchema = new mongoose.Schema({});
const ObjectModel = mongoose.model('object', objectSchema, 'object');

const messageSchema = new mongoose.Schema({
  author: String,
  authorId: String,
  authorDis: String,
  date: Date,
  text: String,
  channel: String,
});
const MessageModel = mongoose.model('message', messageSchema, 'logged');

module.exports = {
  ArrayModel,
  StringModel,
  ObjectModel,
  MessageModel,
};
