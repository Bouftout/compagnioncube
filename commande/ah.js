exports.run = (client, message, args, colors) => {

    const Discord = require("discord.js");
    message.delete()



    const embed = new Discord.MessageEmbed()
        .setTitle("**Giphy** AH")
        .setAuthor(message.author.username, message.author.avatarURL)

    .setColor(colors.defaut)
        .setFooter("©ToniPortal")

    .setTimestamp()

    message.channel.send({ embeds: [embed] });




}

exports.help = {
    usage: ``,
    description: `Gif du fameux même **Ah**`
};