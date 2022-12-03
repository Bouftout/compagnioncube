exports.run = (client, message, args, colors) => {

    var request = require('request');
    const Discord = require("discord.js");


    var tokenBlaguesAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjU1MDYxOTY3OTc3NDQ3NDMzIiwibGltaXQiOjEwMCwia2V5IjoiNTJwUnVRSTNTbHR0aUk4ajlId25tOUR4c3lDOGxUUzA5Umd3ZXdyOVFZdk5oYXNCeEsiLCJjcmVhdGVkX2F0IjoiMjAyMS0wMy0xN1QyMDoxMjoyMiswMDowMCIsImlhdCI6MTYxNjAxMTk0Mn0.R-RfJLzNiIFY0FeOQcY3aQR6_Ws9OFl-u9cS19WqvRw'

    let url = 'https://www.blagues-api.fr/api/' + (args[0] ? ("type/" + args[0] + '/random') : 'random');
    request(url, {
            headers: {
                'Authorization': `Bearer ` + tokenBlaguesAPI
            }
        },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                const jokeBody = JSON.parse(body);
                let typeBlague = "";
                switch (jokeBody.type) {
                    case "global":
                        typeBlague = "tout publique";
                        break;
                    case "dev":
                        typeBlague = "de développeur";
                        break;
                    case "dark":
                        typeBlague = "humour noir";
                        break;
                    case "limit":
                        typeBlague = "limite limite";
                        break;
                    case "beauf":
                        typeBlague = "de beauf";
                        break;
                    case "blondes":
                        typeBlague = "sur les blondes";
                        break;
                }
                // const embed = new Discord.MessageEmbed()
                //     .setTitle(jokeBody.joke)
                //     .setColor(colors.ok)
                //     .setDescription("||" + jokeBody.answer + "||")
                //     .setFooter('Blague ' + typeBlague, message.guild.iconURL())
                //     .setTimestamp();
                // message.channel.send({ embeds: [embed] });

                const embed = {
                    color: colors.ok,
                    url: `https://api.coinbase.com`,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL()
                    },
                    title: `**${jokeBody.joke}**`,
                    description: `||${jokeBody.answer}||`,
                    timestamp: new Date(),
                    image: {
                        url: `https://cdn6.aptoide.com/imgs/6/7/d/67da2c96adfc7dca9614752529d80630_icon.png?w=240`,
                    },
                    footer: {
                        icon_url: message.guild.iconURL(),
                        text: `Bluage ${typeBlague}`
                    }
                }
    
                message.channel.send({ embeds: [embed] })
            }else {
                console.log(error);

                const embed = {
                    color: colors.error,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL()
                    },
                    title: `**Error**`,
                    description: `Une erreur est survenue`,
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: `©ToniPortal`
                    }
                }
    
                message.channel.send({ embeds: [embed] })
            }
        });


}

exports.help = {
    usage: `<global;dev;dark;limit;beauf;blondes>`,
    description: `Pour afficher une blague d'une certainne catégorie ou pas`
};