exports.run = (client, message, args) => {

  const nombremax = "9"

  function getrandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let nombre = message.content.split(" ").slice(1, 2)[0];

  if (nombre == "random"|| nombre == null) {
    const randomchiffre = getrandom(1, nombremax)

    if (randomchiffre == 1) {
      un()
    }
    if (randomchiffre == 2) {
      deux()
    }
    if (randomchiffre == 3) {
      trois()
    }
    if (randomchiffre == 4) {
      quatre()
    }
    if (randomchiffre == 5) {
      cinq()
    }
    if (randomchiffre == 6) {
      six()
    }
    if (randomchiffre == 7) {
      sept()
    }
    if (randomchiffre == 8) {
      huit()
    }
    if (randomchiffre == 9) {
      neuf()
    }

  } else {
    if (nombre == "0") {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `**Commande**`,
          description: "Il n'a pas trouvé d'image\nChiffre 0 !!",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          }
        }
      })
    }

    if (nombre > nombremax) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `**Commande**`,
          description: "Il n'a pas trouvé d'image\nIl faut mettre en dessoue du chiffre " + nombremax,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          }
        }
      })
    }
    if (nombre < "0") {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `**Commande**`,
          description: "Il n'a pas trouvé d'image\nVous allez trop bas",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          }
        }
      })
    }


  }

  function un() {

    message.channel.send({
      embed: {
        color: 0xff80ff,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Information sur le Compagion Cube de Portal !**`,
        description: "Après que Chell quitte le Centre une fois Portal 2 terminé, un Cube de Voyage brûlé lui est éjecté.Ce Cube n'est pas le nouveau, créé pour Portal 2, mais le même modèle que dans Portal. Valve a d ailleurs dit qu il s agit de l'exact même Cube que le joueur a euthanasié dans le premier Portal qui lui est rendu",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }
    })
      .then(console.log)
      .catch(console.error);

  }

  if (nombre == "1") {
    un()

  }


  function deux() {
    message.channel.send({
      embed: {
        color: 0xff80ff,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Information sur ${client.user.tag} !**`,
        description: "Le bot a beaucoup de commande qui ne serve à rien",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }
    })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "2") {
    deux()

  }

  function trois() {

    message.channel.send({
      embed: {
        color: 0xff80ff,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Information sur le Compagion Cube de Portal !**`,
        description: "Après que Chell quitte le Centre une fois Portal 2 terminé, un Cube de Voyage brûlé lui est éjecté.Ce Cube n'est pas le nouveau, créé pour Portal 2, mais le même modèle que dans Portal. Valve a d ailleurs dit qu il s agit de l'exact même Cube que le joueur a euthanasié dans le premier Portal qui lui est rendu",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }
    })
      .then(console.log)
      .catch(console.error);

  }
  if (nombre == "3") {
    trois()

  }

  function quatre() {

    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
      .setTitle("**Fratricide**")
      .setAuthor("Compagnion Cube", client.user.avatarURL())
      /*
       * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
       */
      .setColor(0xff80ff)
      .setDescription("Faites tout ce qu'il faut pour survivre..")
      .setImage("https://i1.theportalwiki.net/img/3/3d/Achievement_Fratricide.png")
      .setFooter(`©ToniPortal`, client.user.avatarURL())

      .setTimestamp()
    message.channel.send({ embed })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "4") {
    quatre()

  }

  function cinq() {

    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
      .setTitle("**Préservation de la masse**")
      .setAuthor("Compagnion Cube", client.user.avatarURL())
      /*
       * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
       */
      .setColor(0xff80ff)
      .setDescription("enfreindre les règles de la chambre d'essai 07")
      .setImage("https://i1.theportalwiki.net/img/2/23/Achievement_Preservation_of_Mass.jpg")
      .setFooter(`©ToniPortal`, client.user.avatarURL())

      .setTimestamp()
    message.channel.send({ embed })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "5") {
    cinq()

  }

  function six() {

    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
      .setTitle("**Troisième larron**")
      .setAuthor("Compagnion Cube", client.user.avatarURL())
      /*
      * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
      */
      .setColor(0xff80ff)
      .setDescription("Trouvez le cube d'accompagnement caché dans la chambre d'essai co-op.")
      .setImage("https://i1.theportalwiki.net/img/e/ec/Achievement_Party_of_Three.jpg")
      .setFooter(`©ToniPortal`, client.user.avatarURL())

      .setTimestamp()
    message.channel.send({ embed })
      .then(console.log)
      .catch(console.error);

  }
  if (nombre == "6") {
    six()

  }

  function sept() {

    message.channel.send({
      embed: {
        color: 0xff80ff,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Information sur le Compagion Cube de Portal !**`,
        description: "Les joueurs ayant pré-commandé Portal 2 via Steam ont reçu le Badge Cube de Voyage, un badge présentant le Cube de Voyage Lesté dans un portail, dans Team Fortress 2. Les joueurs ayant joués à tous les jeux du Potato Sack obtinrent le Badge de l'Associé à la Résurrection, qui partage le même modèle.\n"
          + " De plus, un des noms possibles pour les bots IA dans le mode Entraînement Hors-ligne ou sur un serveur est Companion Cube.",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }
    })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "7") {
    sept()


  }

  function huit() {

    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
      .setTitle("**WCC Flag/fr**")
      .setAuthor("Compagnion Cube", client.user.avatarURL())
      /*
      * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
      */
      .setColor(0xff80ff)
      .setDescription("Le drapeau WCC (WCC signifie Weighted Companion Cube en anglais, pour Cube de Voyage lesté) est un objet de type fanion attaché à l'antenne de Atlas et de P-body. Il porte un design similaire au Skin WCC.\n"
        + "Cet objet est offert après avoir réalisé avec succès le geste High Five en campagne coop.")
      .setImage("https://i1.theportalwiki.net/img/thumb/0/0d/Backpack_WCC_FLAG.png/90px-Backpack_WCC_FLAG.png")


      .setFooter(`©ToniPortal`, client.user.avatarURL())

      .setTimestamp()
    message.channel.send({ embed })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "8") {
    huit()


  }

  function neuf() {
    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
      .setTitle("**Tape-m'en cinq**")
      .setAuthor("Compagnion Cube", client.user.avatarURL())
      /*
      * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
      */
      .setColor(0xff80ff)
      .setDescription("Fêter la réussite de votre étalonnage cooperative")
      .setImage("https://i1.theportalwiki.net/img/4/4b/Achievement_High_Five.jpg")

      .setFooter(`©ToniPortal`, client.user.avatarURL())

      .setTimestamp()
    message.channel.send({ embed })
      .then(console.log)
      .catch(console.error);
  }
  if (nombre == "9") {
    neuf()

  }


};

exports.help = {
  usage: `<chiffre(entre 1 et ${nombremax})`,
  description: `Vous affiche des anectode sur portal`
};
