const fs = require('fs');
const fl = fs.readFileSync('./data/autre/word.txt', 'utf-8');
const va = fl.split('\n');



exports.run = async (client, message, args, colors) => {


    var jsoncat = await fetch("https://cataas.com/cat?json=true")
    var json = await jsoncat.json()

    var tags = "Tags: " + json.tags;
    console.log((json.tags).length);

    if ((json.tags).length > 1) {
        tags = "Tags: ";
        json.tags.forEach(element => {
            tags += `${element} `
        });
    }

    if ((json.tags).length == 0) {
        tags = "N'a pas de tags";
    }


    if (!args) {



        message.channel.send({
            embeds: [{
                color: colors.defaut,
                url: `https://cataas.com/cat/${json._id}`,
                author: {
                    name: json._id,
                    icon_url: client.user.avatarURL()
                },
                title: `**Votre gif/image de chat :**`,
                description: tags,
                timestamp: new Date(json.updatedAt),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`
                },
                image: {
                    url: `https://cataas.com/cat/${json._id}`,
                },
            }]
        });



    } else {

        if(args[3]){
            json._id = args[3]
        }

        let url = `https://cataas.com/cat/${json._id}`;
        let actualWord;
        if (args[1] == "word" && args[2] == "random") {
            let randWord = va[Math.floor(Math.random() * va.length)];
            actualWord = randWord;
            url = `https://cataas.com/cat/${json._id}/says/${randWord}`
        } else if (args[1] == "word") {
            actualWord = args[2];
            url = `https://cataas.com/cat/${json._id}/says/${args[2]}`
        }

        message.channel.send({
            embeds: [{
                color: colors.defaut,
                url: url,
                author: {
                    name: json._id,
                    icon_url: client.user.avatarURL()
                },
                title: `**Votre gif/image de chat :**`,
                description: `${tags}\nAvec le mot : ?`,
                timestamp: new Date(json.updatedAt),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`
                },
                image: {
                    url: url,
                },
            }]
        });

    }

};


exports.help = {
    usage: ``,
    description: `Pour vous affichier une image ou un gif de chat aléatoirement`
};