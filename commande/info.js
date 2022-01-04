
exports.run = (client, message, args, colors) => {
  const fs = require("fs");

  var memberavatar = message.author.avatarURL()
  var membername = message.author.username
  var mentionned = message.mentions.users.first();
  var getvalueof;
  if (mentionned) {
    var getvalueof = mentionned;
  } else {
    var getvalueof = message.author;
  }

  if (getvalueof.bot == true) {
    var checkbot = "L'utilisateur est un bot";
  } else {
    var checkbot = "N'est pas un bot";
  }
  if (getvalueof.presence.status == 'online') {
    var status = "En ligne";
  } else {
    var status = "Hors ligne";
  }

  message.channel.send({
    embed: {
      type: 'rich',
      description: '',
      fields: [{
        name: 'Pseudo',
        value: getvalueof.username,
        inline: true
      }, {
        name: 'User id',
        value: getvalueof.id,
        inline: true
      }, {
        name: 'Discriminateur',
        value: getvalueof.discriminator,
        inline: true
      }, {
        name: 'Status',
        value: status,
        inline: true
      }, {
        name: 'Bot',
        value: checkbot,
        inline: true
      }],
      image: {
        url: getvalueof.avatarURL()
      },
      color: colors.defaut,
      footer: {
        text: 'by ToniPortal',
        proxy_icon_url: ' '
      },

      author: {
        name: membername,
        icon_url: memberavatar,
        proxy_icon_url: ' '
      }
    }
  });


}