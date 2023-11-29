﻿const {
    Client,
    Collection,
    GatewayIntentBits
} = require('discord.js'),
    client = new Client({
        partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers,
        ],
    }),
    config = require('./config.json'),
    fs = require("fs"),
    yaml = require('js-yaml'),
    fileExists = require('file-exists');

client.commands = new Collection();

login()


require('events').EventEmitter.defaultMaxListeners = 0;

async function login() {

    await client.login(config.token)
    return console.log(">Connexion...\n--------------")

};

client.on("ready", (function () {

    let upTime1 = Math.round(process.uptime());
    const memoryUsedMb = process.memoryUsage().heapUsed / 1024 / 1024;

    console.log(
        "\n _   _   _____   _       _       _____  \n" +
        "| | | | | ____| | |     | |     /  _  \ \n" +
        "| |_| | | |__   | |     | |     | | | | \n" +
        "|  _  | |  __|  | |     | |     | | | | \n" +
        "| | | | | |___  | |___  | |___  | |_| | \n" +
        "|_| |_| |_____| |_____| |_____| \_____/ \n"
    );
    console.log(
        `-----------------------------------------------------------` +
        `\n[Démarré] ${new Date()}` +
        `\n-----------------------------------------------------------` +
        `\n[INFO]Uptime ${upTime1}s\nUsed Memory : ${memoryUsedMb}` +
        `\n-----------------------------------------------------------` +
        `\n\n>>Le bot est pret pour servir ${client.guilds} serveur.` +
        `\n\nJe suis au courant de ??? canaux dans l'ensemble.` +
        `\nEt je suis le ${client.user.tag}.` +
        `\n\nCrée par ToniPortal` +
        `\n\n------------------------------------------------`
    );



    // var channel = client.channels.cache.get('413764732407775234');
    // channel.send({
    //   embed: {
    //     color: 0x778899,
    //     author: {
    //       name: client.user.username,
    //       icon_url: client.user.avatarURL()
    //     },
    //     title: `**Info**`,
    //     description: `Le bot a démarré le **${new Date()}**`,
    //     timestamp: new Date(),
    //     footer: {
    //       icon_url: client.user.avatarURL(),
    //       text: `©ToniPortal`
    //     }
    //   }
    // })


    var yv = yaml.load(fs.readFileSync(`./data/version.yml`, 'utf8'));

    yaml.load(fs.writeFileSync(`./data/version.yml`, `version: ${yv.version}\nverdem: ${(Number(yv.verdem) + 1)}`, 'utf8'));






    /*
    if (config.maintenance == "non") {

      client.user.setStatus("online");

      setInterval((function () {
        client.setGame(`Online || *help || ${client.guilds.cache.size} Server`)


      }), 3600); //Toute les heure vérifie

    } else {

      client.user.setStatus("dnd");
      setInterval((function () {
        client.setGame(`In maintenance || *help || ${client.guilds.cache.size} Server`);
      }), 3600); //Toute les heure vérifie


    }
    */



}));

