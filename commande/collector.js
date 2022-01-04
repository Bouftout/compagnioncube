exports.run = (client, message, args, colors) => {



  const ayy = "💯"

  message.react(ayy)

  let tempsdelareaction = 5 * 1000;

  const embed = {
    color: colors.defaut,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    title: `**Ajout**`,
    description: `Ajouter l'emoji pour accèder au channel League of legend`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: `©ToniPortal`
    }
  }

  message.channel.send({ embeds: [embed] }).then(embedMessage => {

    if (!embedMessage) {


    } else {
      setTimeout(() => embedMessage.delete(), tempsdelareaction);
    }




    const filter = (reaction, user) => {
      return reaction.emoji.name === ayy && user.id === message.author.id;
    };

    const collector = message.createReactionCollector({ filter,max: 1, time: tempsdelareaction });

    collector.on('collect', (reaction, user) => {
      message.delete()

      console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);


      let role = message.guild.roles.cache.find(r => r.name === "League of legend")

      if (member.roles.cache.some(role => role.name === 'League of legend')) {
        return message.channel.send("You already have the role.")
      };

      // Adding the role.
      member.roles.add(role);


    });

    collector.on('end', collected => {
      if (!message) { } else {
        message.delete()
      }

      console.log(`Collected ${collected.size} items`);

      
        const embed2 =  {
          color: colors.info,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `**Info**`,
          description: `Votre cube a disparu dans le néant`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          }
        }

      message.channel.send({ embeds: [embed2] }).then((m) => setTimeout(() => m.delete(), 10000));

      embedMessage.delete()

    });

  });



};

exports.help = {
  usage: ``,
  description: `Permet d'ajouter un rôle en cliquand sur la réaction pour une seule personne`
};


