exports.run = (client, message, args, colors) => {

    var request = require('request');

    var cat = "http://aws.random.cat//meow"
    const Discord = require("discord.js");


    request({
        url: cat,
        json: true
    }, function (error, response, body) {
        console.log(body.file);

        const embed = new Discord.MessageEmbed()
            .setTitle("**Cat Random**")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Voici une image ou un gif de chat !!")
            .setFooter("©ToniPortal")
            .setImage(body.file)
            .setTimestamp()

        message.channel.send({ embed });
    })



};


exports.help = {
    usage: ``,
    description: `Pour vous affichier une image ou un gif de chat aléatoirement`
  };