client.on("messageCreate", message => {
    if (message.author.id === client.user.id || message.author.bot || message.author.equals(client.user)) return;


    fileExists(`./data/exp/${message.author.id}.yml`).then(async exists => {
        console.log(exists)
        if (exists) {

            var file = await yaml.load(fs.readFileSync(`./data/exp/${message.author.id}.yml`, 'utf8'));

            if (file) {
                if (file.exp < file.lvlup) {
                    file.exp += Number(1);
                } else {
                    file.exp = Number(0)
                    file.lvl += Number(1)
                    file.lvlup = Number(file.lvlup) * 2
                }



                fs.writeFile(`./data/exp/${message.author.id}.yml`, yaml.dump(file), (err) => {
                    if (err) {
                        console.log(err);
                    }
                });

                // console.log("ADD ONE EXP " + file.exp + "\n" + yaml.dump(file));
            } else {
                console.warn("[EXP] non existant")
            }
        } else {
            // Exemple :
            // name: ToniPortal
            // exp: 0
            // lvl: 0
            // lvlup: 0
            // image: "./image/exp/wallpaper.png

            var stream = fs.createWriteStream(`./data/exp/${message.author.id}.yml`);

            stream.once('open', (function (fd) {
                stream.write(`name: ${message.author.username}\n`);
                stream.write(`exp: 1\n`);
                stream.write(`lvl: 1\n`);
                stream.write(`lvlup: 50\n`);
                stream.write(`image: ./image/exp/wallpaper.png\n`);
                stream.end();
            }))
        }
    })

});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id || message.author.bot || message.author.equals(client.user)) return;


    let profix = `*`; //prefix du bot
    const args = message.content.trim().split(/ +/g);
    const command = args[0].slice((`*`).length).toLowerCase();
    // console.log(`profix: ${profix}\nArgs: ${args}\nCommand: ${command}\nMessage: ${message}`)

    fileExists(`./commande/${command}.js`).then(exists => {
        if (exists) {
            let commandFile = require(`./commande/${command}.js`)


            // 0xff80ff == defaut
            // 0x00FF00 == vert (c'est bon c'est lancé)
            // 0xFF0000 == rouge (message d'erreur)
            // 0x778899 == gris (message d'info)
            // 0x008EE2 == Blue ancien defaut
            // Time == temps pour les erreur

            var colors = yaml.load(fs.readFileSync(`./data/colors/colors.yml`, 'utf8'));

            //Ne pas oublier que comme sur les commande on peut faire un async au export.run
            console.log(args[1])

            if (args[0] !== "*help" || (args[0] == "*help" && args[1] === undefined)) { //Help sur les commande

                try {
                    console.log(`${message.author.username} ; Commande éxécuté : ${profix}${command} ${args} ; Latence ${Date.now() - message.createdTimestamp}`);
                    commandFile.run(client, message, args, colors) // Lancement de la cmd avec les arguments.
                } catch (error) {

                    console.error(error)

                    const embed = {
                        color: 0xFF0000,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL()
                        },
                        title: `**ERROR**`,
                        description: "Quel dommage,GLaDOS n'a pas reussie a lancer votre commande !",
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: `©${client.user.tag}`
                        }
                    }

                    message.channel.send({
                        embeds: [embed]
                    })


                } finally {

                    console.log(`\n`);

                }

            } else if (args[0] == "*help" && args[1] != undefined) {
                const {
                    help
                } = require(`./commande/${args[1]}`);

                const helpembed = {
                    color: 0xff80ff,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL()
                    },
                    title: `Help !`,
                    description: `Usage : _${profix}${args[1]}_ ${help.usage}\n${help.description}.`,
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: `©ToniPortal`
                    }
                }

                message.channel.send({ embeds: [helpembed] })

            }


        }

    })


}); // fin client msg



/*
client.on('messageCreate', async message => {
    if (!client.application ? .owner) await client.application ? .fetch();

    if (message.content === '!deploy' && message.author.id === client.application ? .owner.id) {
        const data = {
            name: 'playlist',
            description: "Si tu cherches des banger pour bouger ta tête ou pleurer en boule c'est cette commande",
            options: [{
                name: 'humeur',
                type: 'INT',
                description: 'Choisi de quel humeur tu est !',
                required: true,
                choices: [{
                        name: 'Joie',
                        value: 1,
                        description: "Joie - Une musique chill, un peu d'électro mais sans plus",
                    },
                    {
                        name: 'Triste',
                        value: 2,
                        description: "Triste - Des musiques avec une ambiance triste, lente",
                    },
                    {
                        name: 'Fatigué',
                        value: 3,
                        description: "Fatigué - Du Lofi, tout ce qu'il te faut pour te reposer en paix",
                    },
                    {
                        name: 'Energétique',
                        value: 4,
                        description: "Energétique - Oh toi tu veux en découdre hein, du gros son énervé dans tes oreilles",
                    },
                    {
                        name: 'Random',
                        value: 5,
                        description: "Random - Une personne qui fait des choix hasardeux",
                    },
                ],
            }],
        };

        const command = await client.guilds.cache.get('413710882376515584') ? .commands.create(data);
        console.log(command);
    }
});

client.on('messageCreate', async message => {
    if (!client.application ? .owner) await client.application ? .fetch();

    if (message.content === '!globaldeploy' && message.author.id === client.application ? .owner.id) {
        const data = {
            name: 'playlist',
            description: "Si tu cherches des banger pour bouger ta tête ou pleurer en boule c'est cette commande",
            options: [{
                name: 'humeur',
                type: 'STRING',
                description: 'Choisi de quel humeur tu est !',
                required: true,
                choices: [{
                        name: 'Joie',
                        value: 'joie ',
                        description: "Joie - Une musique chill, un peu d'électro mais sans plus",
                    },
                    {
                        name: 'Triste',
                        value: 'triste',
                        description: "Triste - Des musiques avec une ambiance triste, lente",
                    },
                    {
                        name: 'Fatigué',
                        value: 'fatigue',
                        description: "Fatigué - Du Lofi, tout ce qu'il te faut pour te reposer en paix",
                    },
                    {
                        name: 'Energétique',
                        value: 'energie',
                        description: "Energétique - Oh toi tu veux en découdre hein, du gros son énervé dans tes oreilles",
                    },
                ],
            }],
        };

        const command = await client.application ? .commands.create(data);
        console.log(command);
    }
});
*/

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    let commandFile = require(`./commande/slashcommande/${interaction.commandName}.js`)

    commandFile.run(client, interaction)

});


//Pour afficher les erreur ou les warning

client.on("error", (e) => {
    console.log("Error:\n" + e)
})