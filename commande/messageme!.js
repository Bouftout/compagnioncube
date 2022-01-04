exports.run = (client, message, args , colors) => {


  message.author.send({
    embed: {
      color: colors.defaut,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**OUOU tu est la ` + `${message.author.username} ` + `???**`,
      description: "Je suis là !!",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal#8330`
      }

    }
  });


};

