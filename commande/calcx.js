exports.run = (client, message, args,colors) => {

  message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);;
  let [nombre1, multiplicateur, nombre2] = args;

  if (multiplicateur == "*") {
    message.channel.send({
      embed: {
        color: colors.defaut,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Votre opération :**`,
        description: `${nombre1} * ${nombre2}`,
        timestamp: new Date(),
        fields: [{
          name: `**Le résultat :**`,
          value: `${nombre1 * nombre2}`
        },
        ],
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }
    })

    if (`${(nombre1 * nombre2)}` == "NaN") {

      message.channel.send({
        embed: {
          color: colors.error,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `**ERROR**`,
          description: `Veuillez marquer un chiffre valide  !!`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          }
        }
      }).then(response => response.delete({timeout:"15000"}))
    }
  }


}

exports.help = {
  usage: `<nombre> * <nombre>`,
  description: `Pour faire des calcul(que des multiplication)`
};