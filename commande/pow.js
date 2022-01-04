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
      title: "_POW_",
      description:
        "------------------------------------------------------------------"
        + "\n..._...|..__________________ __, , "
        + "\n....../ `–-___________–– ;_____|] = = = = POW "
        + "\n...../_==o;;;;;;;;_______.:/ "
        + "\n.....), –-.(_(__) / "
        + "\n....// (..) ), ––"
        + "\n...//___// "
        + "\n..//___// "
        + "\n.//___//"
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
  name: "pow"
}

