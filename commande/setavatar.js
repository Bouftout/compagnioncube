exports.run = (client, message, args) => {

  if (message.author.bot) return;
  if (message.channel.type != 'text') return message.channel.sendMessage({ embed: { color: 1082119, author: { name: client.user.username, icon_url: client.user.avatarURL }, title: `**ERROR 404**`, description: "N'utulisez que les commande dans des serveurs !", timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: `©ToniPortal#8330` } } });
  const config = require("./config.json");

  if (message.author.id === '255061967977447433') {
    let nombre = message.content.split(" ").slice(1, 2)[0];

    if (nombre == "0") {
      message.channel.sendMessage({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Commande**`,
          description: "Nombre invalide !!",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      })
    }

    if (nombre > "5") {
      message.channel.sendMessage({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Commande**`,
          description: "Veuillez mettre aux dessus de 5 !",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      })
    }
    if (nombre < "0") {
      message.channel.sendMessage({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Commande**`,
          description: "Veuillez mettre un nombre !",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      })
    }


    if (nombre == "1") {
      client.user.setAvatar('/Users/No Title/Desktop/Compagnion Cube/image/avatar/avatar1.jpg')
        .then(user => console.log(`Un nouveaux avatar est la`), message.channel.sendMessage({
          embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: `**Information**`,
            description: "L'image 1 pour le bot a était mis !",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: `©ToniPortal#8330`
            }
          }
        }))
        .catch(console.error);
    }
    if (nombre == "2") {
      client.user.setAvatar('/Users/No Title/Desktop/Compagnion Cube/image/avatar/avatar2.jpg')
        .then(user => console.log(`Un nouveaux avatar est la`), message.channel.sendMessage({
          embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: `**Information**`,
            description: "L'image 2 pour le bot a était mis !",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: `©ToniPortal#8330`
            }
          }
        }))
        .catch(console.error);
    }

    if (nombre == "3") {
      client.user.setAvatar('/Users/No Title/Desktop/Compagnion Cube/image/avatar/avatar3.jpg')
        .then(user => console.log(`Un nouveaux avatar est la`), message.channel.sendMessage({
          embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: `**Information**`,
            description: "L'image 3 pour le bot a était mis !",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: `©ToniPortal#8330`
            }
          }
        }))
        .catch(console.error);
    }

    if (nombre == "4") {
      client.user.setAvatar('/Users/No Title/Desktop/Compagnion Cube/image/avatar/avatar4.jpg')
        .then(user => console.log(`Un nouveaux avatar est la`), message.channel.sendMessage({
          embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: `**Information**`,
            description: "AMENO,AMENOOOOOOO",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: `©ToniPortal#8330`
            }
          }
        }))
        .catch(console.error);
    }

    if (nombre == "5") {
      client.user.setAvatar('/Users/No Title/Desktop/Compagnion Cube/image/avatar/avatar5.jpg')
        .then(user => console.log(`Un nouveaux avatar est la`), message.channel.sendMessage({
          embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: `**Information**`,
            description: "L'image 5 pour le bot a était mis !",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: `©ToniPortal#8330`
            }
          }
        }))
        .catch(console.error);
    }

  } else {
    message.sendMessage({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**ERROR**`,
        description: "Vous n'êtes pas le ```'owner'``` du bot",
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
}

