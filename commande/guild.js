exports.run = (client, message, args) => {


  message.channel.send({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**Guild ?**`,
      description: `Vous êtes dans la guilde : "**${message.guild.name}**" .\nCrée le: ${message.guild.createdAt}`,
      timestamp: new Date(),
      footer: {
        icon_url: message.guild.iconURL,
        text: `©ToniPortal#8330`
      }
    }
  });


}