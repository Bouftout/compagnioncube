exports.run = (client, message, args, colors) => {


  message.delete()

  var maintenant = new Date();
  var jour = maintenant.getDate();
  var mois = maintenant.getMonth() + 1;
  var an = maintenant.getFullYear()

  let response = "";

  if (jour == "31" & mois == "12") {
    response = "Bientôt la nouvelle année !!";
  } else if (jour == "1" & mois == "1") {
    response = `On est maintenant en ${an}\nBonne année a tous !`;
  } else if (jour > "1" || jour <= "31") {
    response = `Ce n'est toujours pas une nouvelle année`;
  } else if (jour == "1") {
    response = `Ce n'est toujours pas une nouvelle année\nMais c'est le premier jour du mois !`;
  }

  message.channel.send({
    embed: {
      color: colors.defaut,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `**Bonne année ?**`,
      description: `${response}`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
      }
    }
  })


};

exports.help = {
  usage: ``,
  description: `Pour demander a votre cube si c'est une nouvelle année ou pas`
};