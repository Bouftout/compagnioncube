exports.run = async (client, message, args) => {

  if (message.author.bot) return;


  message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);;

  message.channel.sendMessage({
    embed: {
      color: 0xffff00,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Peace **and** love",
      description:
        "------------------------------------------------------------------"
        + "\n(`'·.¸(`'·.¸*¤*¸.·'´)¸.·'´) "
        + "\n «´¨`·..¤:Peace¤..·´¨`» "
        + "\n  (¸.·'´(¸.·'´*¤*`'·.¸)`'·.¸) "

        + "\n\n **and** \n"

        + "\n   (`'·.¸(`'·.¸*¤*¸.·'´)¸.·'´) "
        + "\n   «´¨`·..¤:LoVe:¤..·´¨`» "
        + "\n   (¸.·'´(¸.·'´*¤*`'·.¸)`'·.¸)"
        + "\n------------------------------------------------------------------",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal#8330`
      }
    }
  })
}

module.exports.help = {
  name: "trol peace"
}





