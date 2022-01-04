exports.run = (client, message, args) => {

  if (message.author.bot) return;

  const date = new Date();
  const hour = date.getHours();
  let response = "";
  if (hour >= 19 && hour < 21) {
    response = "C'est l'heure de manger";
  } else if (hour >= 12 && hour < 14) {
    response = "Tu va manger s'il te plaît ?";
  } else if (hour >= 11 && hour < 12) {
    response = "C'est bientôt l'heure d'allez manger !! ( ͡° ͜ʖ ͡°)";
  } else if (hour >= 18 && hour < 19) {
    response = "C'est bientôt l'heure d'allez manger !! ( ͡° ͜ʖ ͡°)";
  }
  else {
    response = "C'est pas l'heure de manger !";
  }
  message.channel.sendMessage({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**Response :**`,
      description: response,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal#8330`
      }
    }
  })
};