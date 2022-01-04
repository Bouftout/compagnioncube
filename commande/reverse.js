exports.run = (client, message, args) => {

  if (message.author.bot) return;

  // So the bot doesn't reply to iteself
  if (message.author.bot) return;

  // Check if the message starts with the `!` trigger
  if (message.content.indexOf("*" + 'reverse') === 0) {
    // Get the user's message excluding the `!`
    var text = message.content.substring(1);

    // Reverse the message
    var reversed = '';
    var i = text.length;

    while (i > 0) {
      reversed += text.substring(i - 1, i);
      i--;
    }

    // Reply to the user's message
    message.channel.send({
      embed: {
        color: 1082119,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**Vous avez demandé un reverse,le voila juste en ici :)**`,
        description: reversed,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©ToniPortal`
        }
      }
    })

  }

};