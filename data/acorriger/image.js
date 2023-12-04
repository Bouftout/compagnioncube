exports.run = (client, message, args, colors) => {


    const Discord = require("discord.js");

    const { NekoBot } = require("nekobot-api");
    const api = new NekoBot();


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

    var user = getUserFromMention(args[1]);


    if (!user) {

        user = message.author

    }


    function mentionouuser() {

        if (!message.mentions.users.size) {

            return message.author.displayAvatarURL({ format: "jpg", dynamic: false })
        }
        return user.displayAvatarURL({ format: "jpg", dynamic: false })
    }


    switch (args[0]) {
        // stickbug c'est une vidéo

        case "threats":
        case "baguette":
        case "jpeg":
        case "lolice":
        case "iphonex":
        case "awooify":
        case "trash":
            (async () => {
                const image = await api.generate(args[0], { url: mentionouuser() });

                const embed = {
                    color: colors.defaut,
                    title: `${args[0]}`,
                    url: image,
                    author: {
                        name: "Compagnion Cube",
                        icon_url: client.user.avatarURL(),
                    },
                    description: 'Voici votre image ;',
                    image: {
                        url: image,
                    },
                    timestamp: new Date(),
                    footer: {
                        text: `©ToniPortal`,
                        icon_url: client.user.avatarURL(),
                    },
                };

                message.channel.send({ embeds: [embed] });

            })();
            break;


        default:
            (async () => {

                const image2 = await api.get(args[0]);
                const embed1 = new Discord.MessageEmbed()
                    .setColor(colors.defaut)
                    .setTitle(`${args[0]}`)
                    .setURL(image2)
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setDescription('Voici votre image ;')
                    .setImage(image2)
                    .setTimestamp()
                    .setFooter(`©ToniPortal`, client.user.avatarURL())

                message.channel.send(embed1);

            })();
            break;

    }




}