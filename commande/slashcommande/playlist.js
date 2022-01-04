exports.run = async (client, interaction) => {


    const yaml = require('js-yaml');

    const fs = require('fs');

    var uppercase = require('@stdlib/string-uppercase'),
        fileExists = require('file-exists');

    const ancienstring = await interaction.options.getString('humeur');

    const string = String(ancienstring)



    console.log(string)






    fileExists(`./data/autre/playlist/${interaction.member.id}.yml`).then(exists => {

        //Gestion playlist fichier + chaque id
        let numberfichier = 0;

        var data = ""

        var playlist = [
            "joie",
            "triste",
            "fatigue",
            "energie",
        ];

        let numberplaylist = 0;
        if (exists) {

            const doc = yaml.load(fs.readFileSync(`./data/autre/playlist/${interaction.member.id}.yml`, 'utf8'));


            var randomplaylist = playlist[numberplaylist]


            if (string != "random") {


if(string != "triste" || string != "energie" || string != "fatigue"){

    data = "Joie - Des musiques avec une ambiance triste, lente"
    numberplaylist = 0
    var stream = fs.createWriteStream(`./data/autre/playlist/${interaction.member.id}.yml`);
    stream.once('open', (function (fd) {
        stream.write(`joie: ${doc.joie + 1}\n`);
        stream.write(`triste: ${doc.triste}\n`);
        stream.write(`fatigue: ${doc.fatigue}\n`);
        stream.write(`energie: ${doc.energie}\n`);
        stream.write(`random: ${doc.random }\n`);
        stream.end();
    }))
    numberfichier = doc.joie

} else {
                switch (string) {

                    case "triste":
                        data = "Triste - Des musiques avec une ambiance triste, lente"
                        numberplaylist = 1
                        var stream = fs.createWriteStream(`./data/autre/playlist/${interaction.member.id}.yml`);
                        stream.once('open', (function (fd) {
                            stream.write(`joie: ${doc.joie}\n`);
                            stream.write(`triste: ${doc.triste + 1}\n`);
                            stream.write(`fatigue: ${doc.fatigue}\n`);
                            stream.write(`energie: ${doc.energie}\n`);
                            stream.write(`random: ${doc.random }\n`);
                            stream.end();
                        }))
                        numberfichier = doc.triste
                        break;
                    case "fatigue":
                        data = "Fatigué - Du Lofi, tout ce qu'il te faut pour te reposer en paix"
                        numberplaylist = 2
                        var stream = fs.createWriteStream(`./data/autre/playlist/${interaction.member.id}.yml`);
                        stream.once('open', (function (fd) {
                            stream.write(`joie: ${doc.joie}\n`);
                            stream.write(`triste: ${doc.triste}\n`);
                            stream.write(`fatigue: ${doc.fatigue + 1}\n`);
                            stream.write(`energie: ${doc.energie}\n`);
                            stream.write(`random: ${doc.random }\n`);
                            stream.end();
                        }))
                        numberfichier = doc.fatigue
                        break;
                    case "energie":
                        data = "Energétique - Oh toi tu veux en découdre hein, du gros son énervé dans tes oreilles"
                        numberplaylist = 3
                        var stream = fs.createWriteStream(`./data/autre/playlist/${interaction.member.id}.yml`);
                        stream.once('open', (function (fd) {
                            stream.write(`joie: ${doc.joie}\n`);
                            stream.write(`triste: ${doc.triste}\n`);
                            stream.write(`fatigue: ${doc.fatigue }\n`);
                            stream.write(`energie: ${doc.energie + 1}\n`);
                            stream.write(`random: ${doc.random }\n`);
                            stream.end();
                        }))
                        numberfichier = doc.energie
                        break;
                    default:
                        console.log(string + " Non défini")
                        break;
                }


}

const startnorandom = {
    color: 0xff80ff,
    title: `Playlist ${string}`,
    author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
    },
    description: `${data}:\n${randomplaylist}\nVous avez lancée cette commande : ${numberfichier + 1}`,
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
    },
};


interaction.reply({
    embeds: [startnorandom]
});

            } else {

                const doc = yaml.load(fs.readFileSync(`./data/autre/playlist/${interaction.member.id}.yml`, 'utf8'));

                numberfichier = doc.random


                var stream = fs.createWriteStream(`./data/autre/playlist/${interaction.member.id}.yml`);
                stream.once('open', (function (fd) {
                    stream.write(`joie: ${doc.joie}\n`);
                    stream.write(`triste: ${doc.triste}\n`);
                    stream.write(`fatigue: ${doc.fatigue }\n`);
                    stream.write(`energie: ${doc.energie }\n`);
                    stream.write(`random: ${doc.random + 1}\n`);
                    stream.end();
                }))


                numberplaylist = Math.floor(Math.random() * 4);

                var str;
                str = uppercase(randomplaylist);
                data = `${str} - Une personne qui fait des choix hasardeux`


                const startrandom = {
                    color: 0xff80ff,
                    title: `Playlist ${str}`,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL()
                    },
                    description: `${data}:\n${randomplaylist}\nVous avez lancée cette commande : ${numberfichier + 1}`,
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: `©ToniPortal`
                    },
                };


                interaction.reply({
                    embeds: [startrandom]
                });
            }



        } else {
            var stream = fs.createWriteStream(`./data/autre/playlist/${interaction.member.id}.yml`);
            stream.once('open', (function (fd) {
                stream.write(`joie: 0\n`);
                stream.write(`triste: 0\n`);
                stream.write(`fatigue: 0\n`);
                stream.write(`energie: 0\n`);
                stream.write(`random: 0\n`);
                stream.end();
            }))

            const relanceembed = {
                color: 0xff80ff,
                title: '1er lancement utilisateur !',
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                description: `Veuillez relancez la commande !`,
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`
                },
            };


            interaction.reply({
                embeds: [relanceembed]
            });


        }

    })

}