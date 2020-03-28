const Discord = require('discord.js');

const formatEmbed = (msg, prLink) => {
  const embedObj = new Discord.MessageEmbed()
    .setColor('#3937a5')
    .setTitle(`${msg.member.displayName}'s Pull Request`)
    .setURL(prLink)
    .setTimestamp()
    .setThumbnail('https://static1.squarespace.com/static/522a22cbe4b04681b0bff826/t/581cc65fe4fcb5a68ecd940c/1478280803080/hrhq-avatar.png?format=1500w')
    .addFields({
      name: 'User Assigned',
      value: 'Pending',
      inline: true,
    },
    {
      name: 'PR Status',
      value: 'Pending',
      inline: true,
    });

  return embedObj;
};

module.exports = {
  formatEmbed,
};
