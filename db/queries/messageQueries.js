const db = require('../index');

const insert = async (message) => {
  const newMessage = new db.MessageModel({
    author: message.member.displayName,
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
