const Discord = require('discord.js');

module.exports = {
  name: 'shy',
  aliases: ['shy', 'timido'],
  cooldown: 3,
  guildOnly: false,
  clientPerms: ['ATTACH_FILES', 'EMBED_LINKS', 'READ_MESSAGE_HISTORY'],
  
  async run(client, message, args) {
    const sayMessage = args.join(' ');
    const list = [
      'https://cdn.zerotwo.dev/SHY/747bfa31-8afb-47ae-b91c-ea1083e934a3.gif',
      'https://cdn.zerotwo.dev/SHY/d74c0e5c-50c5-43a7-a947-5ed02f0e5fc4.gif',
      'https://cdn.zerotwo.dev/SHY/139a2f7d-a381-48ef-8e56-fa01eecf1301.gif',
    ];

    const rand = list[Math.floor(Math.random() * list.length)];

    const avatar = message.author.displayAvatarURL({ format: 'png' });
    const embed = new Discord.MessageEmbed()
      .setColor('#000000')
      .setDescription(`${message.author} está tímido ${sayMessage}`)
      .setImage(rand)
      .setTimestamp()
      .setFooter(' | Gifs by: ByteAlex#1644')
      .setAuthor(message.author.tag, avatar);
    await message.foxyReply(embed);
  },
};
