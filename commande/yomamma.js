exports.run = async (client, message, args, colors) => {

  let f = await fetch("http://api.yomomma.info/")
  let response = await f.json();


  message.channel.send({
    embeds: [{
      color: colors.default,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `**Yomamma Joke !!**`,
      description: `${response.joke}`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: colors.author
      }
    }]
  })


};