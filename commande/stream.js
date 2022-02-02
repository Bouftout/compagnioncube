exports.run = async (client, message, args, colors) => {

  async function getStream() {
    const TwitchApi = require("node-twitch").default;

    const twitch = new TwitchApi({
      client_id: "yftuibvijvniuhaba96bjoo5bagrxu",
      client_secret: "odmdwail7dcfxoob4c3nw0rk2vnabf"
    });

    const streams = await twitch.getStreams({ channel: args[0] });

    console.log(streams.data[0]);


    if (streams.data[0] == undefined) {

      const embed = {
        color: colors.error,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Erreur**`,
        description: "```ini\nVotre streameur choisie est\n[Hors Ligne]\n```",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }

      message.channel.send({ embeds: [embed] })

    } else {


   
        const embedstream = {
          color: colors.ok,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `*${await streams.data[0].user_name}*`,
          description: `*Titre: *${await streams.data[0].title}*\nViewver: *${await streams.data[0].viewer_count}*`,
          timestamp: streams.data[0].started_at,
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          }
        }

        message.channel.send({ embeds: [embedstream] })


     
 
    }
    
  }

  if (!args[0]) {

    const embed = {
      color: colors.error,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `**Erreur**`,
      description: `Veuillez mettre un argument de la chaîne dont vous voulez voir les stats.`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
      }
    }

    return message.channel.send({ embeds: [embed] })

  }

  getStream();

}