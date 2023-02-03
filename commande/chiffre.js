exports.run = (client, message, args, colors) => {
    const n2words = require('n2words')

    if(typeof args[1] != "number") args[1] = Number(args[1]);
    if(!args[1] || args[1] == NaN) return message.reply("Veuillez mettre un nombre !").then(msg => { setTimeout(function(){ message.delete(); msg.delete() },colors.time) });
    if (!args[2]) args[2] = "fr";

    const numbers = n2words(args[1], { lang: args[2] });

    message.channel.send({
        embeds: [{
            color: colors.defaut,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: `Chiffre :**${args[1]}**`,
            description: `Voici comment ça donnerai avec des mot :\n **${numbers}**`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
            },
        }]
    });


};

exports.help = {
    usage: `<chiffre> <langue>`,
    description: `Mettez des **chiffres** et il vous traduira ceci en lettre.\nLa langue de base est *fr*`
};