exports.run = (client, message, args, colors) => {

  const fs = require('fs'),
    Discord = require("discord.js"),
    yaml = require('js-yaml'),
    ytdl = require('ytdl-core');


    const {
      AudioPlayerStatus,
      StreamType,
      createAudioPlayer,
      createAudioResource,
      joinVoiceChannel,
    } = require('@discordjs/voice');

  console.log(args)

  const connection = joinVoiceChannel({
    channelId: message.member.voice.channel.id,
    guildId: message.member.guild.id,
    adapterCreator: message.member.guild.voiceAdapterCreator,
  });

  if (!args[1]) {

    if (args[0] == "help" || args[0] == "music" || args[0] == "queue") {

    } else {

      const stream = ytdl(args[0], { filter: 'audioonly' });
      const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
      const player = createAudioPlayer();
      
      player.play(resource);
      connection.subscribe(player);
      
      
      player.on(AudioPlayerStatus.Idle, () => connection.destroy());

      /*
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => { // Connection is an instance of VoiceConnection



            message.delete()

            const youtubedebut = new Discord.MessageEmbed()
              .setTitle("**Music**")
              .setAuthor("Compagnion Cube", client.user.avatarURL())
              .setColor(colors.defaut)
              .setDescription(`Debut de la musique: _${args[0]}_`)
              .setFooter(`©ToniPortal`, client.user.avatarURL())
              .setTimestamp(new Date())


            message.channel.send({
              embed: youtubedebut
            }).then((msg) => {



              connection.play(ytdl(args[0], {}).on('info', (info) => {


if(args[1] == "b" || args[0] == "br" || args[1] == "barre") {

                brmusic(info.videoDetails.lengthSeconds, connection.dispatcher.streamTime / 100)

}

              })

              ).on('finish', () => {


                fs.exists(`./data/queue.yml`, function (exists) {

                  if (exists) {

                    laqueue()

                  } else {
                    message.guild.me.voice.channel.leave();

                    const youtubefin = new Discord.MessageEmbed()
                      .setTitle("**Music**")
                      .setAuthor("Compagnion Cube", client.user.avatarURL())
                      .setColor(colors.ok)
                      .setDescription(`Fin de la musique: _${args[0]}_`)
                      .setFooter(`©ToniPortal`, client.user.avatarURL())
                      .setTimestamp(new Date())

                    msg.edit(youtubefin);


                  }
                })
              })
            })

          })

      };
*/

    }

  };


  //choix music :
  if (args[0] == "music") {


    switch (args[1]) {
      case 'trol':
        trol()
        break;

      case 'epbglados':
        epbglados()
        break;

      case 'ds3':
        ds3()
        break;

      case 'cascade':
        cascade()
        break;

      case 'compass':
        compass()
        break;

      case 'ember':
        ember()
        break;

      case 'glaciers':
        glaciers()
        break;

      case 'plume':
        plume()
        break;

      case 'restoration':
        restoration()
        break;

      case 'risitas':
        risitas()
        break;

      case 'splatoon1':
        splatoon1()
        break;

      case 'restoration':
        compass()
        break;

      case 'kdacoverfr':
        compass()
        break;


      default:
        console.log(`Sorry, we are out of ${args[1]}.`);
    }

  };

  var sayings = [
    "trol",
    "epbglados",
    "ds3",
    "cascade",
    "compass",
    "ember",
    "glaciers",
    "plume",
    "restoration",
    "risitas",
    "splatoon1",
    "kdacoverfr"
  ];


  if (args[0] == "music") { // random music

    if (!args[1]) {

      const music = new Discord.MessageEmbed()
        .setTitle("**Music**")
        .setAuthor("Compagnion Cube", client.user.avatarURL())
        .setColor(colors.defaut)
        .setDescription(`Voici la liste des music : ${sayings}`)
        .setFooter(`©ToniPortal`, client.user.avatarURL())
        .setTimestamp(new Date())


      message.channel.send({
        embed: music
      })

    }

    if (args[1] == "random") {

      var result = Math.floor((Math.random() * sayings.length) + 0);

      switch (sayings[result]) {
        case 'trol':
          trol()
          break;

        case 'epbglados':
          epbglados()
          break;

        case 'ds3':
          ds3()
          break;

        case 'cascade':
          cascade()
          break;

        case 'compass':
          compass()
          break;

        case 'ember':
          ember()
          break;

        case 'glaciers':
          glaciers()
          break;

        case 'plume':
          plume()
          break;

        case 'restoration':
          restoration()
          break;

        case 'risitas':
          risitas()
          break;

        case 'splatoon1':
          splatoon1()
          break;

        case 'restoration':
          compass()
          break;

        case 'kdacoverfr':
          compass()
          break;


        default:
          console.log(`Sorry, we are out of ${args[1]}.`);
      }




    };





  };

  if (args[0] == "queue") { // lire la queue actuel

    fs.exists(`./data/queue.yml`, function (exists) {

      if (exists) {

        laqueue()

      } else {

        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            title: `**Information ??**`,
            description: "Il n'y pas de fichier queue",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL(),
              text: `©ToniPortal`
            }
          }
        })

      }

    })
  }
  //Function

  function tunespasdansunvocal() {

    message.channel.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Information ??**`,
        description: "Veuillez vous connectez a un vocal !",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }
    })

  }




  function laqueue() {


    var fichier = yaml.load(fs.readFileSync(`./data/queue.yml`, 'utf8'));

    if (fichier.un == "trol" || fichier.un == "epbglados" || fichier.un == "ds3" || fichier.un == "cascade" || fichier.un == "compass" ||
      fichier.un == "ember" || fichier.un == "glaciers" || fichier.un == "plume" || fichier.un == "restoration" || fichier.un == "risitas" || fichier.un == "splatoon1" ||
      fichier.un == "kdacoverfr") {

    } else {
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => { // Connection is an instance of VoiceConnection


            connection.play(ytdl(fichier.un, {
              filter: 'audioonly'
            })).on('finish', () => {


              fs.exists(`./data/queue.yml`, function (exists) {

                if (exists) {

                  laqueue()

                } else {




                }
              })
            })
          })

      };
    }

    switch (fichier.un) {
      case 'trol':
        trol()
        break;

      case 'epbglados':
        epbglados()
        break;

      case 'ds3':
        ds3()
        break;

      case 'cascade':
        cascade()
        break;

      case 'compass':
        compass()
        break;

      case 'ember':
        ember()
        break;

      case 'glaciers':
        glaciers()
        break;

      case 'plume':
        plume()
        break;

      case 'restoration':
        restoration()
        break;

      case 'risitas':
        risitas()
        break;

      case 'splatoon1':
        splatoon1()
        break;

      case 'restoration':
        compass()
        break;

      case 'kdacoverfr':
        compass()
        break;


      default:
        console.log(`Sorry, we are out of ${args[1]}.`);
    }



    //gestion de suppression automatique de la queue

    if (fichier.trois > "1") {


      console.log("Il y a 3 musique je diminue la queue a *2* vu que on va la lire")


      var stream = fs.createWriteStream(`./data/queue.yml`); //pour la personne qui donne
      stream.once('open', function (fd) {
        stream.write(`un: ${fichier.deux}\n`);
        stream.write(`deux: ${fichier.trois}\n`);
        stream.end();
      });

    } else if (fichier.deux > "1") {

      console.log("Il y a 2 musique je diminue la queue a *1* vu que on va la lire")

      var stream = fs.createWriteStream(`./data/queue.yml`); //pour la personne qui donne
      stream.once('open', function (fd) {
        stream.write(`un: ${fichier.deux}\n`);
        stream.end();
      });

    }

    if (!fichier.deux) {
      fs.unlink('./data/queue.yml', function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File : ./data/queue.yml delete !');
      });
    }



  }



  function brmusic(maximo, linterval) {

    let max = Math.round(maximo) + 1;


    let intervalval = Math.round(linterval);




    const mesgggdebarre = new Discord.MessageEmbed()
      .setTitle("**Barre**")
      .setAuthor("Compagnion Cube", client.user.avatarURL())
      .setColor(colors.defaut)
      .setDescription("Une barre va être mis en place")
      .setFooter(`©ToniPortal`, client.user.avatarURL())
      .setTimestamp(new Date())



    message.channel.send({
      embed: mesgggdebarre
    }).then((msg) => {
      var idVar = setInterval(() => {

        console.log(`Max: ${max}\nlinterval: ${intervalval}`)

        const x = "□";
        const barStr = `[${'='.repeat(intervalval / 3)}${'□'.repeat((max - intervalval) / 3)}]`;
        console.log(barStr);

        const barre = new Discord.MessageEmbed()
          .setTitle("**Barre**")
          .setAuthor("Compagnion Cube", client.user.avatarURL())
          .setColor(colors.defaut)
          .setDescription(barStr)
          .addFields({
            name: 'Temps écoulée : ',
            value: intervalval - 1,
            inline: true
          }, {
            name: 'Temps restant : ',
            value: (max - intervalval) - 1,
            inline: true
          }, {
            name: 'Information',
            value: "La barre peut être en retard sur la music.",
            inline: true
          })
          .setFooter(`©ToniPortal`, client.user.avatarURL())
          .setTimestamp(new Date());

        msg.edit(barre)

        intervalval++
        if (intervalval == max || intervalval > max) {

          myStopFunction()
        }

      }, 1000);

      function myStopFunction() {
        clearInterval(idVar);
      }


    });

  }





  var mp3Duration = require('mp3-duration'); //mp3 duration

  //DEBUT FUNCTION POUR MUSIC
  function trol() {

    if (message.member.voice.channel) {
      message.guild.me.voice.channel.join()
      .then(connection => { // Connection is an instance of VoiceConnection




          const demtrol = new Discord.MessageEmbed()
            .setTitle("**Information**")
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Début de la musique :\n _trol_")
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setTimestamp(new Date())



          message.channel.send({
            embed: demtrol
          }).then((msg) => {

            connection.play('./music/trol.mp3', {
              bitrate: 96
            }, {
              volume: 1,
            }).on('start', () => {
              mp3Duration('./music/trol.mp3', function (err, duration) {
                if (err) return console.log(err.message);

                brmusic(duration, connection.dispatcher.streamTime / 100)

              });

            }).on('finish', () => {


              fs.exists(`./data/queue.yml`, function (exists) {

                if (exists) {

                  laqueue()

                } else {
                  message.guild.me.voice.channel.leave();

                  const fintrol = new Discord.MessageEmbed()
                    .setTitle("**Information**")
                    .setAuthor("Compagnion Cube", client.user.avatarURL())
                    .setColor(colors.defaut)
                    .setDescription("Fin de la musique:\n _trol_")
                    .setFooter(`©ToniPortal`, client.user.avatarURL())
                    .setTimestamp(new Date())

                  msg.edit(fintrol);
                }
              });

            });

          })

        })

    } else {

      tunespasdansunvocal()


    }

  }

  function ds3() {

    if (message.member.voice.channel) {
      message.member.voice.channel.join()
        .then(connection => { // Connection is an instance of VoiceConnection


          const demtrol = new Discord.MessageEmbed()
            .setTitle("**Information**")
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Début de la musique :\n _ds3_")
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setTimestamp(new Date())


          message.channel.send({
            embed: demtrol
          }).then((msg) => {
            connection.play('./music/ds3.mp3', {
              bitrate: 96
            }, { //Le nom de la musique./music/ds3.mp3
              volume: 1,
            }).on('start', () => {
              //brmusic(le temps max de la musique , le temps du stream)
              mp3Duration('./music/ds3.mp3', function (err, duration) {
                if (err) return console.log(err.message);

                brmusic(duration, connection.dispatcher.streamTime / 100)

              });

            }).on('finish', () => {

              message.guild.me.voice.channel.leave();

              const fintrol = new Discord.MessageEmbed()
                .setTitle("**Information**")
                .setAuthor("Compagnion Cube", client.user.avatarURL())
                .setColor(colors.defaut)
                .setDescription("Fin de la musique:\n _ds3_")
                .setFooter(`©ToniPortal`, client.user.avatarURL())
                .setTimestamp(new Date())

              msg.edit(fintrol);

            });

          })

        })

    } else {

      tunespasdansunvocal()


    }



  }



  function cascade() {


    if (message.member.voice.channel) {
      message.member.voice.channel.join()
        .then(connection => { // Connection is an instance of VoiceConnection


          const demtrol = new Discord.MessageEmbed()
            .setTitle("**Information**")
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Début de la musique :\n _Cascade_")
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setTimestamp(new Date())



          message.channel.send({
            embed: demtrol
          }).then((msg) => {
            connection.play('./music/Cascade.mp3', {
              bitrate: 96
            }, {
              volume: 1,
            }).on('start', () => {
              //brmusic(le temps max de la musique , le temps du stream)
              mp3Duration('./music/Cascade.mp3', function (err, duration) {
                if (err) return console.log(err.message);

                brmusic(duration, connection.dispatcher.streamTime / 100)

              });

            }).on('finish', () => {

              message.guild.me.voice.channel.leave();

              const fintrol = new Discord.MessageEmbed()
                .setTitle("**Information**")
                .setAuthor("Compagnion Cube", client.user.avatarURL())
                .setColor(colors.defaut)
                .setDescription("Fin de la musique:\n _Cascade_")
                .setFooter(`©ToniPortal`, client.user.avatarURL())
                .setTimestamp(new Date())

              msg.edit(fintrol);

            });

          })

        })

    } else {

      tunespasdansunvocal()


    }


    // Cascade
  }


  function compass() {

    if (message.member.voice.channel) {
      message.member.voice.channel.join()
        .then(connection => { // Connection is an instance of VoiceConnection

          const demtrol = new Discord.MessageEmbed()
            .setTitle("**Information**")
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Début de la musique :\n _Compass_")
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setTimestamp(new Date())

          message.channel.send({
            embed: demtrol
          }).then((msg) => {
            connection.play('./music/Compass.mp3', {
              bitrate: 96
            }, {
              volume: 1,
            }).on('start', () => {
              //brmusic(le temps max de la musique , le temps du stream)
              mp3Duration('./music/Compass.mp3', function (err, duration) {
                if (err) return console.log(err.message);

                brmusic(duration, connection.dispatcher.streamTime / 100)

              });

            }).on('finish', () => {

              message.guild.me.voice.channel.leave();

              const fintrol = new Discord.MessageEmbed()
                .setTitle("**Information**")
                .setAuthor("Compagnion Cube", client.user.avatarURL())
                .setColor(colors.defaut)
                .setDescription("Fin de la musique:\n _Compass_")
                .setFooter(`©ToniPortal`, client.user.avatarURL())
                .setTimestamp(new Date())

              msg.edit(fintrol);

            });

          })

        })

    } else {

      tunespasdansunvocal()

    }


  }


  function ember() {

    if (message.member.voice.channel) {
      message.member.voice.channel.join()
        .then(connection => { // Connection is an instance of VoiceConnection


          const demtrol = new Discord.MessageEmbed()
            .setTitle("**Information**")
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Début de la musique :\n _Ember_")
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setTimestamp(new Date())

          message.channel.send({
            embed: demtrol
          }).then((msg) => {
            connection.play('./music/Ember.mp3', {
              bitrate: 96
            }, { //Le nom de la musique
              volume: 1,
            }).on('start', () => {
              //brmusic(le temps max de la musique , le temps du stream)
              mp3Duration('./music/Ember.mp3', function (err, duration) {
                if (err) return console.log(err.message);

                brmusic(duration, connection.dispatcher.streamTime / 100)

              });

            }).on('finish', () => {

              message.guild.me.voice.channel.leave();

              const fintrol = new Discord.MessageEmbed()
                .setTitle("**Information**")
                .setAuthor("Compagnion Cube", client.user.avatarURL())
                .setColor(colors.defaut)
                .setDescription("Fin de la musique:\n _Ember_")
                .setFooter(`©ToniPortal`, client.user.avatarURL())
                .setTimestamp(new Date())

              msg.edit(fintrol);

            });

          })

        })

    } else {

      tunespasdansunvocal()


    }

  }


  function glaciers() {

    if (message.member.voice.channel) {
      message.member.voice.channel.join()
        .then(connection => { // Connection is an instance of VoiceConnection


          const demtrol = new Discord.MessageEmbed()
            .setTitle("**Information**")
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Début de la musique :\n _Formed By Glaciers_")
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setTimestamp(new Date())



          message.channel.send({
            embed: demtrol
          }).then((msg) => {
            connection.play('./music/Formed By Glaciers.mp3', {
              bitrate: 96
            }, { //Le nom de la musique
              volume: 1,
            }).on('start', () => {
              //brmusic(le temps max de la musique , le temps du stream)
              mp3Duration('./music/Formed By Glaciers.mp3', function (err, duration) {
                if (err) return console.log(err.message);

                brmusic(duration, connection.dispatcher.streamTime / 100)

              });

            }).on('finish', () => {

              message.guild.me.voice.channel.leave();

              const fintrol = new Discord.MessageEmbed()
                .setTitle("**Information**")
                .setAuthor("Compagnion Cube", client.user.avatarURL())
                .setColor(colors.defaut)
                .setDescription("Fin de la musique:\n _Formed By Glaciers_")
                .setFooter(`©ToniPortal`, client.user.avatarURL())
                .setTimestamp(new Date())

              msg.edit(fintrol);

            });

          })

        })

    } else {

      tunespasdansunvocal()


    }

  }

  function plume() {

    if (message.member.voice.channel) {
      message.member.voice.channel.join()
        .then(connection => { // Connection is an instance of VoiceConnection

          const demtrol = new Discord.MessageEmbed()
            .setTitle("**Information**")
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Début de la musique :\n _Plume_")
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setTimestamp(new Date())



          message.channel.send({
            embed: demtrol
          }).then((msg) => {
            connection.play('./music/Plume.mp3', {
              bitrate: 96
            }, { //Le nom de la musique
              volume: 1,
            }).on('start', () => {
              //brmusic(le temps max de la musique , le temps du stream)
              mp3Duration('./music/Plume.mp3', function (err, duration) {
                if (err) return console.log(err.message);

                brmusic(duration, connection.dispatcher.streamTime / 100)

              });

            }).on('finish', () => {

              message.guild.me.voice.channel.leave();

              const fintrol = new Discord.MessageEmbed()
                .setTitle("**Information**")
                .setAuthor("Compagnion Cube", client.user.avatarURL())
                .setColor(colors.defaut)
                .setDescription("Fin de la musique:\n _Plume_")
                .setFooter(`©ToniPortal`, client.user.avatarURL())
                .setTimestamp(new Date())

              msg.edit(fintrol);

            });

          })

        })

    } else {

      tunespasdansunvocal()


    }

  }


  function restoration() {

    if (message.member.voice.channel) {
      message.member.voice.channel.join()
        .then(connection => { // Connection is an instance of VoiceConnection


          const demtrol = new Discord.MessageEmbed()
            .setTitle("**Information**")
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Début de la musique :\n _Restoration_")
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setTimestamp(new Date())



          message.channel.send({
            embed: demtrol
          }).then((msg) => {
            connection.play('./music/Restoration.mp3', { //Le nom de la musique
              volume: 1,
            }).on('start', () => {
              //brmusic(le temps max de la musique , le temps du stream)
              mp3Duration('./music/Restoration.mp3', function (err, duration) {
                if (err) return console.log(err.message);

                brmusic(duration, connection.dispatcher.streamTime / 100)

              });

            }).on('finish', () => {

              message.guild.me.voice.channel.leave();

              const fintrol = new Discord.MessageEmbed()
                .setTitle("**Information**")
                .setAuthor("Compagnion Cube", client.user.avatarURL())
                .setColor(colors.defaut)
                .setDescription("Fin de la musique:\n _Restoration_")
                .setFooter(`©ToniPortal`, client.user.avatarURL())
                .setTimestamp(new Date())

              msg.edit(fintrol);

            });

          })

        })

    } else {

      tunespasdansunvocal()


    }

  }

  function risitas() {

    if (message.member.voice.channel) {
      message.member.voice.channel.join()
        .then(connection => { // Connection is an instance of VoiceConnection


          const demtrol = new Discord.MessageEmbed()
            .setTitle("**Information**")
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Début de la musique :\n _Risitas_")
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setTimestamp(new Date())



          message.channel.send({
            embed: demtrol
          }).then((msg) => {
            connection.play('./music/Risitas.mp3', {
              bitrate: 96
            }, { //Le nom de la musique
              volume: 1,
            }).on('start', () => {
              //brmusic(le temps max de la musique , le temps du stream)
              mp3Duration('./music/Risitas.mp3', function (err, duration) {
                if (err) return console.log(err.message);

                brmusic(duration, connection.dispatcher.streamTime / 100)

              });

            }).on('finish', () => {

              message.guild.me.voice.channel.leave();

              const fintrol = new Discord.MessageEmbed()
                .setTitle("**Information**")
                .setAuthor("Compagnion Cube", client.user.avatarURL())
                .setColor(colors.defaut)
                .setDescription("Fin de la musique:\n _Risitas_")
                .setFooter(`©ToniPortal`, client.user.avatarURL())
                .setTimestamp(new Date())

              msg.edit(fintrol);

            });

          })

        })

    } else {

      tunespasdansunvocal()


    }

  }

  function splatoon1() {

    if (message.member.voice.channel) {
      message.member.voice.channel.join()
        .then(connection => { // Connection is an instance of VoiceConnection


          const demtrol = new Discord.MessageEmbed()
            .setTitle("**Information**")
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Début de la musique :\n _Splatoon 1_")
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setTimestamp(new Date())



          message.channel.send({
            embed: demtrol
          }).then((msg) => {
            connection.play('./music/splatoon/splatoon1.mp3', {
              bitrate: 96
            }, { //Le nom de la musique
              volume: 1,
            }).on('start', () => {
              //brmusic(le temps max de la musique , le temps du stream)
              mp3Duration('./music/splatoon1.mp3', function (err, duration) {
                if (err) return console.log(err.message);

                brmusic(duration, connection.dispatcher.streamTime / 100)

              });

            }).on('finish', () => {

              message.guild.me.voice.channel.leave();

              const fintrol = new Discord.MessageEmbed()
                .setTitle("**Information**")
                .setAuthor("Compagnion Cube", client.user.avatarURL())
                .setColor(colors.defaut)
                .setDescription("Fin de la musique:\n _Splatoon 1_")
                .setFooter(`©ToniPortal`, client.user.avatarURL())
                .setTimestamp(new Date())

              msg.edit(fintrol);

            });

          })

        })

    } else {

      tunespasdansunvocal()


    }

  }

  function kdacoverfr() {

    if (message.member.voice.channel) {
      message.member.voice.channel.join()
        .then(connection => { // Connection is an instance of VoiceConnection


          const demtrol = new Discord.MessageEmbed()
            .setTitle("**Information**")
            .setAuthor("Compagnion Cube", client.user.avatarURL())
            .setColor(colors.defaut)
            .setDescription("Début de la musique :\n _[FRENCH COVER] KDA - POPSTARS - LOL  Myu-Chan ft. Shirayuki_")
            .setFooter(`©ToniPortal`, client.user.avatarURL())
            .setTimestamp(new Date())



          message.channel.send({
            embed: demtrol
          }).then((msg) => {
            connection.play('./music/myuchan/[FRENCH COVER] KDA - POPSTARS - LOL  Myu-Chan ft. Shirayuki.wav', {
              bitrate: 96
            }, { //Le nom de la musique
              volume: 1,
            }).on('start', () => {
              //brmusic(le temps max de la musique , le temps du stream)
              mp3Duration('./music/[FRENCH COVER] KDA - POPSTARS - LOL  Myu-Chan ft. Shirayuki.wav', function (err, duration) {
                if (err) return console.log(err.message);

                brmusic(duration, connection.dispatcher.streamTime / 100)

              });

            }).on('finish', () => {

              message.guild.me.voice.channel.leave();

              const fintrol = new Discord.MessageEmbed()
                .setTitle("**Information**")
                .setAuthor("Compagnion Cube", client.user.avatarURL())
                .setColor(colors.defaut)
                .setDescription("Fin de la musique:\n _[FRENCH COVER] KDA - POPSTARS - LOL  Myu-Chan ft. Shirayuki_")
                .setFooter(`©ToniPortal`, client.user.avatarURL())
                .setTimestamp(new Date())

              msg.edit(fintrol);

            });

          })

        })

    } else {

      tunespasdansunvocal()


    }

  }

  //FIN FUNCTIOn music *








};

exports.help = {
  help: `La commande permet de regarder des vidéo youtube et des musique qui sont préstockées sur votre compagnon cube\n*play **vidéo ytb**\n*play queue(dans la queue vous pouvez aussi mettre une vidéo youtube)\n*play music\n*play music random`
};
