exports.run = (client, message, args, colors) => {


    message.delete()


    if (args[1] == "tbs") {
        args[1] = "Totally Accurate Battle Simulator";
    }

    var descr;

    for (var i = 3; i < args.length; i++) {
        descr += args[i] + " ";
    }

    const embed = {
        color: colors.ok,
        author: {
            name: message.author.username,
            icon_url: message.author.avatarURL()
        },
        title: args[1],
        description: descr.replace("undefined", ""),
        timestamp: new Date(),
        image: {
            url: args[2],
        },
        footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
        }
    }

    message.channel.send({ embeds: [embed] })


}