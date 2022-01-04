exports.run = (client, message, args, colors) => {

    const Discord = require("discord.js");


    var n2words = require('n2words')


    if(!args[1]){

        args[1] = "fr"
        
        }
    const numbers = n2words(parseInt(args[0]), { lang: args[1] })


    const embed = new Discord.MessageEmbed()
        .setTitle(`Chiffre :**${args[0]}**`)
        .setAuthor("Compagnion Cube", client.user.avatarURL())
        .setColor(colors.defaut)
        .setDescription(`Voici comment ça donnerai avec des mot :\n **${numbers}**`)
        .setFooter(`©ToniPortal`, client.user.avatarURL())
        .setTimestamp()



    message.channel.send({ embed })
        .catch(console.error);


};

exports.help = {
    usage: `<chiffre> <langue>`,
    description: `Mettez des **chiffres** et il vous traduira ceci en lettre.\nLa langue définition normalement est *fr*`
};