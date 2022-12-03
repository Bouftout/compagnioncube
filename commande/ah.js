exports.run = (client, message, args, colors) => {

    const Discord = require("discord.js");
    message.delete()

    const embed = {
        color: colors.ok,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: `AH`,
        description: ``,
        timestamp: new Date(),
        image: {
            url: 'https://media.giphy.com/media/3o7btW7VDxqrhJEnqE/giphy.gif',
        },
        footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
        }
    }

    message.channel.send({ embeds: [embed] })




}

exports.help = {
    usage: ``,
    description: `Gif du fameux même **Ah**`
};