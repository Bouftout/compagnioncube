exports.run = (client, message, args, colors) => {

  if (message.author.bot) return;

  message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);;

  let nombremax = 6

  function getrandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  let nombre = message.content.split(" ").slice(1, 2)[0];



  function getrandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  if (nombre == "random" || nombre == null) {
    const randomchiffre = getrandom(1, nombremax)

    message.channel.send({
      embed: {
        title: `Core ${randomchiffre}`,
        color: colors.defaut,
        timestamp: new Date(),
      },
      files: [{
        attachment: `./image/core/core${randomchiffre}.jpg`,
        name: `core${randomchiffre}.jpg`
      }]
    }).catch(console.error);
  } else {

    if (nombre == "0") {
      message.channel.send({
        embed: {
          color: colors.error,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Commande**`,
          description: "Il n'a pas trouvé d'image\nChiffre 0 !!",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      }).then(response => response.delete({ timeout: "10000" }))
    }

    if (nombre > nombremax) {
      message.channel.send({
        embed: {
          color: colors.error,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Commande**`,
          description: `Il n'a pas trouvé d'image\nIl faut mettre en dessoue du chiffre`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      })
    }
    if (nombre < "0") {
      message.channel.send({
        embed: {
          color: colors.error,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Commande**`,
          description: "Il n'a pas trouvé d'image\nVous allez trop bas",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      })
    }




    switch (nombre) {

      case nombre:
        message.channel.send({
          embed: {
            title: `Core ${nombre}`,
            color: colors.defaut,
            timestamp: new Date(),
          },
          files: [{
            attachment: `./image/core/core${nombre}.jpg`,
            name: `core${nombre}.jpg`
          }]
        }).catch(console.error);
        break;

      default:
        message.channel.send({
          embed: {
            color: colors.error,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "ERROR",
            description: "Veuillez mettre un nombre valide"
            ,
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: `©ToniPortal#8330`
            }
          }
        }).then(response => response.delete({ timeout: "10000" }))
        break;
    }


  }


};

exports.help = {
  usage: `<chiffre>`,
  description: `Affiche un "core" de portal random si vous ne mettez aucun chiffre`
};
