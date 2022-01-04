exports.run = (client, message, args) => {

  if (message.author.bot) return;


  var maintenant = new Date();
  var hour = maintenant.getHours();
  let response = "";
  if (hour < 08 || hour > 22) {
    response = "C'est pas l'heure de goûter !!";
  }
  if (hour > 08 || hour < 22) {
    response = "C'est pas l'heure de goûter !!";

  }
  if (hour == 16 || hour == 17) {
    response = "C'est l'heure du goûter ! :peach:";

  }
  if (hour == 15 || hour == 16) {
    response = "C'est bientôt l'heure du goûter ( ͡° ͜ʖ ͡°) ";
  }

  if (hour >= 16 && hour < 17) {
    response = "";
  } else if (hour >= 15 && hour < 16) {
    response = "";
  } else {
    response = "C'est pas l'heure du goûter. :cry:";
  }

  message.channel.send({
    embed: {
      color: 1082119,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `**Gouter ?**`,
      description: `${response}`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal#8330`
      }
    }
  })


};