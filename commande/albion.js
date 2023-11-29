exports.run = async (client, message, args, colors) => {
// API https://www.tools4albion.com/api_info.php#

  async function searchPlayer(playerName) {
    try {
      const url = `https://gameinfo.albiononline.com/api/gameinfo/search?q=${playerName}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erreur lors de la requête. Statut : ${response.status}`);
      }

      const data = await response.json();
      // Retournez les données ou effectuez d'autres actions nécessaires
      return data;
    } catch (error) {
      console.error(`Erreur lors de la recherche du joueur : ${error.message}`);
      // Gérez l'erreur de manière appropriée
    }
  }

  async function infoPlayer(id) {
    try {
      const url = `https://gameinfo.albiononline.com/api/gameinfo/players/${id}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erreur lors de la requête. Statut : ${response.status}`);
      }

      const data = await response.json();
      // Retournez les données ou effectuez d'autres actions nécessaires
      return data;
    } catch (error) {
      console.error(`Erreur lors des info du joueur : ${error.message}`);
    }
  }

  // Utilisation de la fonction avec un nom spécifique (par exemple, "ToniPortal")
  try {

    var idp = await searchPlayer(args[1]);
    const pl = await infoPlayer(idp.players[0].Id);

    if (pl.AllianceName == null || pl.AllianceName == '') {
      pl.AllianceName = "Pas d'alliance"
    }
    console.log(pl)


    message.channel.send({
      embeds: [{
        color: colors.defaut,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Joueurs** : **${pl.Name}**`,
        description: `Temps de la dernière Connexion: **${Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' }).format(new Date(pl.LifetimeStatistics.Timestamp))}**
                  Nom de la *guilde* du joueurs: **${pl.GuildName}**\n
                  Nom de l'alliance: **${pl.AllianceName}**\n
                  DeathFame(?): **${pl.DeathFame}**\n
                  KillFame: **${pl.KillFame}**\n`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }]
    })



  } catch (e) {
    console.warn(e)
    message.channel.send("Le joueurs n'a pas était trouvée.")
  }





  // if (args[0] == "g") {

  //   var url = `https://gameinfo.albiononline.com/api/gameinfo/guilds/${args[1]}`

  //   getJSON(url, function (error, idp) {
  //     console.log(idp)
  //     message.channel.send({
  //       embed: {
  //         color: colors.defaut,
  //         author: {
  //           name: client.user.username,
  //           icon_url: client.user.avatarURL()
  //         },
  //         title: `**Guilde** : ${idp.Name}`,
  //         description: `Fondateur de la *guilde*: **${idp.FounderName}**\n
  //               Crée en: **${idp.Founded}**`,
  //         timestamp: new Date(),
  //         footer: {
  //           icon_url: client.user.avatarURL(),
  //           text: `©ToniPortal`
  //         }
  //       }
  //     })

  //   })

  // }


}

exports.help = {
  usage: ` m = Joueurs ; Guilde = *albion g`,
  description: `Permet de voir certaine stats(ancienne) de certain joueurs du jeu albion`
};