exports.run = (client, message, args, colors) => {

    const axios = require("axios");

    if (!args[1]) {

        args[1] = "neko"

    }


    if (args[1] == "nsfw") {


        if (message.channel.nsfw) {

            axios
                .get(`https://neko-love.xyz/api/v1/nekolewd`)
                .then(response => {

                    const embed = {
                        color: colors.ok,
                        url: response.data.url,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL()
                        },
                        title: `**Neko ${args[1]}**`,
                        description: ``,
                        timestamp: new Date(),
                        image: {
                            url: response.data.url,
                        },
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: `©ToniPortal`
                        }
                    }
    
                    message.channel.send({ embeds: [embed] })

                })


        } else {

            message.reply("Channel nsfw uniquement")

        }




    }



    function axio() {

        axios
            .get(`https://neko-love.xyz/api/v1/${args[1]}`)
            .then(response => {

                const embed = {
                    color: colors.ok,
                    url: response.data.url,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL()
                    },
                    title: `**${args[1]}**`,
                    description: ``,
                    timestamp: new Date(),
                    image: {
                        url: response.data.url,
                    },
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: `©ToniPortal`
                    }
                }

                message.channel.send({ embeds: [embed] })


            })

    }



    if (args[1] == "kitsune" || args[1] == "neko"|| args[1] == "hug" || args[1] == "pat" || args[1] == "waifu" || args[1] == "cry" || args[1] == "kiss" || args[1] == "slap" || args[1] == "smug" || args[1] == "punch") {

        axio()

    }


}
exports.help = {
    usage: `<neko;nsfw;kitsune;hug;kiss;slap;smug;punch>`,
    description: `Te donne des image par rapport a l'api "neko-love.xyz"`
};