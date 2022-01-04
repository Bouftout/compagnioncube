exports.run = (client, message, args, colors) => {

  const embed = {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: `**Pong!**`,
    description: `Latence » ${Date.now() - message.createdTimestamp} ms \n` +
      `Latence » API » ${client.ws.ping}ms`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: `©ToniPortal`
    }
  }
  
  message.channel.send({ embeds: [embed] });


};