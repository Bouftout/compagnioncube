exports.run = (client, message, args, colors) => {

    //Il faut dev un pong sur clickteam pour cette commande

    return message.channel.send({
        embeds: [{
            url: "https://www.ponggame.org/",
            color: colors.ok,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: `The famous Pong !`,
            description: `Vous pouvez jouer a pong sur ce lien :\nhttps://www.ponggame.org/`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: colors.author
            }
        }]
    })


}