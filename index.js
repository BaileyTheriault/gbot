const Discord = require('discord.js');

const client = new Discord.Client();
const arrMethods = require('./db/queries/arrayQueries');
const strMethods = require('./db/queries/stringQueries');
const objMethods = require('./db/queries/objectQueries');
require('dotenv').config();

client.on('message', (msg) => {
  const queryMessage = msg.content.split(' ');

  if (queryMessage[0] === '!a' || queryMessage[0] === '!array') {
    return arrMethods.search(queryMessage[1])
      .then((res) => res.toJSON())
      .then((data) => msg.channel.send(data.url))
      .catch(() => msg.channel.send(`Unable to find an array method called ${queryMessage[1]}.`));
  }

  if (queryMessage[0] === '!s' || queryMessage[0] === '!string') {
    return strMethods.search(queryMessage[1])
      .then((res) => res.toJSON())
      .then((data) => msg.channel.send(data.url))
      .catch(() => msg.channel.send(`Unable to find an string method called ${queryMessage[1]}.`));
  }

  if (queryMessage[0] === '!o' || queryMessage[0] === '!object') {
    return objMethods.search(queryMessage[1])
      .then((res) => res.toJSON())
      .then((data) => msg.channel.send(data.url))
      .catch(() => msg.channel.send(`Unable to find an object method called ${queryMessage[1]}.`));
  }

  return true;
});

client.login(process.env.BOT_TOKEN);
