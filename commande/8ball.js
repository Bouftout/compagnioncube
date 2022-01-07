exports.run = (client, message, args, colors) => {

  message.delete()

    var sayings = [
      "C'est certain",
      "Il en est décidé ainsi",
      "Sans aucun doute",
      "Oui, définitivement",
      "Vous pouvez vous y fier",
      "Comme je le vois, oui",
      "Très probablement",
      "Perspectives bonnes",
      "Oui",
      "Les signes indiquent que oui",
      "Répondez encore une fois",
      "Redemander plus tard",
      "Mieux vaut ne pas te le dire maintenant",
      "Impossible de prédire maintenant",
      "Concentre-toi et redemande",
      "N'y compte pas",
      "Ma réponse est non",
      "Mes sources disent non",
      "Les perspectives ne sont pas si bonnes",
      "Très douteux"
    ];

    var result = Math.floor((Math.random() * sayings.length) + 0);
const embed = {
  color: colors.ok,
  author: {
    name: client.user.username,
    icon_url: client.user.avatarURL()
  },
  title: `**Votre réponse :**`,
  description: `${sayings[result]}`,
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL(),
    text: `©ToniPortal`
  }
}

message.channel.send({ embeds: [embed] })

/*
console.log(message)

      let role = message.guild.roles.cache.find(r => r.name === "𝑬𝒏 𝒍𝒊𝒗𝒆")

      if (message.member.roles.cache.has(role)) {
        return message.channel.send("You already have the role.")
      };

      // Adding the role.
      message.member.roles.add(role);
*/




};
exports.help = {
  usage: ``,
  description: `Te donne une réponse aléatoire`
};


