exports.run = (client, message, args) => {

  if (message.author.bot) return;
  const randomWordFR = require('random-word-fr');
  message.delete()

  message.channel.send({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**Mot random:**`,
      description: randomWordFR(),
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©${client.user.tag}`
      }
    }
  })

}