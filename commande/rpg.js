exports.run = (client, message, args, colors) => {

  const yaml = require('js-yaml');
  const fs = require('fs');
  const Discord = require("discord.js");


  if (!args[0]) {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.ok)
      .setTitle(`Rpg !`)
      .setURL(`https://gamejolt.com/games/clickteamgamerpg/451875`)
      .setAuthor("Compagnion Cube", client.user.avatarURL())
      .setDescription(`Vous avez mon rpg sur le site juste au dessue ou sinon ;\nVeuillez choisir une classe dans celle qui sont disponible :\nMage\nBarbare\n`)
      .setTimestamp()
      .setFooter(`©ToniPortal`, client.user.avatarURL())

    message.channel.send(exampleEmbed)

  } else {

    fs.exists(`./data/game/rpg/${message.author.id}.yml`, function (exists) {

      if (exists) {



      } else {


        var stream = fs.createWriteStream(`./data/game/rpg/${message.author.id}.yml`);
        stream.once('open', function (fd) {
          stream.write(`name: ${message.author.username}\n`);
          stream.write(`money: 20,\n`);
          stream.write(`classe: ${args[0]},\n`);
          stream.end();
        });


      }

    })

  }

}