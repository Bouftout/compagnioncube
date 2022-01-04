exports.run = (client, message, args) => {
  if (message.author.bot) return;


  message.channel.send({
    embed: {
      color: 1082119,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**jeff**`,
      description: "Jeff a eu une fille avec sa femme....",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal#8330`
      }
    }
  }).then(response => response.delete({timeout:"4000"}))

};