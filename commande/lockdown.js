

exports.run = (client, message, args, colors) => {

  const ms = require('ms');

  if (!client.lockit) client.lockit = [];

  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('Vous devez définir une durée pour le verrouillage en heures, minutes ou secondes.');

  if (validUnlocks.includes(time)) {
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Verrouillage levé.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Canal verrouillé pour ${ms(ms(time), { long: true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('Verrouillage levé.')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};

exports.help = {
  description: 'Cela verrouillera un canal pour la durée définie, que ce soit en heures, minutes ou secondes.',
  usage: '<durées>'
};