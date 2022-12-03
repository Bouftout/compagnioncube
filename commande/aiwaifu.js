exports.run = (client, message, args, colors) => {


    message.delete()
            const embed = {
                color: colors.ok,
                url: `https://www.thiswaifudoesnotexist.net/example-${Math.floor(Math.random() * 100001)}.jpg`,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                title: `**"This Waifu Does Not Exist"**`,
                description: ``,
                timestamp: new Date(),
                image: {
                    url: `https://www.thiswaifudoesnotexist.net/example-${Math.floor(Math.random() * 100001)}.jpg`,
                },
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`
                }
            }
        
            message.channel.send({ embeds: [embed] })
        





}