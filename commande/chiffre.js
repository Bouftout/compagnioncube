exports.run = (client, message, args, colors) => {
    if (!args[1] || args[1] == NaN) return message.reply("Veuillez mettre un texte a transformée en nombre !");

    if (typeof args[1] == "number") return message.reply("Veuillez écrire en lettre les chiffre");

    const wordToNumber = {
        "un": 1,
        "deux": 2,
        "trois": 3,
        "quatre": 4,
        "cinq": 5,
        "six": 6,
        "sept": 7,
        "huit": 8,
        "neuf": 9,
        "dix": 10,
    };

    const words = args.slice(1).map(word => word.replace("-"," ").toLowerCase());
    const numbers = words.map(word => wordToNumber[word] || word);

    return message.channel.send({
        embeds: [{
            color: colors.defaut,
            author: {
                name: message.author.username,
                icon_url: message.author.avatarURL()
            },
            title: `Tu a demander : **${args.slice(1).join(' ')}**`,
            description: `Voici comment ça donnerait si c'était des chiffre :\n **${numbers.join(' ')}**`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: colors.author
            },
        }]
    });
};

exports.help = {
    usage: `<chiffre> <langue>`,
    description: `Mettez des **chiffres** et il vous traduira ceci en lettre.\nLa langue de base est *fr*`
};
