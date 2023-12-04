exports.run = async (client, message, args, colors) => {
  try {
    await message.author.send({
      embeds: [{
        color: colors.defaut,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**OUOU tu es là, ${message.author.username} ???**`,
        description: "Je suis là !!",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal#8330`
        }
      }]
    });
  } catch (e) {
    message.channel.send("Je n'ai pas réussi à vous envoyer de message privé :sib:");
  }
};
