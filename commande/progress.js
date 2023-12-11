exports.run = async (client, message, args, colors) => {

    if (!args[1]) {
        return message.reply("Please set a number !")
    }

    await brmusic(Number(args[1]) - 1);

    async function brmusic(maximo) {
        let max = maximo + 1;
        let intervalval = 1;

        var msg = await message.channel.send({
            embeds: [{
                color: colors.ok,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                title: `**Pala**`,
                description: `Une barre va être mise en place`,
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`
                }
            }]
        });

        var idVar = setInterval(async () => {
            console.log(intervalval);

            const x = "□";
            const barStr = `[${'='.repeat(intervalval)}${'□'.repeat(max - intervalval)}]`;
            console.log(barStr);

            const barre = {
                color: colors.defaut,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                title: `Voici votre barre :`,
                description: `${barStr}`,
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`
                }
            };

            await msg.edit({ embeds: [barre] });

            intervalval++;
            if (intervalval == max + 1 || intervalval > max) {
                myStopFunction();


                await msg.edit({
                    embeds: [{
                        color: colors.ok,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL()
                        },
                        title: `Fini`,
                        description: `${barStr}`,
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: `©ToniPortal`
                        }
                    }]
                });
            }
        }, 1000);

        function myStopFunction() {
            clearInterval(idVar);
        }
    };
};
