const config = require("./config.json");
const {
  Client,
  Collection,
  Intents
} = require('discord.js'),
  client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.DIRECT_MESSAGES]
  }),
  fs = require("fs"),
  yaml = require('js-yaml'),
  Database = require("electus-db"),
  db = new Database.Json();
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
  const memoryUsedMb = process.memoryUsage().heapUsed / 1024 / 1024

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


  var channel = client.channels.cache.get('413764732407775234');
  channel.send('Le bot a démarré le : ' + new Date());


  var fichier = yaml.load(fs.readFileSync(`./data/version.yml`, 'utf8'));

  fs.readFileSync('./package.json', (err, data) => {
    if (err) throw err;
    let packet = JSON.parse(data);


    const ajout = (parseInt(fichier.verdem) + parseInt(1))

    yaml.load(fs.writeFileSync(`./data/version.yml`, `version: ${packet.version}\nverdem: ${ajout}`, 'utf8'));


  });

  client.user.setStatus("online");

  /*
  if (config.maintenance == "non") {

    

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


  if (db.has(message.author.id) == true) {
    console.log("add"+ db.get(message.author.id)[1])
    let ajout = (db.get(message.author.id)[1]) + 1;

    if (db.get(message.author.id)[1] == db.get(message.author.id)[3]) {

console.log("LVL");

      let lvlup = db.get(message.author.id)[3] + Math.round(db.get(message.author.id)[3] / 2)

      let lvl = db.get(message.author.id)[2] + 1
      db.set(message.author.id, [db.get(message.author.id)[0], 0, lvl, lvlup]);

    } else {

      db.set(message.author.id, [db.get(message.author.id)[0], ajout, db.get(message.author.id)[2], db.get(message.author.id)[3]]);

    }
  } else {

    console.log("set")
    db.set(message.author.id, ["./image", 0, 1, 50]);

  }

  /*
  // code pour merry :
    
    let infinity = 1;
  
    if (infinity == 1) {
  
      infinity++
  let temps = 1;
      setInterval(() => {
  
  const id = "255061967977447433"
  
        const merry = client.users.fetch(id);
        console.log(merry)
        const TwitchApi = require("node-twitch").default;
  
        const twitch = new TwitchApi({
          client_id: "yftuibvijvniuhaba96bjoo5bagrxu",
          client_secret: "odmdwail7dcfxoob4c3nw0rk2vnabf"
        });
  
        var stremeur = "merryeliot"
  
        async function getStream() {
          const streams = await twitch.getStreams({
            channel: stremeur
          });
          console.log(streams);
        }
  
        var streame = getStream();
  
        console.log(streame[0])
  
  
        if (streame[0] == undefined) {
  
          console.log(`${stremeur} n'est pas en stream`)
  
         // merry.member.roles.remove(role);
  
  
        } else {
  
  console.log("En Stream")
  temps = 10;
          // Adding the role.
        //  merry.member.roles.add(role);
  
        }
      
  
      }, temps * 1000);
    }
  
    */

  if (message.mentions.members.has(client.user.id)) {
    if (message.content == "merci" || "Merci" || "MeRcI" || "merci beaucoup") {

      message.channel.send("De rien");
    };


  }





  if (message.channel.type != 'GUILD_TEXT') {

    console.log('Nop')
  } else {


    try {

      let profix = config.prefix
      const args = message.content.slice(profix.length).trim().split(/ +/g)
      const command = args.shift().toLowerCase()

      if (message.content.indexOf(profix) !== 0) return

      fileExists(`./commande/${command}.js`).then(exists => {

        if (exists) {

          let commandFile = require(`./commande/${command}.js`)




          fileExists(`./data/colors/${message.author.id}.yml`).then(exists => {

            if (exists) {

              // 0xff80ff == defaut

              // 0x00FF00 == vert (c'est bon c'est lancé)

              // 0xFF0000 == rouge (message d'erreur)

              // 0x778899 == gris (message d'info)

              // 0x008EE2 == Blue ancien defaut
              var colors = yaml.load(fs.readFileSync(`./data/colors/${message.author.id}.yml`, 'utf8'));


              console.log(`${message.author.username} ; Commande éxécuté : ${profix}${command} ${args} ; Latence ${Date.now() - message.createdTimestamp}`);



              //Ne pas oublier que comme sur la commande *ban on peut faire un async au export.run

              if (args[0] !== "help") { //Help sur les commande


                commandFile.run(client, message, args, colors)


              } else if (args[0] == "help") {


                const {
                  help
                } = require(`./commande/${command}`);


                const embed = {
                  color: 0xff80ff,
                  author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                  },
                  title: `Help !`,
                  description: `Usage : **${profix}${command}** ${help.usage}\n${help.description}.`,
                  timestamp: new Date(),
                  footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`
                  }
                }

                message.channel.send({ embeds: [embed] })


              }








            } else {

              fswritecolor()

              async function fswritecolor() {

                var stream = fs.createWriteStream(`./data/colors/${message.author.id}.yml`);

                stream.once('open', (function (fd) {
                  stream.write(`ok: 0x00FF00\n`);
                  stream.write(`error: 0xFF0000\n`);
                  stream.write(`info: 0x778899\n`);
                  stream.write(`defaut: 0xff80ff\n`);
                  stream.end();
                }))

                await commandFile.run(client, message, args, colors)

              };










            }



          })

        } else {

          message.delete()

          const embed = {
            color: 0xFF0000,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            title: `**ERROR**`,
            description: "Quel dommage,GLaDOS n'arrive pas a trouver votre cube possédant la commande !",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL(),
              text: `©${client.user.tag}`
            }
          }

          message.channel.send({
            embeds: [embed]
          })


        }

      })
    } catch (err) {

      message.channel.send({
        embed: {
          color: 0xFF0000,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `**Désolé**`,
          description: "GLaDOS a détruit votre cube possédant la commande. ",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©${client.user.tag}`
          }
        }
      }).then((m) => m.delete({
        timeout: 5 * 1000
      }));

      console.log(err)



    }


  } // fin else





}); // fin client msg




client.on('messageCreate', async message => {
  if (!client.application?.owner) await client.application?.fetch();

  if (message.content === '!deploy' && message.author.id === client.application?.owner.id) {
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

    const command = await client.guilds.cache.get('413710882376515584')?.commands.create(data);
    console.log(command);
  }
});

client.on('messageCreate', async message => {
  if (!client.application?.owner) await client.application?.fetch();

  if (message.content === '!globaldeploy' && message.author.id === client.application?.owner.id) {
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

    const command = await client.application?.commands.create(data);
    console.log(command);
  }
});


client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  let commandFile = require(`./commande/slashcommande/${interaction.commandName}.js`)

  commandFile.run(client, interaction)

});


//Pour afficher les erreur

client.on("error", (e) => {
  console.log("Error:\n" + e)
})