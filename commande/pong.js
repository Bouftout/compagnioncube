exports.run = (client, message, args, colors) => {

//Il faut dev un pong sur clickteam pour cette commande

    const Discord = require("discord.js");

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor(colors.ok)
        .setTitle(`Pong Site`)
        .setURL(`https://www.ponggame.org/`)
        .setAuthor("Compagnion Cube", client.user.avatarURL())
        .setDescription(`Vous avez le choix de jouer sur le site ou de prendre ma version crée du pong`)
        .setTimestamp()
        .setFooter(`©ToniPortal`, client.user.avatarURL())
        // .attachFiles(['./data/game/pong/pong.exe'])

    message.channel.send(exampleEmbed);


}