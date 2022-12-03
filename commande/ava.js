exports.run = (client, message, args, colors) => {

    // https://discord.js.org/#/docs/main/stable/typedef/ImageURLOptions

    function getUserFromMention(mention) {
        if (!mention) return;

        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(2, -1);

            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }

            return client.users.cache.get(mention);
        }
    }

    var user = getUserFromMention(args[0]);
    console.log(user)

    if (!user) {
        user = message.author

    }



    if (!message.mentions.users.size) {
        const embed = {
            color: colors.ok,
            url: message.author.displayAvatarURL({ dynamic: true, size: 4096 }),
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: `**${message.author.username}**`,
            description: ``,
            timestamp: new Date(),
            image: {
                url: message.author.displayAvatarURL({ dynamic: true, size: 4096 }),
            },
            footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
            }
        }

        return message.channel.send({ embeds: [embed] })
    }

    const mention = message.mentions.members.first();
    console.log(mention)
    const embed = {
        color: colors.ok,
        url: message.author.displayAvatarURL({ dynamic: true, size: 4096 }),
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: `**${mention.user.username}**`,
        description: `Voici votre avatar`,
        timestamp: new Date(),
        image: {
            url: mention.user.displayAvatarURL({ dynamic: true, size: 4096 }),
        },
        footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
        }
    }
    return message.channel.send({ embeds: [embed] })



};

exports.help = {
    usage: `<mention>(optionnel)`,
    description: `Pour montrer ton avatar`
};