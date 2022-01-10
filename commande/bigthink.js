exports.run = (client, message, _args, colors) => {


    message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);;

    const embed = {
        color: colors.defaut,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "_Bigthink_",
        description: "```" +
            "\n-------------------------------------------------------------" +
            "\n          ⠰⡿⠿⠛⠛⠻⠿⣷" +
            "\n        ⠀⠀⠀⠀⠀⠀⣀⣄⡀⠀⠀⠀⠀ ⢀⣀⣀⣤⣄⣀⡀" +
            "\n        ⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀ ⠀⣿⣿⣿⠇" +
            "\n        ⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀ ⠀⣿⣿⣿⠇" +
            "\n        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠈⠉⠁" +
            "\n        ⠀⠀⠀⠀⣿⣷⣄⠀⢶⣶⣷⣶⣶⣤⣀" +
            "\n        ⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠈⠙⠻⠗" +
            "\n        ⠀⠀⠀⣰⣿⣿⣿⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⡄" +
            "\n        ⠀⣠⣾⣿⣿⣿⣥⣶⣶⣿⣿⣿⣿⣿⠿⠿⠛⠃" +
            "\n        ⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄" +
            "\n        ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁" +
            "\n        ⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁" +
            "\n⠀       ⠀⠛⢿⣿⣿⣿⣿⣿⣿⡿⠟" +
            "\n-------------------------------------------------------------" +
            "\n```",
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
        }
    }

    message.channel.send({ embeds: [embed] })


}


exports.help = {
    usage: ``,
    description: `Thinking...`
};