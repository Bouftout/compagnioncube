exports.run = (client, message, args, colors) => {

  const yaml = require('js-yaml');
  const fs = require('fs');
  const { randomHex } = require("randomize-hex");
  const Discord = require("discord.js");
  const canvacord = require("canvacord");
  const rs = require('../node_modules/rocket-store');


  var colorsorgradient = "GRADIENT" // couleur fix ou gradient pour la barre de grade

  message.delete() // delete


  canvacord.Canvas.registerFonts() // enregistrer les font du packet


  message.channel.send({
    embed: {
      color: colors.defaut,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `**Veuillez patientez**`,
      description: "Votre cube est en train de chercher votre image attitrée",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal#8330`
      }
    }

  }).then(response => {






    fs.exists(`./data/exp/exp/${message.author.id}`, function (exists) {

      if (exists) {

        result = await rs.get("exp", "*");


        function colorlvl() {
          if (exp.lvl < 5) {
            var str = "#ffffff"
            return str
          }
          if (exp.lvl >= 5) {
            var str = "#fffff0"
            return str
          }
        }

        function rankname() {
          if (exp.lvl <= 1) {

            return 'Chell'
          }
          else if (exp.lvl <= 2) {

            return '1ière Salle'
          }
          else if (exp.lvl <= 3) {

            return 'Atlas'
          }
          else if (exp.lvl <= 4) {

            return 'Pbody'
          }
          else if (exp.lvl <= 5) {

            return 'Portal Gun'
          }
          else if (exp.lvl <= 6) {

            return 'Portail Bleu'
          }

          else if (exp.lvl <= 7) {

            return 'Portail Orange'
          }

          else if (exp.lvl <= 9) {

            return 'Aperture science'
          }

          else if (exp.lvl <= 10) {

            return '//Error//'
          }

          else if (exp.lvl <= 12) {

            return 'Compagnion Cube'
          }

          else if (exp.lvl <= 13) {

            return 'Laser'
          }

          else if (exp.lvl <= 14) {

            return 'Cube'
          }

          else if (exp.lvl <= 15) {

            return 'Boule'
          }

          else if (exp.lvl <= 16) {

            return 'Gel'
          }

          else if (exp.lvl <= 17) {

            return 'Tourelle'
          }

          else if (exp.lvl <= 18) {

            return 'Eau toxique'
          }

          else if (exp.lvl <= 19) {

            return 'Plateforme'
          }

          else if (exp.lvl <= 21) {

            return 'Wheatley'
          }

          else if (exp.lvl <= 24) {

            return 'Glados'
          }

          else if (exp.lvl <= 49) {

            return 'The Cake is a lie'
          }

          else if (exp.lvl >= 50) {

            return 'Sortie Du centre'
          }




        };






        function randomcolor() {
          try {


            return randomHex();

          } catch (err) {


            return '#DCDCDC'

          }


        }

        console.log(args)

        if (args[0] == "i" || args[0] == "image") {




          if (!args[1]) {


            message.channel.send({
              embed: {
                color: colors.error,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
                },
                title: `**Error**`,
                description: `Vous devez mettre une image(url) comme par exemple :\n*exp i https://i.imgur.com/RbrlDwR.jpg\nPour information il votre image va être **couper** pour s'adapter a la votre carte !`,
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL(),
                  text: `©ToniPortal`
                }
              }
            })

          } else {



            message.channel.send({
              embed: {
                color: colors.info,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
                },
                title: `**Info**`,
                description: `Vous avez bien changer le background de la commande *exp`,
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL(),
                  text: `©ToniPortal`
                }
              }
            })


          }

        } else {


          //numéro d'admin : pour définir ton numéro de permission

          var numeroadmin = 11;

          if (message.guild.member(client.user).hasPermission('ADMINISTRATOR')) {

            numeroadmin = 666

          } else if (message.guild.member(client.user).hasPermission('MANAGE_GUILD')) {


            numeroadmin--

          } else if (message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {

            numeroadmin--

          } else if (message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {

            numeroadmin--

          } else if (message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {

            numeroadmin--

          } else if (message.guild.member(client.user).hasPermission('MUTE_MEMBERS')) {

            numeroadmin--

          } else if (message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) {

            numeroadmin--

          } else if (message.guild.member(client.user).hasPermission('READ_MESSAGE_HISTORY')) {

            numeroadmin--

          } else if (message.guild.member(client.user).hasPermission('SEND_TTS_MESSAGES')) {

            numeroadmin--

          } else if (message.guild.member(client.user).hasPermission('SEND_MESSAGES')) {

            numeroadmin--

          } else if (message.guild.member(client.user).hasPermission('VIEW_CHANNEL')) {

            numeroadmin--

          } else {

            numeroadmin = 0

          }

          var backgroudimage = exp.image
          console.log("colororgradient ?: " + colorsorgradient)

          var imgPath = `./image/exp/${message.author.id}.png`
          var convert = require('color-convert');






          const ColorThief = require('@agencyanalytics/colorthief');

          ColorThief.getPalette(imgPath, 5)
            .then(palette => {

              var valecol0 = ('#' + convert.rgb.hex(palette[0]))
              var valecol1 = ('#' + convert.rgb.hex(palette[1]))
              var valecol2 = ('#' + convert.rgb.hex(palette[2]))
              var valecol3 = ('#' + convert.rgb.hex(palette[3]))
              var valecol4 = ('#' + convert.rgb.hex(palette[4]))

              var strr = `${valecol0} ${valecol1} ${valecol2} ${valecol3} ${valecol4}`;
              var colorf = strr.split(" ")





              const rank = new canvacord.Rank()
                .setAvatar(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
                .setCurrentXP(exp.exp)
                .setRequiredXP(exp.lvlup)
                .setStatus(message.author.presence.status)
                .setProgressBar(colorf, colorsorgradient)
                .setUsername(message.author.username)
                .setRank(numeroadmin, rankname())
                .setRankColor(colorlvl(), randomcolor())
                .setDiscriminator(message.author.discriminator)
                .setLevel(exp.lvl, "Level:")
                .setOverlay(valecol0, 0.3, true)
                .setLevelColor(colorlvl(), 4)
                .setBackground("IMAGE", backgroudimage);



             
                rank.build()
                  .then(data => {
                    (async () => {
                    const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                    await message.channel.send(attachment)
                    response.delete()
                  })();
                  })
                






            })



        }


      } else {

        console.error(err)

        message.channel.send({
          embed: {
            color: colors.error,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            title: `**Error**`,
            description: `Glados n'arrive pas a trouver votre dossier de sujet de test.\n${err}`,
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL(),
              text: `©ToniPortal`
            }
          }
        })

      }

    })



  });


};

exports.help = {
  help: `Vous envoie votre image avec vos paramêtre pour vous afficher la barre d'expèrience que vous avez.\nVous pouvez changez votre image avec *exp i <lien d'image>`
};