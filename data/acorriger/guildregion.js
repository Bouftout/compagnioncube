exports.run = (client, message, args) => {


  if (message.author.id == message.guild.owner.id) {


    const arg = message.content.split(/\s+/g).slice(1);
    if (arg == "london") {
      message.guild.setRegion('london')
        .then(g => message.reply(`La région a était changer pour:** ${g.region}**`))
        .catch(console.error);
    }
    if (arg == "brazil") {
      message.guild.setRegion('brazil')
        .then(g => message.reply(`La région a était changer pour:** ${g.region}**`))
        .catch(console.error);
    }
    if (arg == "1") {
      message.guild.setRegion('london')
        .then(g => message.reply(`La région a était changer pour:** ${g.region}**`))
        .catch(console.error);
    }
    if (arg == "2") {
      message.guild.setRegion('brazil')
        .then(g => message.reply(`La région a était changer pour:** ${g.region}**`))
        .catch(console.error);
    }
    if (arg == "eu-central") {
      message.guild.setRegion('eu-central')
        .then(g => message.reply(`La région a était changer pour:** ${g.region}**`))
        .catch(console.error);
    }
    if (arg == "3") {
      message.guild.setRegion('eu-central')
        .then(g => message.reply(`La région a était changer pour:** ${g.region}**`))
        .catch(console.error);
    }

    if (arg == "help") {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `**Help Utulisation**`,
          description: "*_guildregion london/1/brazil/2/central europe/3_",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          }
        }
      })
    }
    if (arg == "") {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `**Help Utulisation**`,
          description: "*_guildregion london/1/brazil/2/central europe/3_",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          }
        }
      })
    }
  } else {
    message.reply('```diff\n-Tu na pas le pouvoir du dawaee \n+GUILD OWNER```').catch(console.error);
  }
}