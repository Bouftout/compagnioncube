// RGAPI-cd7dbd70-30df-404b-9c64-651475dc4201

exports.run = (client, message, args, colors) => {


    const TeemoJS = require('teemojs');
    let api = TeemoJS('RGAPI-cd7dbd70-30df-404b-9c64-651475dc4201');


    const Discord = require("discord.js");


    console.log(args[0])



    api.get('EUW1', 'summoner.getBySummonerName', args[0])
        .then(data => {


            const embed = new Discord.MessageEmbed()
                .setTitle("**Lol**")
                .setAuthor("Compagnion Cube", client.user.avatarURL())
                /*
                * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
                */
                .setColor(colors.ok)
                .setDescription(data.name + " summoner id est : **" + data.id + '**.')
                .setFooter(`©ToniPortal`, client.user.avatarURL())

                .setTimestamp()

            message.channel.send({ embed })



        })

};