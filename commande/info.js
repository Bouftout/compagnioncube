
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


  var avatarDecoration = getvalueof.avatarDecoration

  if (getvalueof.bot == true) {
    var checkbot = "L'utilisateur est un bot";
  } else {
    var checkbot = "N'est pas un bot";
  }
  if (avatarDecoration == null) {
    avatarDecoration = "N'a pas de décoration d'avatar";
  }


  message.channel.send({
    embeds: [{
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
        name: 'avatarDecoration',
        value: avatarDecoration,
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
    }]
  });


}