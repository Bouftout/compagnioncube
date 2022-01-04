
exports.run = (client, message, args, colors) => {

  var getJSON = require('get-json')

  if (!args[1]) {

    if (args[0] == "m") {
      args[1] = "9p30UVy2T36aJYEQ3bsWFw" //ToniPortal
    }
    if (args[0] == "g") {
      args[1] = "GKdQVRAhQ8u4nbLG1e3y0w" //Guilde d'ay
    }

    //Section si c'est des membre de la guilde qui font *albion m

    if (message.author.id == "354975313723129856") { // Ay
      args[1] = "VMBKIbhQQ-a9EMRzWboncg"
    }
    if (message.author.id == "") { //Matt
      args[1] = "X-Pa1e1PQli1PtwKlQX_oQ"
    }
    if (message.author.id == "") { //SpoTachi
      args[1] = "4a01wah-T0GRZYLn9cxENw"
    }


  }

  if (!args[0]) {
const embed = {
        color: colors.defaut,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `Vous avez le choix entre:`,
        description: `Joueurs = *albion m\nou\nGuilde = *albion g`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }

      message.channel.send({ embeds: [embed] })

  }


  if (args[0] == "m") {


    if (args[1] == "SentinelleDor" || args[1] == "ay") {
      args[1] = "VMBKIbhQQ-a9EMRzWboncg"

    }
    if (args[1] == "Amaliooo" || args[1] == "ma") {
      args[1] = "X-Pa1e1PQli1PtwKlQX_oQ"

    }
    if (args[1] == "SpoTashi" || args[1] == "sp") {
      args[1] = "4a01wah-T0GRZYLn9cxENw"

    }
    if (args[1] == "ToniPortal" || args[1] == "tp") {
      args[1] = "9p30UVy2T36aJYEQ3bsWFw"

    }

    var url = `https://gameinfo.albiononline.com/api/gameinfo/players/${args[1]}`

    console.log(url)
    getJSON(url, function (error, response) {
      console.log(response)

      if (response.AllianceName == null || response.AllianceName == '') {
        response.AllianceName = "Pas d'alliance"
      }

      message.channel.send({
        embed: {
          color: colors.defaut,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `**Joueurs** : **${response.Name}**`,
          description: `Nom de la *guilde* du joueurs: **${response.GuildName}**\n
                Nom de l'alliance: **${response.AllianceName}**\n
                DeathFame(?): **${response.DeathFame}**\n
                Nombre de kill: **${response.KillFame}**\n
                Renommé Total: **${response.LifetimeStatistics.PvE.Total}**\n
                Renommé Crafting: **${response.LifetimeStatistics.Crafting.Total}**`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          }
        }
      })

    })






  }


  if (args[0] == "g") {

    var url = `https://gameinfo.albiononline.com/api/gameinfo/guilds/${args[1]}`

    getJSON(url, function (error, response) {
      console.log(response)
      message.channel.send({
        embed: {
          color: colors.defaut,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `**Guilde** : ${response.Name}`,
          description: `Fondateur de la *guilde*: **${response.FounderName}**\n
                Crée en: **${response.Founded}**`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          }
        }
      })

    })

  }


}

exports.help = {
  usage: ` m = Joueurs ; Guilde = *albion g`,
  description: `Permet de voir certaine stats(ancienne) de certain joueurs du jeu albion`
};