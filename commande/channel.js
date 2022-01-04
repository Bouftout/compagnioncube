exports.run = (client, message, args,colors) => {


  const data = client.channels.cache.get(message.channel.id);

if(data.topic == null){

  data.topic = "Pas de topic dans ce channel."

}

  message.channel.send({
    embed: {
      color: colors.defaut,
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL()
      },
      title: `**Information sur le salon**`,
      description: "\n" + "```javascript" + "\n" + "Nom du channel: " + data.name + "\n" + "Type de channel: " + data.type + "\n" +
        "Channel id: " + data.id + "\n" + "Topic: " + data.topic + "\n" + "```",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
      }
    }
  })


};