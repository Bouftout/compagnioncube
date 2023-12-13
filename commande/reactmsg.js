exports.run = (client, message, args) => {
    if (!args[1]) {
        return message.reply("Veuillez mettre un argument !");
    }

    switch (args[1]) {
        case "c":
        case "caca":
            message.react("💩");
            break;
        case "melon":
            message.react("🍉");
            break;
        default:
            // Check if the argument is a custom Discord emoji
            if (args[1].startsWith("<:") && args[1].endsWith(">")) {
                message.react(args[1]);
            } else {
                message.channel.send()
                message.reply("Veuillez spécifier un emoji valide");
            }
            break;
    }
};

exports.help = {
    usage: `<vide;caca;melon>`,
    description: `Ajoute une réaction caca à votre message`
};
