exports.run = (client, message, args,colors) => {

  if (message.author.bot) return;


  const arg = message.content.split(/\s+/g).slice(1);
  if (arg.length > 0) {
    const calcul = parseInt(arg[0]) / 20;
    const embed = {
      color: colors.ok,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**Rosti**`,
      description: `Cela fait ENVIRON ${(calcul * 60).toFixed()} rösti et ${(calcul * 10).toFixed()} steaks.`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal#8330`
      }
    }
  
    message.channel.send({ embeds: [embed] })
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
    const embed = {
      color: colors.error,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**Error**`,
      description: `Il manque un paramètre [nombre].`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal#8330`
      }
    }
  }


};