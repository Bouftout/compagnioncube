exports.run = (client, message, args) => {

  if (message.author.bot) return;
  if (message.channel.type != 'text') return message.channel.sendMessage({ embed: { color: 1082119, author: { name: client.user.username, icon_url: client.user.avatarURL }, title: `**ERROR 404**`, description: "N'utulisez que les commande dans des serveurs !", timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: `©ToniPortal#8330` } } });
  const config = require("./config.json");

  var channel = client.channels.get('418510447377907712');
  channel.sendMessage({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**Commande**`,
      description: "_Command executed: " + config.prefix + "roll_",
      fields: [{
        name: "**Demandé par:**",
        value: `${message.author.username}`
      },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal#8330`
      }
    }
  })

  let number = message.content.split(" ").slice(1, 2)[0];
  if (number == null) {
    message.channel.sendMessage({
      embed: {
        color: 1082119,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "ERROR",
        description: "Insère un nombre s'il te plaît !"
        ,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©ToniPortal#8330`
        }
      }
    })
    return;
  }
  var roll = Math.floor(Math.random() * number) + 1;

  message.channel.sendMessage({
    embed: {
      color: 1082119,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },

      title: "Tu as roll: " + roll + ".Tu as dit: " + number + ".",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal#8330`
      }
    }
  })
}