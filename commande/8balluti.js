exports.run = (client, message, args, colors) => {


  message.delete()

    var textArray = [
      'Très douteux...',
      'Mhhh nonn genre non,vraiment pas',
      'Mais si il est utile tkt,vraiment utile',
      'OUI IL EST ABSOLUMENT UTILE',
      "j'en ai aucune idée de si il est utile",
    ];
    var Meme = Math.floor(Math.random() * textArray.length);
const embed = {
        color: colors.ok,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**Utile ou pas ?**`,
        description: `${textArray[Meme]}`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©ToniPortal`
        }
      }
    

    message.channel.send({ embeds: [embed] })

};

exports.help = {
  usage: ``,
  description: `Te donne une réponse aléatoire pour la question,est ce que c'est utile ou pas`
};
