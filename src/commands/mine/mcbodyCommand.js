module.exports = {
  name: 'mcbody',
  aliases: ['mcbody'],
  cooldown: 5,
  guildOnly: false,
  clientPerms: ['ATTACH_FILES', 'EMBED_LINKS', 'READ_MESSAGE_HISTORY'],

  async run(client, message, args) {
    const user = args.join(' ');
    if (!user) return message.foxyReply('<:Minecraft:804858374780878868> **|** Especifique um usuário');

    const discord = require('discord.js');
    if (user.length > 20) return message.foxyReply('Digite no mínimo 20 caractéres')
    const body = `https://mc-heads.net/body/${user}`;

    const embed = new discord.MessageEmbed()
      .setColor(client.colors.mine)
      .setTitle(`Corpo de ${user}`)
      .setImage(body);
    message.foxyReply(embed);
  },
};
