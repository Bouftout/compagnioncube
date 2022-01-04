exports.run = (client, message, args) => {



  message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);;
  if (args[0] == "oui") {
    const { voiceChannel } = message.member;
    voiceChannel.leave();
  }
  if (args[0] == "") {
    message.channel.sendMessage({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**Confirmation ??**`,
        description: "_Vous êtes sûr de vouloir leave le bot :_\n**oui** ou **non**",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©ToniPortal#8330`
        }
      }
    }).then(response => response.delete({timeout:"4000"}))
      .then(() => {
        message.channel.awaitMessages(response => response.content === 'oui', {
          max: 1,
          time: 30000,
          errors: ['time'],
        })
          .then((collected) => {
            const { voiceChannel } = message.member;
            voiceChannel.leave();
          })
      })
  }

};