exports.run = (client, message, args) => {

  message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);;
  const embed = {
    color: colors.defaut,
    author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
    },
    title: `'_**LE GRAND TONI A DIT CHUT !**_'`,
    description: "```"
      + "\n    TTTTTTTTTTTTTTTTTTTTTTT                                   iiii  "
      + "\n    T:::::::::::::::::::::T                                  i::::i "
      + "\n    T:::::::::::::::::::::T                                   iiii  "
      + "\n    T:::::TT:::::::TT:::::T"
      + "\n    TTTTTT  T:::::T  TTTTTTooooooooooo   nnnn  nnnnnnnn     iiiiiii "
      + "\n            T:::::T      oo:::::::::::oo n:::nn::::::::nn   i:::::i "
      + "\n            T:::::T     o:::::::::::::::on::::::::::::::nn   i::::i "
      + "\n            T:::::T     o:::::ooooo:::::onn:::::::::::::::n  i::::i "
      + "\n            T:::::T     o::::o     o::::o  n:::::nnnn:::::n  i::::i "
      + "\n            T:::::T     o::::o     o::::o  n::::n    n::::n  i::::i "
      + "\n            T:::::T     o::::o     o::::o  n::::n    n::::n  i::::i "
      + "\n            T:::::T     o::::o     o::::o  n::::n    n::::n  i::::i "
      + "\n          TT:::::::TT   o:::::ooooo:::::o  n::::n    n::::n i::::::i"
      + "\n          T:::::::::T   o:::::::::::::::o  n::::n    n::::n i::::::i"
      + "\n          T:::::::::T    oo:::::::::::oo   n::::n    n::::n i::::::i"
      + "\n          TTTTTTTTTTT      ooooooooooo     nnnnnn    nnnnnn iiiiiiii"
      + "\n```",
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
    }
}

message.channel.send({ embeds: [embed] })

};