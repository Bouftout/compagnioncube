exports.run = (client, message, args, colors) => {

    const expdiscord = require('discord-exp-mysql')

    let id = message.author.id;

    expdiscord.verify(id)
    console.log("Commande exp")

    expdiscord.getexp(id).then(function (result) {

        const embed = {
            color: 0x0099ff,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: `**Vous avez :**`,
            description: `${result} exp`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
            }
        }

        return message.channel.send({ embeds: [embed] })


    }).catch(function (err) {
        console.log(err, err.stack);
    });

}