exports.run = (client, message, args, colors) => {
  
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

      var fichier = yaml.load(fs.readFileSync(`./data/game/game1/${message.author.id}.yml`, 'utf8'));

      if (!args[0] || args[0] == "help" || args[0] == " ") {
              const embed =  {
            color: colors.info,
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
                }
        
message.channel.send({ embeds: [embed] })
      }


      if (args[0] == "poser") {

        if (args[1] == "1") { // poser la carte 1

          if (fichier.un.morte == "0" || fichier.un.poser == "0") {
          
          stream.once('open', function (fd) {
            stream.write(`un: {\n`);
            stream.write(`vie: ${fichier.un.vie}\n`);
            stream.write(`stat: ${fichier.un.stat}\n`);
            stream.write(`morte: ${fichier.un.morte}\n`);
            stream.write(`poser: 1\n`);
            stream.write(`}\n`);

            stream.write(`deux: {\n`);
            stream.write(`vie: ${fichier.deux.vie}\n`);
            stream.write(`stat: ${fichier.deux.stat}\n`);
            stream.write(`morte: ${fichier.deux.morte}\n`);
            stream.write(`poser: ${fichier.deux.poser}\n`);
            stream.write(`}\n`);

            stream.write(`trois: {\n`);
            stream.write(`vie: ${fichier.trois.vie}\n`);
            stream.write(`stat: ${fichier.trois.stat}\n`);
            stream.write(`morte: ${fichier.trois.morte}\n`);
            stream.write(`poser: ${fichier.trois.poser}\n`);
            stream.write(`}\n`);

            stream.write(`quatre: {\n`);
            stream.write(`vie: ${fichier.quatre.vie}\n`);
            stream.write(`stat: ${fichier.quatre.stat}\n`);
            stream.write(`morte: ${fichier.quatre.morte}\n`);
            stream.write(`poser: ${fichier.quatre.poser}\n`);
            stream.write(`}\n`);

            stream.write(`cinq: {\n`);
            stream.write(`vie: ${fichier.cinq.vie}\n`);
            stream.write(`stat: ${fichier.cinq.stat}\n`);
            stream.write(`morte: ${fichier.cinq.morte}\n`);
            stream.write(`poser: ${fichier.cinq.poser}\n`);
            stream.write(`}\n`);

            stream.write(`six: {\n`);
            stream.write(`vie: ${fichier.six.vie}\n`);
            stream.write(`stat: ${fichier.six.stat}\n`);
            stream.write(`morte: ${fichier.six.morte}\n`);
            stream.write(`poser: ${fichier.six.poser}\n`);
            stream.write(`}\n`);

            stream.write(`sept: {\n`);
            stream.write(`vie: ${fichier.sept.vie}\n`);
            stream.write(`stat: ${fichier.sept.stat}\n`);
            stream.write(`morte: ${fichier.sept.morte}\n`);
            stream.write(`poser: ${fichier.sept.poser}\n`);
            stream.write(`}\n`);


            stream.write(`pv: ${fichier.pv}\n`);
            stream.write(`epv: ${fichier.epv}\n`);
            stream.end();
          });

                          const possagecarte1 = {
                  color: colors.info,
                  author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                  },
                  title: `Vous venez de posez la carte 1 !`,
                  description: `Stats :\nVie: ${fichier.un.vie}\n`,
                  timestamp: new Date(),
                  footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`
                  }
                }
                          message.channel.send({ embeds: [possagecarte1] })
          } else {
                                      const dejaposercarte1 = {
                  color: colors.error,
                  author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                  },
                  title: `Cette carte n'est pas utilisable !`,
                  description: `Testez avec une autre carte ?`,
                  timestamp: new Date(),
                  footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`
                  }
                }
                          message.channel.send({ embeds: [dejaposercarte1] })
          }
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



                      const creationcarte = {
          color: colors.info,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Info**`,
          description: `Nous vous avons crée toute les carte !\nRelancer la commande pour jouer !`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal`
          }
        }
                }
                      message.channel.send({ embeds: [creationcarte] })
                      
      
      var stream = fs.createWriteStream(`./data/game/game1/${message.author.id}.yml`);
      stream.once('open', function (fd) {
        stream.write(`un: {\n`);
        stream.write(`vie: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`morte: 0\n`);
        stream.write(`poser: 0\n`);
        stream.write(`}\n`);

        stream.write(`deux: {\n`);
        stream.write(`vie: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`morte: 0\n`);
        stream.write(`poser: 0\n`);
        stream.write(`}\n`);

        stream.write(`trois: {\n`);
        stream.write(`vie: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`morte: 0\n`);
        stream.write(`poser: 0\n`);
        stream.write(`}\n`);

        stream.write(`quatre: {\n`);
        stream.write(`vie: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`morte: 0\n`);
        stream.write(`poser: 0\n`);
        stream.write(`}\n`);

        stream.write(`cinq: {\n`);
        stream.write(`vie: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`morte: 0\n`);
        stream.write(`poser: 0\n`);
        stream.write(`}\n`);

        stream.write(`six: {\n`);
        stream.write(`vie: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`poser: 0\n`);
        stream.write(`poser: 0\n`);
        stream.write(`}\n`);

        stream.write(`sept: {\n`);
        stream.write(`vie: ${random(100, 9999)}\n`);
        stream.write(`stat: ${attackoudef()}\n`);
        stream.write(`morte: 0\n`);
        stream.write(`poser: 0\n`);
        stream.write(`}\n`);


        stream.write(`pv: 2000\n`);
        stream.write(`epv: 2000\n`);
        stream.end();
      });

    }



  })



} //fin commande
