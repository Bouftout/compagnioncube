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
      description: "_Command executed: " + config.prefix + "noamoru.edu_",
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
  message.channel.sendMessage({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**Site de svt**`,
      url: "http://www.noamoru.ml/edu/svt/heredite.html",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal#8330`
      }
    }
  })

};