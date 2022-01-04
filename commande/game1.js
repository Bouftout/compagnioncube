exports.run = (client, message, args) => {

  //Jeu de carte contre bot


  const yaml = require('js-yaml');
  const fs = require('fs');

  fs.exists(`./data/game/game1/${message.author.id}.yml`, function (exists) {

    function attackoudef() {

      var raandom = random(1, 2)

      if (raandom == 1) {

        return "DEF"
      }
      if (raandom == 2) {

        return "ATK"
      }
    }



    function random(min, max) { //juste un random normal
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    if (exists) {

      var fichier = yaml.safeLoad(fs.readFileSync(`./data/game/game1/${message.author.id}.yml`, 'utf8'));

      if (!args[0] || args[0] == "help" || args[0] == " ") {

        message.channel.send({
          embed: {
            color: 0x970cd2,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: `**Help !**`,
            description: `INFO HELP A METTRE`,
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: `©ToniPortal#8330`
            }
          }
        })

      }


      if (args[0] == "poser") {

        if (args[1] == "1") { // poser la carte 1

          stream.once('open', function (fd) {
            stream.write(`un: {\n`);
            stream.write(`un: ${fichier.un.un}\n`);
            stream.write(`stat: ${fichier.un.stat}\n`);
            stream.write(`morte: ${fichier.un.morte}\n`);
            stream.write(`poser: oui\n`);
            stream.write(`}\n`);

            stream.write(`deux: {\n`);
            stream.write(`deux: ${fichier.deux.deux}\n`);
            stream.write(`stat: ${fichier.deux.stat}\n`);
            stream.write(`morte: ${fichier.deux.morte}\n`);
            stream.write(`poser: ${fichier.deux.poser}\n`);
            stream.write(`}\n`);

            stream.write(`trois: {\n`);
            stream.write(`trois: ${fichier.trois.trois}\n`);
            stream.write(`stat: ${fichier.trois.stat}\n`);
            stream.write(`morte: ${fichier.trois.morte}\n`);
            stream.write(`poser: ${fichier.trois.poser}\n`);
            stream.write(`}\n`);

            stream.write(`quatre: {\n`);
            stream.write(`quatre: ${fichier.quatre.quatre}\n`);
            stream.write(`stat: ${fichier.quatre.stat}\n`);
            stream.write(`morte: ${fichier.quatre.morte}\n`);
            stream.write(`poser: ${fichier.quatre.poser}\n`);
            stream.write(`}\n`);

            stream.write(`cinq: {\n`);
            stream.write(`cinq: ${fichier.cinq.cinq}\n`);
            stream.write(`stat: ${fichier.cinq.stat}\n`);
            stream.write(`morte: ${fichier.cinq.morte}\n`);
            stream.write(`poser: ${fichier.cinq.poser}\n`);
            stream.write(`}\n`);

            stream.write(`six: {\n`);
            stream.write(`six: ${fichier.six.six}\n`);
            stream.write(`stat: ${fichier.six.stat}\n`);
            stream.write(`morte: ${fichier.six.morte}\n`);
            stream.write(`poser: ${fichier.six.poser}\n`);
            stream.write(`}\n`);

            stream.write(`sept: {\n`);
            stream.write(`sept: ${fichier.sept.sept}\n`);
            stream.write(`stat: ${fichier.sept.stat}\n`);
            stream.write(`morte: ${fichier.sept.morte}\n`);
            stream.write(`poser: ${fichier.sept.poser}\n`);
            stream.write(`}\n`);


            stream.write(`pv: ${fichier.pv}\n`);
            stream.write(`epv: ${fichier.epv}\n`);
            stream.end();
          });

        }

        /* Il manque a faire:
        -sytème de possage
        -sytème de tour avec le bot
        -sytème pour attaquer
        -détection de carte morte
        -detection des reste qui vont sur ton nexus
        */

        // POUR BEAUCOUP PLUS TARD(si liste au dessue fini) : sytème de carte magie xD

      }



    } else {

      message.channel.send({
        embed: {
          color: 0x970cd2,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Info**`,
          description: `Nous vous avons crée toute les carte !\nRelancer la commande pour jouer !`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      })

      var stream = fs.createWriteStream(`./data/game/game1/${message.author.id}.yml`);
      stream.once('open', function (fd) {
        stream.write(`un: {\n`);
        stream.write(`un: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`morte: non\n`);
        stream.write(`poser: non\n`);
        stream.write(`}\n`);

        stream.write(`deux: {\n`);
        stream.write(`deux: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`morte: non\n`);
        stream.write(`poser: non\n`);
        stream.write(`}\n`);

        stream.write(`trois: {\n`);
        stream.write(`trois: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`morte: non\n`);
        stream.write(`poser: non\n`);
        stream.write(`}\n`);

        stream.write(`quatre: {\n`);
        stream.write(`quatre: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`morte: non\n`);
        stream.write(`poser: non\n`);
        stream.write(`}\n`);

        stream.write(`cinq: {\n`);
        stream.write(`cinq: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`morte: non\n`);
        stream.write(`poser: non\n`);
        stream.write(`}\n`);

        stream.write(`six: {\n`);
        stream.write(`six: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`poser: non\n`);
        stream.write(`poser: non\n`);
        stream.write(`}\n`);

        stream.write(`sept: {\n`);
        stream.write(`sept: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`morte: non\n`);
        stream.write(`poser: non\n`);
        stream.write(`}\n`);


        stream.write(`pv: 2000\n`);
        stream.write(`epv: 2000\n`);
        stream.end();
      });

    }



  })



} //fin commande