exports.run = (client, message, args) => {

  if (message.author.bot) return;


  message.delete()

  var result = Math.floor((Math.random() * 2) + 1);
  if (result == 1) {
    message.channel.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Flip ?**`,
        description: "La pièce a atterri sur pile.",
        fields: [{
          name: "**Demandé par:**",
          value: `${message.author.username}`
        },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©${client.user.tag}`
        }
      }
    })
  } else if (result == 2) {
    message.channel.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Flip ?**`,
        description: "La pièce a atterri sur face.",
        fields: [{
          name: "**Demandé par:**",
          value: `${message.author.username}`
        },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©${client.user.tag}`
        }
      }
    })
  }

}