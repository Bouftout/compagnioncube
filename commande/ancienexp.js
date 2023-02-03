exports.run = (client, message, args, colors) => {

    const yaml = require('js-yaml'),
        fs = require('fs'),
        { randomHex } = require("randomize-hex"),
        Discord = require("discord.js"),
        canvacord = require("canvacord");

    const { Database } = require("quickmongo");
    const db = new Database("mongodb://botdiscord:totoni13@louna@b61de8bd-5f3e-48d3-b5bf-60b26d9957d3.compagnioncube-3215.mongo.a.osc-fr1.scalingo-dbs.com:39766/compagnioncube-3215?replicaSet=compagnioncube-3215-rs0&ssl=true");

    db.connect();

    db.on("ready", () => {
        dbstart();
    });


    async function dbstart() {

        var img;
        let exp = await db.get(`${message.author.id}.exp`) + 1
        let lvlup = await db.get(`${message.author.id}.lvlup`)
        let lvl = await db.get(`${message.author.id}.lvl`)

        if (db.get(`${message.author.id}.exp`) == 1) {

        } else {
            var img = `./image/exp/${message.author.id}.png`;

            db.add(`${message.author.id}.image`, 1);

        }



        var colorsorgradient = "GRADIENT" // couleur fix ou gradient pour la barre de grade

        message.delete() // delete


        canvacord.Canvas.registerFonts() // enregistrer les font du packet


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





            if (db.has(`${message.author.id}`) != true) {



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

                if (args[0] == "i" || args[0] == "image") {




                    if (!args[1]) {

                        const embedargs = {
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

                        message.channel.send({ embeds: [embedargs] })

                    } else {




                        var Jimp = require('jimp'); // https://www.npmjs.com/package/jimp

                        //Utulisation de Jimp pour download l'image puis la crop si on met rien a la fin(crop au milieu)

                        // `./image/exp/${message.author.id}.png`;
                        if (!args[3]) {
                            args[3] = 0
                        }
                        if (args[3] != 0) {


                            Jimp.read(args[1], (err, lenna) => {
                                if (err) throw err;
                                lenna
                                    .resize(934, 282, Jimp.RESIZE_HERMITE) // resize
                                    .quality(100) // set JPEG quality
                                    .write(`./image/exp/${message.author.id}.png`); // save

                                db.set(message.author.id, [`./image/exp/${message.author.id}.png`, exp, lvl, lvlup]);
                            });


                        } else {


                            Jimp.read(args[1], (err, lenna) => {
                                if (err) throw err;
                                lenna
                                    .crop(467, 141, 934, 282) // crop
                                    .quality(100) // set JPEG quality
                                    .write(`./image/exp/${message.author.id}.png`); // save
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


                            const { Client, Intents, MessageAttachment } = require('discord.js');
                            const Canvas = require('canvas');

                            rank.build()
                                .then(data => {
                                    (async() => {
                                        const attachment = new MessageAttachment(data, "RankCard.png");


                                        message.channel.send({ files: [attachment] });

                                        response.delete();
                                    })();
                                })







                        })



                }


            } else {

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


            }

        })

    } //fin function db

};

exports.help = {
    usage: `<i <lien d'image>>`,
    description: `Vous envoie votre image avec vos paramêtre pour vous afficher la barre d'expèrience que vous avez.\nVous pouvez aussi changer l'image avec l'usage donner juste au dessue !`
};