exports.run = (client, message, args, colors) => {
    const Discord = require("discord.js");
    const api = require('anime-vostfr');

    if (!args[0]) {

        message.reply('Veuillez mettre **vf** ou **vostfr**')

    } else {

        if (!args[1] || args[1] == "undefined") {

            if (args[0] == "vf") {

                args[1] = 'Kimi no Na wa.'

            } else {

                args[1] = 'Re:zero'

            }

        }





        if (!args[2]) {

            args[2] = ""

        }
        if (!args[3]) {

            args[3] = ""

        }
        if (!args[4]) {

            args[4] = ""

        }
        if (!args[5]) {

            args[5] = ""

        }
        if (!args[6]) {

            args[6] = ""

        }
        if (!args[7]) {

            args[7] = ""

        }
        if (!args[8]) {

            args[8] = ""

        }


        const longargs = args[1] + " " + args[2] + " " + args[3] + " " + args[4] + " " + args[5] + " " + args[6] + " " + args[7] + " " + args[8]

        console.log(longargs)


        function populaire() {
            if (args[0] == "popular" || args[0] == "populaire" || args[0] == "bestscore") {


                var another = api.popularAnime(data);

                console.log("Result: ", another);

                if (another == "[]" || another == "") {

                    message.delete()

                    const pasderesult = new Discord.MessageEmbed()
                        .setColor(colors.error)
                        .setTitle(`Error 404`)
                        .setAuthor("Compagnion Cube", client.user.avatarURL())
                        .setDescription(`Veuillez mettre un titre valide de recherche !`)
                        .setTimestamp()
                        .setFooter(`©ToniPortal`, client.user.avatarURL())

                    message.channel.send(pasderesult).then(response => response.delete({timeout:"8000"}))

                } else {


                    if (another[0].status == "2") {

                        statue = 'Terminé'

                    }
                    if (another[0].status == "1") {

                        statue = 'En cours'

                    }
                    if (another[0].status == "0") {

                        statue = 'Pas encore commencé'

                    }

                    if (another[0].genres == [] || another[0].genres == '') {

                        genre = '?'

                    } else {

                        genre = another[0].genres

                    }

                    if (another[0].title_english == '') {

                        another[0].title_english = "Pas de titre en anglais"

                    }


                    var textep = "Nombre d'épisode :"

                    if (another[0].nb_eps == "Film") {

                        textep = "Catégorie :"


                    }


                    const populaireembed = new Discord.MessageEmbed()
                        .setColor(colors.ok)
                        .setTitle(`${another[0].title}`)
                        .setURL(`https://neko-sama.io/${another[0].url}`)
                        .setAuthor("Compagnion Cube", client.user.avatarURL())
                        .setDescription('**Titre en anglais :**\n' + another[0].title_english)
                        .addFields(
                            { name: 'Status:', value: statue, inline: true },
                            { name: textep, value: another[0].nb_eps, inline: true },
                            { name: "Date de sortie :", value: another[0].start_date_year },
                            { name: 'Score :', value: `${another[0].score}`, inline: true },
                            { name: 'Popularité :', value: `${Math.round(another[0].popularity)}`, inline: true },
                            { name: 'Genres :', value: genre },
                        )
                        .setImage(another[0].url_image)
                        .setTimestamp()
                        .setFooter(`©ToniPortal`, client.user.avatarURL())

                    message.channel.send(populaireembed);

                }

            }

        }


        // variable pour le vostfr et vf
        var statue;
        var genre;




        if (args[0] == "vf") {
            //VF same methods as vostfr
            api.loadAnimeVF().then(async data => {

                let another = api.searchAnime(data, longargs);
                console.log("Result: ", another);

                if (another == "[]" || another == "") {

                    message.delete()

                    const pasderesult = new Discord.MessageEmbed()
                        .setColor(colors.error)
                        .setTitle(`Error 404`)
                        .setAuthor("Compagnion Cube", client.user.avatarURL())
                        .setDescription(`Veuillez mettre un titre valide de recherche !`)
                        .setTimestamp()
                        .setFooter(`©ToniPortal`, client.user.avatarURL())

                    message.channel.send(pasderesult).then(response => response.delete({timeout:"8000"}))

                } else {


                    if (another[0].status == "2") {

                        statue = 'Terminé'

                    }
                    if (another[0].status == "1") {

                        statue = 'En cours'

                    }
                    if (another[0].status == "0") {

                        statue = 'Pas encore commencé'

                    }

                    if (another[0].genres == [] || another[0].genres == '') {

                        genre = '?'

                    } else {

                        genre = another[0].genres

                    }

                    if (another[0].title_english == '') {

                        another[0].title_english = "Pas de titre en anglais"

                    }


                    var textep = "Nombre d'épisode :"

                    if (another[0].nb_eps == "Film") {

                        textep = "Catégorie :"


                    }


                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor(colors.ok)
                        .setTitle(`${another[0].title}`)
                        .setURL(`https://neko-sama.io/${another[0].url}`)
                        .setAuthor("Compagnion Cube", client.user.avatarURL())
                        .setDescription('**Titre en anglais :**\n' + another[0].title_english)
                        .addFields(
                            { name: 'Status:', value: statue, inline: true },
                            { name: textep, value: another[0].nb_eps, inline: true },
                            { name: "Date de sortie :", value: another[0].start_date_year },
                            { name: 'Score :', value: `${another[0].score}`, inline: true },
                            { name: 'Popularité :', value: `${Math.round(another[0].popularity)}`, inline: true },
                            { name: 'Genres :', value: genre },
                        )
                        .setImage(another[0].url_image)
                        .setTimestamp()
                        .setFooter(`©ToniPortal`, client.user.avatarURL())

                    message.channel.send(exampleEmbed);


                }

            }).catch(err => console.log(err));







        }



        if (args[0] == "vostfr") {
            //VOSTFR
            api.loadAnime().then(async (data) => {
                console.log("Connexion effectuée...");

                let another = api.searchAnime(data, longargs);
                console.log("Result: ", another[0]);

                if (another[0].status == "2") {

                    statue = 'Terminé'

                }
                if (another[0].status == "1") {

                    statue = 'En cours'

                }
                if (another[0].status == "0") {

                    statue = 'Pas encore commencé'

                }

                if (another[0].genres == [] || another[0].genres == '') {

                    genre = '?'

                } else {

                    genre = another[0].genres

                }

                if (another[0].title_english == '') {

                    another[0].title_english = "Pas de titre en anglais"

                }

                var textep = "Nombre d'épisode :"

                if (another[0].nb_eps == "Film") {

                    textep = "Catégorie :"


                }


                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor(colors.ok)
                    .setTitle(`${another[0].title}`)
                    .setURL(`https://neko-sama.io/${another[0].url}`)
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setDescription('**Titre en anglais :**\n' + another[0].title_english)
                    .addFields(
                        { name: 'Status:', value: statue, inline: true },
                        { name: textep, value: another[0].nb_eps, inline: true },
                        { name: "Date de sortie :", value: another[0].start_date_year },
                        { name: 'Score :', value: `${another[0].score}`, inline: true },
                        { name: 'Popularité :', value: `${Math.round(another[0].popularity)}`, inline: true },
                        { name: 'Genres :', value: genre },
                    )
                    .setImage(another[0].url_image)
                    .setTimestamp()
                    .setFooter(`©ToniPortal`, client.user.avatarURL())

                message.channel.send(exampleEmbed);

            }).catch(err => console.log(err));

        }


    };



};

exports.help = {
    usage: `<vf;vostfr>`,
    description: `Pour searcher des anime vf ou vostfr`
  };

