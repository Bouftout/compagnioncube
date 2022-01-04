exports.run = (client, message, args) => {
  if (message.author.bot) return;

  var rps = args.join(" ");
  if (!rps || rps != "pile" && rps != "face") {
    message.reply("Veuillez entrer pile ou face.");

  }

  function getrandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const random = getrandom(1, 2)


  if (rps == "pile") {
    if (random == "1") {
      message.channel.sendMessage({
        embed: {
          color: 1082119,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Pile**`,
          description: "Vous avez gagné",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      })

    }

    if (random == "2") {

      message.channel.sendMessage({
        embed: {
          color: 1082119,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Pile**`,
          description: "Vous avez perdu",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      })

    }

  }


  if (rps == "face") {


    if (random == "1") {
      message.channel.sendMessage({
        embed: {
          color: 1082119,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Face**`,
          description: "Vous avez perdu",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      })


    }

    if (random == "2") {

      message.channel.sendMessage({
        embed: {
          color: 1082119,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Face**`,
          description: "Vous avez gagné",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      })

    }


  }





}