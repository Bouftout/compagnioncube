exports.run = (client, message, args, colors) => {


    const Discord = require("discord.js");
    const axios = require("axios");

    message.channel.send("nike");

    axios .get(`https://neko-love.xyz/api/v1/neko`)
    .then(response => {
        message.channel.send(`${response.data.url}`);
    })

    if (args[0] == "help") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('**Neko help**')
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setURL('https://neko-love.xyz/')
            .setDescription('Voici les alternative pour la commande:')
            .addFields({ name: '*neko', value: 'neko', inline: true }, { name: '*neko', value: 'kitsune', inline: true }, { name: '*neko', value: 'hug', inline: true }, { name: '*neko', value: 'pat', inline: true }, { name: '*neko', value: 'waifu', inline: true }, { name: '*neko', value: 'cry', inline: true }, { name: '*neko', value: 'kiss', inline: true }, { name: '*neko', value: 'slap', inline: true }, { name: '*neko', value: 'smug', inline: true }, { name: '*neko', value: 'punch', inline: true }, )
            .setTimestamp()
            .setFooter(`©ToniPortal`, client.user.avatarURL())

        message.channel.send(exampleEmbed);

    }

    if (!args[0]) {

        args[0] = "neko"

    }


    if (args[0] == "nsfw") {


        if (message.channel.nsfw) {

            axios
                .get(`https://neko-love.xyz/api/v1/nekolewd`)
                .then(response => {

                    console.log(response.data.url)

                    const embed = new Discord.MessageEmbed()
                        .setColor(colors.defaut)
                        .setTitle(`${args[0]}`)
                        .setURL(response.config.url)
                        .setAuthor("Compagnion Cube", client.user.avatarURL())
                        .setDescription('Voici votre image ;')
                        .setImage(response.data.url)
                        .setTimestamp()
                        .setFooter(`©ToniPortal`, client.user.avatarURL())

                    message.channel.send(embed);

                })


        } else {

            message.reply("Channel nsfw uniquement")

        }




    }





    if (args[0] == "neko") {

        axios
            .get(`https://neko-love.xyz/api/v1/${args[0]}`)
            .then(response => {

                console.log(response.data.url)

                const embed = new Discord.MessageEmbed()
                    .setColor(colors.defaut)
                    .setTitle(`${args[0]}`)
                    .setURL(response.config.url)
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setDescription('Voici votre image ;')
                    .setImage(response.data.url)
                    .setTimestamp()
                    .setFooter(`©ToniPortal`, client.user.avatarURL())

                message.channel.send({ embeds: [embed] });

            })


    }

    if (args[0] == "kitsune") {


        axios
            .get(`https://neko-love.xyz/api/v1/${args[0]}`)
            .then(response => {

                console.log(response.data.url)

                const embed = new Discord.MessageEmbed()
                    .setColor(colors.defaut)
                    .setTitle(`${args[0]}`)
                    .setURL(response.config.url)
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setDescription('Voici votre image ;')
                    .setImage(response.data.url)
                    .setTimestamp()
                    .setFooter(`©ToniPortal`, client.user.avatarURL())

                message.channel.send({ embeds: [embed] });

            })


    }


    if (args[0] == "hug") {

        axios
            .get(`https://neko-love.xyz/api/v1/${args[0]}`)
            .then(response => {

                console.log(response.data.url)

                const embed = new Discord.MessageEmbed()
                    .setColor(colors.defaut)
                    .setTitle(`${args[0]}`)
                    .setURL(response.config.url)
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setDescription('Voici votre image ;')
                    .setImage(response.data.url)
                    .setTimestamp()
                    .setFooter(`©ToniPortal`, client.user.avatarURL())

                message.channel.send({ embeds: [embed] });

            })


    }
    if (args[0] == "pat") {


        axios
            .get(`https://neko-love.xyz/api/v1/${args[0]}`)
            .then(response => {

                console.log(response.data.url)

                const embed = new Discord.MessageEmbed()
                    .setColor(colors.defaut)
                    .setTitle(`${args[0]}`)
                    .setURL(response.config.url)
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setDescription('Voici votre image ;')
                    .setImage(response.data.url)
                    .setTimestamp()
                    .setFooter(`©ToniPortal`, client.user.avatarURL())

                message.channel.send({ embeds: [embed] });

            })


    }

    if (args[0] == "waifu") {


        axios
            .get(`https://neko-love.xyz/api/v1/${args[0]}`)
            .then(response => {

                console.log(response.data.url)

                const embed = new Discord.MessageEmbed()
                    .setColor(colors.defaut)
                    .setTitle(`${args[0]}`)
                    .setURL(response.config.url)
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setDescription('Voici votre image ;')
                    .setImage(response.data.url)
                    .setTimestamp()
                    .setFooter(`©ToniPortal`, client.user.avatarURL())

                message.channel.send({ embeds: [embed] });

            })


    }

    if (args[0] == "cry") {


        axios
            .get(`https://neko-love.xyz/api/v1/${args[0]}`)
            .then(response => {

                console.log(response.data.url)

                const embed = new Discord.MessageEmbed()
                    .setColor(colors.defaut)
                    .setTitle(`${args[0]}`)
                    .setURL(response.config.url)
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setDescription('Voici votre image ;')
                    .setImage(response.data.url)
                    .setTimestamp()
                    .setFooter(`©ToniPortal`, client.user.avatarURL())

                message.channel.send({ embeds: [embed] });

            })


    }


    if (args[0] == "kiss") {


        axios
            .get(`https://neko-love.xyz/api/v1/${args[0]}`)
            .then(response => {

                console.log(response.data.url)

                const embed = new Discord.MessageEmbed()
                    .setColor(colors.defaut)
                    .setTitle(`${args[0]}`)
                    .setURL(response.config.url)
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setDescription('Voici votre image ;')
                    .setImage(response.data.url)
                    .setTimestamp()
                    .setFooter(`©ToniPortal`, client.user.avatarURL())

                message.channel.send({ embeds: [embed] });

            })


    }

    if (args[0] == "slap") {


        axios
            .get(`https://neko-love.xyz/api/v1/${args[0]}`)
            .then(response => {

                console.log(response.data.url)

                const embed = new Discord.MessageEmbed()
                    .setColor(colors.defaut)
                    .setTitle(`${args[0]}`)
                    .setURL(response.config.url)
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setDescription('Voici votre image ;')
                    .setImage(response.data.url)
                    .setTimestamp()
                    .setFooter(`©ToniPortal`, client.user.avatarURL())

                message.channel.send({ embeds: [embed] });

            })


    }


    if (args[0] == "smug") {


        axios
            .get(`https://neko-love.xyz/api/v1/${args[0]}`)
            .then(response => {

                console.log(response.data.url)

                const embed = new Discord.MessageEmbed()
                    .setColor(colors.defaut)
                    .setTitle(`${args[0]}`)
                    .setURL(response.config.url)
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setDescription('Voici votre image ;')
                    .setImage(response.data.url)
                    .setTimestamp()
                    .setFooter(`©ToniPortal`, client.user.avatarURL())

                message.channel.send({ embeds: [embed] });

            })


    }

    if (args[0] == "punch") {


        axios
            .get(`https://neko-love.xyz/api/v1/${args[0]}`)
            .then(response => {

                console.log(response.data.url)

                const embed = new Discord.MessageEmbed()
                    .setColor(colors.defaut)
                    .setTitle(`${args[0]}`)
                    .setURL(response.config.url)
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setDescription('Voici votre image ;')
                    .setImage(response.data.url)
                    .setTimestamp()
                    .setFooter(`©ToniPortal`, client.user.avatarURL())

                message.channel.send({ embeds: [embed] });

            })

    }


}
exports.help = {
    usage: `<neko;nsfw;kitsune;hug;kiss;slap;smug;punch>`,
    description: `Te donne des image par rapport a l'api "neko-love.xyz"`
};