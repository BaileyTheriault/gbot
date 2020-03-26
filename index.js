const Discord = require('discord.js');

const client = new Discord.Client();
const arrMethods = require('./db/queries/arrayQueries');
require('dotenv').config();

client.on('ready', () => console.log('Bot is online!'));

client.on('message', (msg) => {
  const queryMessage = msg.content.split(' ');
  switch (queryMessage[0]) {
    case '!a':
      return arrMethods.search(queryMessage[1])
        .then((res) => res.toJSON())
        .then((data) => msg.channel.send(data.url))
        .catch(() => msg.channel.send(`Unable to find an array method called ${queryMessage[1]}.`));
    case '!array':
      return arrMethods.search(queryMessage[1])
        .then((res) => res.toJSON())
        .then((data) => msg.channel.send(data.url))
        .catch(() => msg.channel.send(`Unable to find an array method called ${queryMessage[1]}.`));
    default:
      return msg.channel.send('Please use !a || !array for array methods.');
  }
});

client.login(process.env.BOT_TOKEN);
