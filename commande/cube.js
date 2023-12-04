const nombremax = "15" // Le max +1

function getrandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

exports.run = (client, message, args, colors) => {


  if (args[1] == "random" || args[1] == undefined) {
    args[1] = getrandom(1, nombremax);
  }
  // console.log(args[1])

  var msg = "";
  var col = colors.ok;
  var img = "";

  switch (Number(args[1])) {
    case 1:
      msg = `Après que Chell quitte le Centre une fois Portal 2 terminé, 
      un Cube de Voyage brûlé lui est éjecté.Ce Cube n'est pas le nouveau, créé pour Portal 2, mais le même modèle que dans Portal. 
      Valve a d ailleurs dit qu il s agit de l'exact même Cube que le joueur a euthanasié dans le premier Portal qui lui est rendu`
      break;
    case 2:
      msg = "Le bot discord a beaucoup de commande qui ne serve pas à grand chose !"
      break;
    case 3:
      msg = "Faites tout ce qu'il faut pour survivre..."
      img = "https://i1.theportalwiki.net/img/3/3d/Achievement_Fratricide.png";
      break;
    case 4:
      msg = `Les joueurs ayant pré-commandé Portal 2 via Steam ont reçu le Badge Cube de Voyage, 
      un badge présentant le Cube de Voyage Lesté dans un portail, dans Team Fortress 2. \n
      Les joueurs ayant joués à tous les jeux du Potato Sack obtinrent le Badge de l'Associé à la Résurrection, qui partage le même modèle.\n
      De plus, un des noms possibles pour les bots IA dans le mode Entraînement Hors-ligne ou sur un serveur est Companion Cube.`
      break;
    case 5:
      msg = `Les fans de 'Minecraft' ont également eu la chance de retrouver le Companion Cube. Un pack de texture officiel de 'Portal' pour 'Minecraft' inclut le Companion Cube, permettant aux joueurs de l'intégrer dans leurs mondes de blocs cubiques.`;
      break;
    case 6:
      msg = `La communauté des fans de jeux vidéo a également rendu hommage au Companion Cube.\n
      Des œuvres artistiques, des mèmes et des discussions en ligne continuent de célébrer ce cube en tant qu'élément mémorable de 'Portal'.\n
      Il demeure un sujet de conversation fréquent parmi les joueurs.`;
      break;
    case 7:
      msg = `Le Companion Cube a également été intégré de manière ludique dans 'Left 4 Dead 2', un autre jeu de Valve. Il apparaît comme un objet que les joueurs peuvent trouver dans le mode 'Dark Carnival'. Son inclusion ajoute une dose d'humour et de familiarité pour les fans de 'Portal'.`;
      break;
    case 8:
      msg = "Au-delà des jeux, le Companion Cube a fait des apparitions dans divers médias et la culture populaire. Des bandes dessinées, des émissions de télévision et d'autres formes de divertissement ont rendu hommage à ce cube emblématique, témoignant de son impact au-delà de l'univers du jeu vidéo.";
      break;
    case 9:
      msg = "Pala9"
      break;
    case 10:
      msg = `Portal est connu pour ses dialogues humoristiques et son écriture inventive. L'un des moments les plus mémorables est le chant de GLaDOS dans le dernier niveau du premier jeu, avec la chanson "Still Alive" de Jonathan Coulton. La combinaison de la musique entraînante et des paroles satiriques a laissé une impression durable sur les joueurs.`;
      break;
    case 11:
      msg = `Les portails dans Portal ne sont pas seulement un élément de gameplay novateur, mais aussi une réalisation technique impressionnante.\n 
      Ils fonctionnent en créant une illusion d'espace en temps réel, permettant aux joueurs de voir à travers et de se déplacer entre différentes parties du niveau de manière transparente.`;
      break;
    case 12:
      msg = `Le personnage principal, Chell, n'a pas de lignes de dialogue dans le jeu. Cette décision narrative a été prise pour immerger davantage les joueurs dans l'environnement du laboratoire et pour renforcer le sentiment d'isolement et de mystère.`;
      break;
    case 13:
      msg = `Portal a été créé à l'origine comme un projet étudiant appelé "Narbacular Drop".
       L'équipe de développement, composée d'étudiants de la DigiPen Institute of Technology,
        a été recrutée par Valve après que Gabe Newell, le fondateur de Valve, ait vu le potentiel du concept.`;
      break;
    case 14:
      msg = `GLaDOS, l'intelligence artificielle du laboratoire, a été inspirée par un personnage
       de la série Half-Life 2 appelé "The Consul". Cependant, au fil du développement, 
       GLaDOS a évolué pour devenir un personnage emblématique avec un style unique et un sens de l'humour noir.`;
      break;
    default:
      msg = `Veuillez mettre un nombre valide en dessous de ${nombremax} !`
      col = colors.error;
      break;
  }

  return message.channel.send({
    embeds: [{
      color: col,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `Information sur le Compagion Cube de Portal !`,
      description: `${msg}`,
      timestamp: new Date(),
      image: {
        url: img,
      },
      footer: {
        icon_url: client.user.avatarURL(),
        text: colors.author
      }
    }
    ]
  })

  // if (nombre == "0") {
  // message.channel.send({
  //   embed: {
  //     color: 3447003,
  //     author: {
  //       name: client.user.username,
  //       icon_url: client.user.avatarURL()
  //     },
  //     title: `**Commande**`,
  //     description: "Il n'a pas trouvé d'image\nChiffre 0 !!",
  //     timestamp: new Date(),
  //     footer: {
  //       icon_url: client.user.avatarURL(),
  //       text: `©ToniPortal`
  //     }
  //   }
  // })
  // }

  // if (nombre > nombremax) {
  //   message.channel.send({
  //     embed: {
  //       color: 3447003,
  //       author: {
  //         name: client.user.username,
  //         icon_url: client.user.avatarURL()
  //       },
  //       title: `**Commande**`,
  //       description: "Il n'a pas trouvé d'image\nIl faut mettre en dessoue du chiffre " + nombremax,
  //       timestamp: new Date(),
  //       footer: {
  //         icon_url: client.user.avatarURL(),
  //         text: `©ToniPortal`
  //       }
  //     }
  //   })
  // }
  // if (nombre < "0") {
  //   message.channel.send({
  //     embed: {
  //       color: 3447003,
  //       author: {
  //         name: client.user.username,
  //         icon_url: client.user.avatarURL()
  //       },
  //       title: `**Commande**`,
  //       description: "Il n'a pas trouvé d'image\nVous allez trop bas",
  //       timestamp: new Date(),
  //       footer: {
  //         icon_url: client.user.avatarURL(),
  //         text: `©ToniPortal`
  //       }
  //     }
  //   })
  // }




  // function un() {

  //   message.channel.send({
  //     embed: {
  //       color: 0xff80ff,
  //       author: {
  //         name: client.user.username,
  //         icon_url: client.user.avatarURL()
  //       },
  //       title: `**Information sur le Compagion Cube de Portal !**`,
  //       description: "Après que Chell quitte le Centre une fois Portal 2 terminé, un Cube de Voyage brûlé lui est éjecté.Ce Cube n'est pas le nouveau, créé pour Portal 2, mais le même modèle que dans Portal. Valve a d ailleurs dit qu il s agit de l'exact même Cube que le joueur a euthanasié dans le premier Portal qui lui est rendu",
  //       timestamp: new Date(),
  //       footer: {
  //         icon_url: client.user.avatarURL(),
  //         text: `©ToniPortal`
  //       }
  //     }
  //   })
  //     .then(console.log)
  //     .catch(console.error);

  // }

  // if (nombre == "1") {
  //   un()
  // }


  // function deux() {
  //   message.channel.send({
  //     embed: {
  //       color: 0xff80ff,
  //       author: {
  //         name: client.user.username,
  //         icon_url: client.user.avatarURL()
  //       },
  //       title: `**Information sur ${client.user.tag} !**`,
  //       description: "Le bot a beaucoup de commande qui ne serve à rien",
  //       timestamp: new Date(),
  //       footer: {
  //         icon_url: client.user.avatarURL(),
  //         text: `©ToniPortal`
  //       }
  //     }
  //   })
  //     .then(console.log)
  //     .catch(console.error);
  // }
  // if (nombre == "2") {
  //   deux()

  // }

  // function trois() {

  //   message.channel.send({
  //     embed: {
  //       color: 0xff80ff,
  //       author: {
  //         name: client.user.username,
  //         icon_url: client.user.avatarURL()
  //       },
  //       title: `**Information sur le Compagion Cube de Portal !**`,
  //       description: "Après que Chell quitte le Centre une fois Portal 2 terminé, un Cube de Voyage brûlé lui est éjecté.Ce Cube n'est pas le nouveau, créé pour Portal 2, mais le même modèle que dans Portal. Valve a d ailleurs dit qu il s agit de l'exact même Cube que le joueur a euthanasié dans le premier Portal qui lui est rendu",
  //       timestamp: new Date(),
  //       footer: {
  //         icon_url: client.user.avatarURL(),
  //         text: `©ToniPortal`
  //       }
  //     }
  //   })
  //     .then(console.log)
  //     .catch(console.error);

  // }
  // if (nombre == "3") {
  //   trois()

  // }

  // function quatre() {

  //   const Discord = require("discord.js");
  //   const embed = new Discord.MessageEmbed()
  //     .setTitle("**Fratricide**")
  //     .setAuthor("Compagnion Cube", client.user.avatarURL())
  //     /*
  //      * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
  //      */
  //     .setColor(0xff80ff)
  //     .setDescription("Faites tout ce qu'il faut pour survivre..")
  //     .setImage("https://i1.theportalwiki.net/img/3/3d/Achievement_Fratricide.png")
  //     .setFooter(`©ToniPortal`, client.user.avatarURL())

  //     .setTimestamp()
  //   message.channel.send({ embed })
  //     .then(console.log)
  //     .catch(console.error);
  // }
  // if (nombre == "4") {
  //   quatre()

  // }

  // function cinq() {

  //   const Discord = require("discord.js");
  //   const embed = new Discord.MessageEmbed()
  //     .setTitle("**Préservation de la masse**")
  //     .setAuthor("Compagnion Cube", client.user.avatarURL())
  //     /*
  //      * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
  //      */
  //     .setColor(0xff80ff)
  //     .setDescription("enfreindre les règles de la chambre d'essai 07")
  //     .setImage("https://i1.theportalwiki.net/img/2/23/Achievement_Preservation_of_Mass.jpg")
  //     .setFooter(`©ToniPortal`, client.user.avatarURL())

  //     .setTimestamp()
  //   message.channel.send({ embed })
  //     .then(console.log)
  //     .catch(console.error);
  // }
  // if (nombre == "5") {
  //   cinq()

  // }

  // function six() {

  //   const Discord = require("discord.js");
  //   const embed = new Discord.MessageEmbed()
  //     .setTitle("**Troisième larron**")
  //     .setAuthor("Compagnion Cube", client.user.avatarURL())
  //     /*
  //     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
  //     */
  //     .setColor(0xff80ff)
  //     .setDescription("Trouvez le cube d'accompagnement caché dans la chambre d'essai co-op.")
  //     .setImage("https://i1.theportalwiki.net/img/e/ec/Achievement_Party_of_Three.jpg")
  //     .setFooter(`©ToniPortal`, client.user.avatarURL())

  //     .setTimestamp()
  //   message.channel.send({ embed })
  //     .then(console.log)
  //     .catch(console.error);

  // }
  // if (nombre == "6") {
  //   six()

  // }

  // function sept() {

  //   message.channel.send({
  //     embed: {
  //       color: 0xff80ff,
  //       author: {
  //         name: client.user.username,
  //         icon_url: client.user.avatarURL()
  //       },
  //       title: `**Information sur le Compagion Cube de Portal !**`,
  //       description: "Les joueurs ayant pré-commandé Portal 2 via Steam ont reçu le Badge Cube de Voyage, un badge présentant le Cube de Voyage Lesté dans un portail, dans Team Fortress 2. Les joueurs ayant joués à tous les jeux du Potato Sack obtinrent le Badge de l'Associé à la Résurrection, qui partage le même modèle.\n"
  //         + " De plus, un des noms possibles pour les bots IA dans le mode Entraînement Hors-ligne ou sur un serveur est Companion Cube.",
  //       timestamp: new Date(),
  //       footer: {
  //         icon_url: client.user.avatarURL(),
  //         text: `©ToniPortal`
  //       }
  //     }
  //   })
  //     .then(console.log)
  //     .catch(console.error);
  // }
  // if (nombre == "7") {
  //   sept()


  // }

  // function huit() {

  //   const Discord = require("discord.js");
  //   const embed = new Discord.MessageEmbed()
  //     .setTitle("**WCC Flag/fr**")
  //     .setAuthor("Compagnion Cube", client.user.avatarURL())
  //     /*
  //     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
  //     */
  //     .setColor(0xff80ff)
  //     .setDescription("Le drapeau WCC (WCC signifie Weighted Companion Cube en anglais, pour Cube de Voyage lesté) est un objet de type fanion attaché à l'antenne de Atlas et de P-body. Il porte un design similaire au Skin WCC.\n"
  //       + "Cet objet est offert après avoir réalisé avec succès le geste High Five en campagne coop.")
  //     .setImage("https://i1.theportalwiki.net/img/thumb/0/0d/Backpack_WCC_FLAG.png/90px-Backpack_WCC_FLAG.png")


  //     .setFooter(`©ToniPortal`, client.user.avatarURL())

  //     .setTimestamp()
  //   message.channel.send({ embed })
  //     .then(console.log)
  //     .catch(console.error);
  // }
  // if (nombre == "8") {
  //   huit()


  // }

  // function neuf() {
  //   const Discord = require("discord.js");
  //   const embed = new Discord.MessageEmbed()
  //     .setTitle("**Tape-m'en cinq**")
  //     .setAuthor("Compagnion Cube", client.user.avatarURL())
  //     /*
  //     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
  //     */
  //     .setColor(0xff80ff)
  //     .setDescription("Fêter la réussite de votre étalonnage cooperative")
  //     .setImage("https://i1.theportalwiki.net/img/4/4b/Achievement_High_Five.jpg")

  //     .setFooter(`©ToniPortal`, client.user.avatarURL())

  //     .setTimestamp()
  //   message.channel.send({ embed })
  //     .then(console.log)
  //     .catch(console.error);
  // }
  // if (nombre == "9") {
  //   neuf()

  // }


};

exports.help = {
  usage: `<chiffre(entre 1 et ${nombremax})`,
  description: `Vous affiche des anectode sur portal`
};
