exports.run = (client, message, args, colors) => {
    const Discord = require("discord.js");
    const NekoSama = require('@ibaraki-douji/neko-sama')

    console.log(args[1])

    if (!args[1] || args[1] == undefined) {

        message.delete();

        const embed = {
            color: colors.error,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: `**Erreur**`,
            description: `Veuillez mettre **vf** ou **vostfr**`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
            }
        }

        message.channel.send({ embeds: [embed] })
    } else {



        if (!args[2] || args[2] == "undefined") {

            if (args[1] == "vf") {

                args[2] = 'Kimi no Na wa.'

            } else {

                args[2] = 'Re:zero'

            }

            NekoSama.search(args[2], (args[1]).toUpperCase()).then(anime =>{
                console.log(anime[0]);
                if(anime[0].names.french == undefined){

                    anime[0].names.french = anime[0].names.english;

                }
                const embed = {
                    color: colors.ok,
                    url: anime[0].url,
                    author: {
                        name: anime[0].names.romanji,
                        icon_url: anime[0].cover
                    },
                    title: `**${anime[0].names.french}**`,
                    description: `Status : **${anime[0].status}**\nDate de sortie : **${anime[0].releaseYear}**\nEpisodes : **${anime[0].episodesCount}**\nScore : **${anime[0].score}**`,
                    timestamp: new Date(),
                    image: {
                        url: anime[0].cover,
                    },
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: `©ToniPortal`
                    }
                }
            
                message.channel.send({ embeds: [embed] })
            })


        }







    };



};

exports.help = {
    usage: `<vf;vostfr>`,
    description: `Pour searcher des anime vf ou vostfr`
};

