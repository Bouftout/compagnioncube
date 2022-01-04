exports.run = (client, message, args) => {

  if (message.author.bot) return;

  const date = new Date();
  const hour = date.getHours();
  let response = "";

  if (hour > 23 && hour < 01) {
    response = "Ah nous somme entre 23 et 1H du matin !!!";
  }
  else {
    response = "Il est pas minuit ?";
  }

  message.channel.sendMessage({
    embed: {
      color: 1082119,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**Minuit ?**`,
      description: `${response}`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal#8330`
      }
    }
  })


};