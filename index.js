/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const Discord = require('discord.js');

const client = new Discord.Client();
const arrMethods = require('./db/queries/arrayQueries');
const strMethods = require('./db/queries/stringQueries');
const objMethods = require('./db/queries/objectQueries');
const msgMethods = require('./db/queries/messageQueries');
const embedMethods = require('./methods/embed');
require('dotenv').config();

client.on('message', async (msg) => {
  const queryMessage = msg.content.split(' ');

  if (queryMessage[0] === '!a' || queryMessage[0] === '!array') {
    try {
      const methodRes = await arrMethods.search(queryMessage[1]);
      const methodData = await methodRes.toJSON();
      await msg.channel.send(methodData.url);
    } catch (err) {
      msg.channel.send(`Unable to find an array method called ${queryMessage[1]}.`);
    }
  }

  if (queryMessage[0] === '!s' || queryMessage[0] === '!string') {
    try {
      const methodRes = await strMethods.search(queryMessage[1]);
      const methodData = await methodRes.toJSON();
      await msg.channel.send(methodData.url);
    } catch (err) {
      msg.channel.send(`Unable to find a string method called ${queryMessage[1]}.`);
    }
  }

  if (queryMessage[0] === '!o' || queryMessage[0] === '!object') {
    try {
      const methodRes = await objMethods.search(queryMessage[1]);
      const methodData = await methodRes.toJSON();
      await msg.channel.send(methodData.url);
    } catch (err) {
      msg.channel.send(`Unable to find an object method called ${queryMessage[1]}.`);
    }
  }

  if (queryMessage[0] === '!pr') {
    const embedMsg = embedMethods.formatEmbed(msg, queryMessage[1]);

    try {
      const embed = await msg.channel.send(embedMsg);
      await embed.react('693211024287072337');
      await embed.react('693211024748314655');
    } catch (err) {
      console.log(err);
    }
  }

  if (msg.channel.name !== 'bot-commands' && msg.channel.name !== 'slack-bld09' && msg.channel.name !== 'slack-bld08') {
    try {
      await msgMethods.insert(msg);
    } catch (err) {
      console.error(err);
    }
  }
});

client.on('messageReactionAdd', async (reaction) => {
  if (reaction._emoji.name === 'issue' && reaction.count === 2) {
    try {
      const recievedEmbed = reaction.message.embeds[0];
      const updatedEmbed = new Discord.MessageEmbed(recievedEmbed);
      const username = updatedEmbed.title.split(' ').slice(0, 2).join(' ');
      updatedEmbed.fields[1].value = 'In Progress';
      updatedEmbed.fields[0].value = username.slice(0, username.length - 2);

      await reaction.message.edit(updatedEmbed);
    } catch (err) {
      console.log(err);
    }
  }

  if (reaction._emoji.name === 'issueClosed' && reaction.count === 2) {
    try {
      const recievedEmbed = reaction.message.embeds[0];
      const updatedEmbed = new Discord.MessageEmbed(recievedEmbed);
      updatedEmbed.fields[1].value = 'Completed';

      await reaction.message.edit(updatedEmbed);
    } catch (err) {
      console.log(err);
    }
  }
});

client.login(process.env.BOT_TOKEN);
