const Discord = require('discord.js');

const client = new Discord.Client();
const arrMethods = require('./db/queries/arrayQueries');
const strMethods = require('./db/queries/stringQueries');
const objMethods = require('./db/queries/objectQueries');
const msgMethods = require('./db/queries/messageQueries');
require('dotenv').config();

client.on('message', (msg) => {
  const queryMessage = msg.content.split(' ');

  if (queryMessage[0] === '!a' || queryMessage[0] === '!array') {
    arrMethods.search(queryMessage[1])
      .then((res) => res.toJSON())
      .then((data) => msg.channel.send(data.url))
      .catch(() => msg.channel.send(`Unable to find an array method called ${queryMessage[1]}.`));
  }

  if (queryMessage[0] === '!s' || queryMessage[0] === '!string') {
    strMethods.search(queryMessage[1])
      .then((res) => res.toJSON())
      .then((data) => msg.channel.send(data.url))
      .catch(() => msg.channel.send(`Unable to find a string method called ${queryMessage[1]}.`));
  }

  if (queryMessage[0] === '!o' || queryMessage[0] === '!object') {
    objMethods.search(queryMessage[1])
      .then((res) => res.toJSON())
      .then((data) => msg.channel.send(data.url))
      .catch(() => msg.channel.send(`Unable to find an object method called ${queryMessage[1]}.`));
  }

  if (msg.channel.name !== 'bot-commands') {
    msgMethods.insert(msg);
  }
});

client.login(process.env.BOT_TOKEN);
