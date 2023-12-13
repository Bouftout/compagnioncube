exports.run = (client, message, args, colors) => {
    //n2word module utulisée de base
    if (!args[1] || args[1] == NaN) return message.reply("Veuillez mettre un texte a transformée en nombre !");

    if (typeof args[1] == "number") args[1] = String(args[1]);

    const number = (args.splice(1).join(" ")).replaceAll(/^(un|deux|trois|quatre|cinq|six|sept|huit|neuf|dix)$/i, "");



    return message.channel.send({
        embeds: [{
            color: colors.defaut,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: `Chiffre :**${args[1]}**`,
            description: `Voici comment ça donnerai avec des mot :\n **${number}**`,
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