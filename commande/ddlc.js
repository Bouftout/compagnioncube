exports.run = (client, message, args, colors) => {


    message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);;

    let nombre = message.content.split(" ").slice(1, 2)[0];

    let nombremax = 56

    function getrandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    if (nombre == "random") {
        const randomchiffre = getrandom(1, nombremax)

        const { MessageAttachment } = require('discord.js');
        // ...
        const file = new MessageAttachment(`./image/ddlc/ddlc${randomchiffre}.jpg`);

        const exampleEmbed = {
            title: `**Doki Doki Littérature Club **${randomchiffre}`,
            color: colors.defaut,
            timestamp: new Date(),
            image: {
                url: `attachment://ddlc${randomchiffre}.jpg`,
            },
        };

        message.channel.send({ embeds: [exampleEmbed], files: [file] }).catch(console.error);

    } else {

        if (nombre == null) {
            message.channel.send({
                embed: {
                    color: colors.error,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: "ERROR",
                    description: "Insère un nombre s'il te plaît !",
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                        text: `©ToniPortal#8330`
                    }
                }
            }).then(response => response.delete({ timeout: "10000" }))
            return;
        }
        if (nombre == "0") {
            message.channel.send({
                embed: {
                    color: colors.error,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: `**Commande**`,
                    description: "Il n'a pas trouvé d'image\nChiffre 0 !!",
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                        text: `©ToniPortal#8330`
                    }
                }
            }).then(response => response.delete({ timeout: "10000" }))
        }

        if (nombre > nombremax) {
            message.channel.send({
                embed: {
                    color: colors.error,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: `**Commande**`,
                    description: `Il n'a pas trouvé d'image\nIl faut mettre en dessoue du chiffre`,
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                        text: `©ToniPortal#8330`
                    }
                }
            })
        }
        if (nombre < "0") {
            message.channel.send({
                embed: {
                    color: colors.error,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: `**Commande**`,
                    description: "Il n'a pas trouvé d'image\nVous allez trop bas",
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                        text: `©ToniPortal#8330`
                    }
                }
            })
        }




        switch (nombre) {

            case nombre:
                message.channel.send({
                    embed: {
                        title: `**Doki Doki Littérature Club**`,
                        color: colors.defaut,
                        timestamp: new Date(),
                    },
                    files: [{
                        attachment: `./image/ddlc/ddlc${nombre}.jpg`,
                        name: `ddlc${nombre}.jpg`
                    }]
                }).catch(console.error);
                break;

            default:
                message.channel.send({
                    embed: {
                        color: colors.error,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: "ERROR",
                        description: "Veuillez mettre un nombre valide ou un personnage valide de ddlc",
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: `©ToniPortal#8330`
                        }
                    }
                }).then(response => response.delete({ timeout: "10000" }))
                break;
        }



    }


};