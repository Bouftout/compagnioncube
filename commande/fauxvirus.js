exports.run = (client, message, args) => {

  if (message.author.bot) return;


  message.channel.send({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `**Fauxvirus ?**`,
      description: "C'est pour avoir certain virus crée par nos soins !(Shelp+moi)",
      url: 'http://lesbatchfile.16mb.com',
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
      }
    }
  })


};