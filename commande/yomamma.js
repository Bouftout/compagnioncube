exports.run = (client, message, args, colors) => {

  const axios = require("axios");


  axios.get("http://api.yomomma.info/").then(response => {
    const embed = {
      color: colors.default,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `**Joke ?**`,
      description: `${response.data.joke}`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
      }
    }

    message.channel.send({ embeds: [embed] })

  });

};