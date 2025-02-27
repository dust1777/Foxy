const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
  name: 'weather',
  aliases: ['weather', 'clima', 'temp', 'temperatura'],
  cooldown: 3,
  guildOnly: false,
  clientPerms: ['EMBED_LINKS', 'READ_MESSAGE_HISTORY'],

  async run(client, message, args) {
    weather.find({ search: args.join(' '), degreeType: 'C' }, (error, result) => {
      if (error) return message.foxyReply(error);
      if (!args[0]) return message.foxyReply('Por favor, digite uma localização');

      if (result === undefined || result.length === 0) return message.foxyReply('Localização inválida!');

      const { current } = result[0];
      const { location } = result[0];

      const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Previsão do tempo para: ${current.observationpoint}`)
        .setThumbnail('https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png')
        .setColor(0x111111)
        .addField('Fuso horário', `UTC${location.timezone}`, true)
        .addField('Tipo:', 'Celsius', true)
        .addField('Temperatura', `${current.temperature}°`, true)
        .addField('Vento', current.winddisplay, true)
        .addField('Sensação', `${current.feelslike}°`, true)
        .addField('Umidade', `${current.humidity}%`, true);

      message.foxyReply(weatherinfo);
    });
  },

};
