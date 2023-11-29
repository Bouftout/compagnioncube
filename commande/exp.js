exports.run = (client, message, args, colors) => {


    const yaml = require('js-yaml'),
        fs = require('fs'),
        { randomHex } = require("randomize-hex"),
        canvacord = require("canvacord");

    const embed = {
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

    message.channel.send({ embeds: [embed] }).then(response => {
        
        setTimeout(() => {



            let fileExists = fs.existsSync(`./data/exp/${message.author.id}.yml`);
            // If the file does not exist
            // create it
            if (!fileExists) {
                stream.once('open', (function (fd) {
                    stream.write(`name: ${message.author.username}\n`);
                    stream.write(`exp: 0\n`);
                    stream.write(`lvl: 1\n`);
                    stream.write(`lvlup: 50\n`);
                    stream.write(`image: ./image/exp/wallpaper.png\n`);
                    stream.end();
                }))

                console.error(err)
                const embed = {
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

                message.channel.send({ embeds: [embed] })

            } else {

                var file = yaml.load(fs.readFileSync(`./data/exp/${message.author.id}.yml`, 'utf8'));

                let img = String(file.image);
                console.log("Img est:" + img)
                let exp = file.exp
                let lvlup = file.lvlup
                let lvl = file.lvl




                var colorsorgradient = "GRADIENT" // couleur fix ou gradient pour la barre de grade

                message.delete() // delete


                canvacord.Canvas.registerFonts() // enregistrer les font du packet






                function colorlvl() {
                    if (lvl < 5) {
                        var valeurcouleurlvl = "#ffffff"
                        return valeurcouleurlvl
                    }
                    if (lvl >= 5) {
                        var valeurcouleurlvl = "#fffff0"
                        return valeurcouleurlvl
                    }
                }

                function rankname() {



                    if (lvl == 1) {

                        return 'Chell'
                    }
                    if (lvl == 2) {

                        return '1ière Salle'
                    }
                    if (lvl == 3) {

                        return 'Atlas'
                    }
                    if (lvl == 4) {

                        return 'Pbody'
                    }
                    if (lvl == 5) {

                        return 'Portal Gun'
                    }
                    if (lvl == 6) {

                        return 'Portail Bleu'
                    }

                    if (lvl == 7) {

                        return 'Portail Orange'
                    }

                    if (lvl == 8 || lvl == 9) {

                        return 'Aperture science'
                    }

                    if (lvl == 10) {

                        return '//Error//'
                    }

                    if (lvl == 11 || lvl == 12) {

                        return 'Compagnion Cube'
                    }

                    if (lvl == 13) {

                        return 'Laser'
                    }

                    if (lvl == 14) {

                        return 'Cube'
                    }

                    if (lvl == 15) {

                        return 'Boule'
                    }

                    if (lvl == 16) {

                        return 'Gel'
                    }

                    if (lvl == 17) {

                        return 'Tourelle'
                    }

                    if (lvl == 18) {

                        return 'Eau toxique'
                    }

                    if (lvl == 19) {

                        return 'Plateforme'
                    }

                    if (lvl == 20 || lvl == 21) {

                        return 'Wheatley'
                    }

                    if (lvl >= 22 && lvl <= 25) {

                        return 'Glados'

                    }

                    if (lvl >= 26 && lvl <= 49) {

                        return 'The Cake is a lie'
                    }

                    if (lvl >= 50) {

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

                if (args[1] == "i" || args[1] == "image") {




                    if (!args[1]) {

                        const embedargs = {
                            color: colors.error,
                            author: {
                                name: client.user.username,
                                icon_url: client.user.avatarURL()
                            },
                            title: `**Error**`,
                            description: `Vous devez mettre une image(url) comme par exemple :\n*exp i https://i.imgur.com/RbrlDwR.jpg \nPour information il votre image va être **couper** pour s'adapter a la votre carte !`,
                            timestamp: new Date(),
                            footer: {
                                icon_url: client.user.avatarURL(),
                                text: `©ToniPortal`
                            }
                        }

                        message.channel.send({ embeds: [embedargs] })

                    } else {

                        var Jimp = require('jimp'); // https://www.npmjs.com/package/jimp

                        //Utulisation de Jimp pour download l'image puis la crop si on met rien a la fin(crop au milieu)

                        // `./image/exp/${message.author.id}.png`;
                        console.log("Image a faire :" + args[2])
                        if (file.image == "./image/exp/wallpaper.png") {


                            Jimp.read(args[2], (err, lenna) => {
                                if (err) throw err;
                                lenna
                                    .resize(934, 282, Jimp.RESIZE_HERMITE) // resize
                                    .quality(100) // set JPEG quality
                                    .write(`./image/exp/${message.author.id}.png`); // save

                                img = `./image/exp/${message.author.id}.png`;

                                file.image = img;
                                fs.writeFile(`./data/exp/${message.author.id}.yml`, yaml.dump(file), (err) => {
                                    if (err) {
                                        console.log(err);
                                    }
                                });
                            });


                        } else {


                            Jimp.read(args[2], (err, lenna) => {
                                if (err) throw err;
                                lenna
                                    .crop(467, 141, 934, 282) // crop
                                    .quality(100) // set JPEG quality
                                    .write(`./image/exp/${message.author.id}.png`); // save
                            }).catch(err => {
                                console.log(err)
                            });


                        }

                        const embed = {
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

                        response.delete();

                        message.channel.send({ embeds: [embed] })

                    }

                } else {


                    //numéro d'admin : pour définir ton numéro de permission

                    var numeroadmin = 11;
                    /*
                        if (message.guild.member(client.user).permissions.has('ADMINISTRATOR')) {
        
                          numeroadmin = 666
        
                        } if (message.guild.member(client.user).permissions.has('MANAGE_GUILD')) {
        
        
                          numeroadmin--
        
                        } if (message.guild.member(client.user).permissions.has('MANAGE_ROLES')) {
        
                          numeroadmin--
        
                        } if (message.guild.member(client.user).permissions.has('BAN_MEMBERS')) {
        
                          numeroadmin--
        
                        } if (message.guild.member(client.user).permissions.has('KICK_MEMBERS')) {
        
                          numeroadmin--
        
                        } if (message.guild.member(client.user).permissions.has('MUTE_MEMBERS')) {
        
                          numeroadmin--
        
                        } if (message.guild.member(client.user).permissions.has('MANAGE_MESSAGES')) {
        
                          numeroadmin--
        
                        } if (message.guild.member(client.user).permissions.has('READ_MESSAGE_HISTORY')) {
        
                          numeroadmin--
        
                        } if (message.guild.member(client.user).permissions.has('SEND_TTS_MESSAGES')) {
        
                          numeroadmin--
        
                        } if (message.guild.member(client.user).permissions.has('SEND_MESSAGES')) {
        
                          numeroadmin--
        
                        } if (message.guild.member(client.user).permissions.has('VIEW_CHANNEL')) {
        
                          numeroadmin--
        
                        } else {
        
                          numeroadmin = 0
        
                        }
        
                        */


                    var backgroudimage = img

                    var convert = require('color-convert');


                    const ColorThief = require('@agencyanalytics/colorthief');

                    ColorThief.getPalette(backgroudimage, 5)
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
                                .setCurrentXP(exp)
                                .setRequiredXP(lvlup)
                                .setStatus("dnd")
                                .setProgressBar(colorf, colorsorgradient)
                                .setUsername(message.author.username)
                                .setRank(numeroadmin, rankname())
                                .setRankColor(colorlvl(), randomcolor())
                                .setDiscriminator(message.author.discriminator)
                                .setLevel(lvl, "Level:")
                                .setOverlay(valecol0, 0.3, true)
                                .setLevelColor(colorlvl(), 4)
                                .setBackground("IMAGE", backgroudimage);


                            const { Client, Intents, MessageAttachment, AttachmentBuilder } = require('discord.js');
                            const Canvas = require('canvas');

                            rank.build()
                                .then(data => {
                                    (async () => {
                                        const attachment = new AttachmentBuilder(data, "RankCard.png");


                                        message.channel.send({ files: [attachment] });

                                        response.delete();
                                    })();
                                })







                        })



                }

            }

        }, 1000) //timeout fck

    })

};

exports.help = {
    usage: `<i <lien d'image>>`,
    description: `Vous envoie votre image avec vos paramêtre pour vous afficher la barre d'expèrience que vous avez.\nVous pouvez aussi changer l'image avec l'usage donner juste au dessue !`
};