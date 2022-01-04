exports.run = (client, message, args) => {

  if (message.author.bot) return;

  message.channel.send({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**${message.guild.name} Information !**`,
      description: `Le bot est pret pour servir ${client.guilds.size} serveur\nJe suis au courant de ${client.channels.size} canaux dans l'ensemble. `,
      fields: [{
        name: "**Membre**",
        value: `${message.guild.members.filter(member => member.user.bot).size} bots sur ${message.guild.memberCount} membre.`
      },
      ],
      fields: [{
        name: "**Channels**",
        value: `${message.guild.channels.filter(chan => chan.type === 'voice').size} voice / ${message.guild.channels.filter(chan => chan.type === 'text').size} text`
      },
      ],
      fields: [{
        name: "**Roles**",
        value: `Nous avons comme rôle :\n${message.guild.roles.map(role => role.name).join(', ')} .`,
      },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: message.guild.iconURL,
        text: `©ToniPortal#8330`
      }
    }
  });
};