exports.run = (client, message, args, colors) => {
  if (message.author.bot) return;

  var hour = new Date().getHours();
  let response = "";

  if (hour < 8 || hour > 22) {
    response = "Faut allez dormir tout de suite !!!";
  }
  if (hour > 8 || hour < 22) {
    response = "C'est pas l'heure de dormir";
  }
  if (hour == 22 || hour == 21) {
    response = "Tu va dormir s'il te plaît ?";

  }
  if (hour == 21 || hour == 20) {
    response = "C'est bientôt l'heure d'allez dormir !! ( ͡° ͜ʖ ͡°)";
  }



  return message.channel.send({
    embeds: [{
      color: colors.ok,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `Ma réponse:`,
      description: `${response}`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: colors.author
      }
    }
    ]
  })

};