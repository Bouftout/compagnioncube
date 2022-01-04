exports.run = (client, message, args) => {


  if (message.author.bot) return;


  const sayMessage = message.author.username;
  const config = require("../config.json");


  if (message.author.id == config.owner_id) {
    try {
      const com = eval(message.content.split(" ").slice(1).join(" "));

      message.channel.send('```\n' + com + '```');

    } catch (e) {
      message.channel.send('```\n' + e + '```');

    }
  } else {

    message.channel.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Commande**`,
        description: "Cette commande n'est disponible que pour mon créateur",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }
    })

  }

};