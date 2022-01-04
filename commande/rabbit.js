exports.run = (client, message, args) => {

  if (message.author.bot) return;
  if (message.channel.type != 'text') return message.channel.sendMessage({ embed: { color: 1082119, author: { name: client.user.username, icon_url: client.user.avatarURL }, title: `**ERROR 404**`, description: "N'utulisez que les commande dans des serveurs !", timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: `©ToniPortal#8330` } } });
  const config = require("./config.json");

  message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);;
  var channel = client.channels.get('418510447377907712');
  channel.sendMessage({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**Commande**`,
      description: "_Command executed: " + config.prefix + "rabbit_",
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



  let nombre = message.content.split(" ").slice(1, 2)[0];
  if (nombre == null) {
    message.channel.sendMessage({
      embed: {
        color: 1082119,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "ERROR",
        description: "Insère un nombre s'il te plaît !"
        ,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©ToniPortal#8330`
        }
      }
    })
    return;
  }
  if (nombre == "0") {
    message.sendMessage({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**Commande**`,
        description: "Il n'a pas trouvé d'image",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©ToniPortal#8330`
        }
      }
    })
  }

  if (nombre > "52") {
    message.sendMessage({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**Commande**`,
        description: "Il n'a pas trouvé d'image",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©ToniPortal#8330`
        }
      }
    })
  }
  if (nombre < "0") {
    message.sendMessage({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**Commande**`,
        description: "Il n'a pas trouvé d'image",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©ToniPortal#8330`
        }
      }
    })
  }

  if (nombre == "1") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit1.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "2") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit2.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "3") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit3.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "4") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit4.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "5") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit5.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "6") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit6.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "7") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit7.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "8") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit8.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "9") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit9.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "10") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit10.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }

  if (nombre == "11") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit11.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }

  if (nombre == "12") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit12.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "13") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit13.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "14") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit14.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "15") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit15.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "16") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit16.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }

  if (nombre == "17") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit17.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }

  if (nombre == "18") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit18.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "19") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit19.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }



  if (nombre == "20") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit20.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "21") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit21.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "22") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit22.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }


  if (nombre == "23") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit23.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "24") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit24.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }
  if (nombre == "24") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit25.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "26") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit26.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "27") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit27.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "28") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit16.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "30") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit30.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }



  if (nombre == "31") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit31.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "32") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit32.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "33") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit31.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "34") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit34.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }



  if (nombre == "35") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit35.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }



  if (nombre == "36") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit36.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "36") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit36.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "37") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit38.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "38") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit38.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "39") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit39.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "40") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit40.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "41") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit41.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "42") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit42.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "43") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit43.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "44") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit44.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "45") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit45.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);
  }


  if (nombre == "46") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit46.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "47") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit47.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }


  if (nombre == "48") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit48.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "49") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit49.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "50") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit50.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }
  if (nombre == "51") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit51.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }
  if (nombre == "52") {
    message.channel.send('Voici le lapin!!', {
      embed: {
      },
      files: [{
        attachment: './image/rabbit/rabbit52.jpg',
        name: 'rabbit.jpg'
      }]
    })
      .then(console.log)
      .catch(console.error);

  }

};