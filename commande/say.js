exports.run = (client, message, args) => {

  if (message.author.bot) return;
  if (message.channel.type != 'text') return message.channel.sendMessage({ embed: { color: 1082119, author: { name: client.user.username, icon_url: client.user.avatarURL }, title: `**ERROR 404**`, description: "N'utulisez que les commande dans des serveurs !", timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: `©ToniPortal#8330` } } });
  const config = require("./config.json");

  if (config.owner_id == message.author.id) {
    var channel = client.channels.get('418510447377907712');
    channel.sendMessage({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**Commande**`,
        description: "_Command executed: " + config.prefix + "say_",
        fields: [{
          name: "**Demandé par:**",
          value: `${message.author.username} et seul lui peut faire cette commande`
        },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©${client.user.tag}`
        }
      }
    })
    const args = message.content.split(/\s+/g).slice(1);
    const messageRepeat = args.join(" ");
    message.channel.send(messageRepeat);
    if (message.deletable) {
      message.delete();
    }
  }


};