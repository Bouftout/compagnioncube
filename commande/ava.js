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



    const { MessageEmbed } = require('discord.js');


    if (!message.mentions.users.size) {
        const embed = new MessageEmbed()
            .setTitle(message.author.username)
            .setColor(colors.ok)
            .setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096 }))
        return message.channel.send({ embeds: [embed] });
    }

    const mention = message.mentions.members.first();
    const Embed = new MessageEmbed()
        .setTitle(message.mentions.users.first().username)
        .setColor(colors.ok)
        .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
    return message.channel.send({ embeds: [Embed] });




};

exports.help = {
    usage: `<mention>(optionnel)`,
    description: `Pour montrer ton avatar`
};