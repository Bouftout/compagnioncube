exports.run = (client, message, args) => {

  if (message.author.bot) return;


  const arg = message.content.split(/\s+/g).slice(1);
  if (arg.length > 0) {
    const calcul = parseInt(arg[0]) / 20;
    message.channel.sendMessage({
      embed: {
        color: 1082119,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**Rosti**`,
        description: `Cela fait ENVIRON ${(calcul * 60).toFixed()} rösti et ${(calcul * 10).toFixed()} steaks.`,
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
  } else {
    message.channel.sendMessage({
      embed: {
        color: 1082119,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**ERROR**`,
        description: "Il manque un paramètre [nombre]",
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
  }


};