exports.run = (client, message, args) => {




  if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
    return message.reply("Tu n'as pas la permission de supprimé ce channel !!");


  message.channel.delete().then(chan =>
    channel.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**Supprésion de channel sécurisé**`,
        description: (chan.name),
        fields: [{
          name: "**Demandé par:**",
          value: `${message.author.username}`
        },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©ToniPortal`
        }
      }
    }).then(response => response.delete({timeout:"4000"}))
  );
};