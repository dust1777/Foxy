const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = {
  name: 'esponja',
  aliases: ['esponja', 'fodase', 'fds'],
  cooldown: 3,
  guildOnly: true,
  async run(client, message, args) {
    if (!message.guild.me.hasPermission('ATTACH_FILES')) return message.channel.send('Eu preciso da permissão `enviar arquvios` para fazer isso!');

    message.channel.startTyping();
    const canvas = Canvas.createCanvas(500, 400);
    const ctx = canvas.getContext('2d');
    const sayMessage = args.join(' ');
    if (!sayMessage) return message.channel.send('Digite algo antes');
    const background = await Canvas.loadImage('./src/assets/fodase.jpeg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Slightly smaller text placed above the member's display name
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#000000';
    ctx.fillText(`${sayMessage}`, canvas.width / 15.5, canvas.height / 13.5);

    // Add an exclamation point here and below

    ctx.beginPath();
    ctx.arc(125, 125, 100, 6, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'respier.png');
    message.channel.stopTyping();

    message.channel.send(attachment);
    const embed = new Discord.MessageEmbed()
      .setTitle('Logs de comandos')
      .setDescription(`**Comando:** f!laranjo \n **Autor:** ${message.author.tag} / ${message.author.id} \n\n **Servidor** ${message.guild.name} / ${message.guild.id} \n\n **Mensagem:** ${sayMessage} \n\n Link: [Mensagem](${message.url})`);
    client.logsWebhook.send({
      username: 'Logs',
      avatarURL: 'https://cdn.discordapp.com/attachments/766414535396425739/789255465125150732/sad.jpeg',
      embeds: [embed],
    });
  },
};
