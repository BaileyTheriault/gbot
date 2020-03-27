const db = require('../index');

const insert = (message) => {
  const newMessage = new db.MessageModel({
    author: message.author.name,
    authorId: message.author.id,
    authorDis: message.author.discriminator,
    date: Date.now(),
    text: message.content,
    channel: message.channel.name,
  });

  newMessage.save();
};

module.exports = {
  insert,
};
