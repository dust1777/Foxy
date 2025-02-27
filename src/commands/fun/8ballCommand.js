module.exports = {
  name: '8ball',
  aliases: ['8ball', 'eightball', '8', 'ask'],
  cooldown: 5,
  guildOnly: false,
  clientPerms: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
  async run(client, message, args) {
    const arg = args.join(" ")

    if(!arg) return message.foxyReply(`${client.emotes.success} **|** Digite algo para que eu possa responder`)
    const results = ['Sim', 'Não', 'Talvez', 'Com certeza!', 'Provavelmente sim', 'Provavelmente não', 'Não entendi, pergunte novamente'];
    const result = Math.floor((Math.random() * results.length));
    message.foxyReply(results[result]);
  },
};
