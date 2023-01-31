exports.run = async (client, message, args, colors) => {


    const response = await fetch("http://aws.random.cat//meow")
    let body = await response.json()
    console.log(body.file);

    // const { AttachmentBuilder } = require('discord.js');
    // const file = new AttachmentBuilder(body.file);
    // attachment://cake.png

    message.channel.send({
        embeds: [{
            color: colors.defaut,
            url : body.file,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: `**Votre gif/image de chat :**`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
            },
            image: {
                url: body.file,
            },
        }]
    });





};


exports.help = {
    usage: ``,
    description: `Pour vous affichier une image ou un gif de chat aléatoirement`
};