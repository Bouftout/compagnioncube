exports.run = (client, message, args) => {
  if (message.author.bot) return;

  var maintenant = new Date();
  var hour = maintenant.getHours();
  let response = "";

  if (hour < 08 || hour > 22) {
    response = "Faut allez dormir tout de suite !!!";
  }
  if (hour > 08 || hour < 22) {
    response = "C'est pas l'heure de dormir";

  }
  if (hour == 22 || hour == 21) {
    response = "Tu va dormir s'il te plaît ?";

  }
  if (hour == 21 || hour == 20) {
    response = "C'est bientôt l'heure d'allez dormir !! ( ͡° ͜ʖ ͡°)";
  }
  message.channel.send({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `Ma réponse:`,
      description: `${response}`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal#8330`
      }
    }
  })
};