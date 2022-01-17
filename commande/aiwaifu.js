exports.run = (client, message, args, colors) => {

    if (message.author.bot) return;

    message.delete()

    const twdne = require('twdne.js');

    // Pour des photo de profil(image du site ai-waifu mais la v3 qui fait que l'image est en 1024x1024 est que donc utilisable en pp ; https://www.thiswaifudoesnotexist.net/v2/example-10.jpg)


    // Randomly selects one
    twdne.randomWaifu().then(({ desc, img }) => {
        console.log(`Waifu Image URL: ${img}`);

        const Discord = require("discord.js");
        const embed = new Discord.MessageEmbed()
            .setTitle('**"This Waifu Does Not Exist"**')
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.ok)
            .setImage(img)
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setURL("https://nearcyan.com/this-anime-does-not-exist/")
            .setTimestamp()


        message.channel.send({ embeds: [embed] })

    });




}