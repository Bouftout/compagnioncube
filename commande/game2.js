exports.run = (client, message, args, colors) => {

  /*
  La commande sert a jouer contre une personne en "rpg"
  
  colors étant pour la couleur de l'embed
  args prend les mot en enlever la commande
  */

  const yaml = require('js-yaml');
  const fs = require('fs');





  jeu()


  function jeu() {

    function random(min, max) { //juste un random normal
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function gagneOuPas(score, chance) {
      return Math.random() * (score) < (chance)
    }



    //pour delete la partie

    if (args[0] == "delete") {



      fs.unlink(`./data/game/game2/${message.author.id}.yml`, function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted!');

        const deleteembed = {
          color: colors.ok,
          author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
          },
          title: `**Delete**`,
          description: `Vous avez bien delete votre fichier !`,
          timestamp: new Date(),
          footer: {
              icon_url: client.user.avatarURL(),
              text: `©ToniPortal`
          }
      }
  
      message.channel.send({ embeds: [deleteembed] })

      });

    } else {






      function heal() {

        let raandom = gagneOuPas(1, 12)
        console.log(raandom)

        if (raandom == true) {

          return 50

        }

        if (raandom == false) {

          return 200

        }

      }

      function healing() {

        var j1 = yaml.load(fs.readFileSync(`./data/game/game2/${message.author.id}.yml`, 'utf8'));


        let nbheal = heal()

        var findeheal = j1.vie + nbheal


        var stream = fs.createWriteStream(`./data/game/game2/${message.author.id}.yml`);
        stream.once('open', function (fd) {
          stream.write(`vie: ${findeheal}\n`);
          stream.write(`armure: ${j1.armure}\n`);
          stream.write(`atk: ${j1.atk}\n`);
          stream.end();
        })

        if (nbheal == "50") {



          const petithealembed = {
            color: colors.ok,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: `**Information**`,
            description: `Vous vous êtes heal **${nbheal}**_PV_\nVous avez maintenant **${findeheal}**_PV_`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
            }
        }
    
        message.channel.send({ embeds: [petithealembed] })

        }

        if (nbheal == "200") {

          const groshealembed = {
            color: colors.ok,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: `**Information**`,
            description: `Vous vous êtes heal **${nbheal}**_PV_\nVous avez maintenant **${findeheal}**_PV_\nHeal Critique`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
            }
        }
    
        message.channel.send({ embeds: [groshealembed] })

        }


      }


      function attaque() {

        var j1 = yaml.load(fs.readFileSync(`./data/game/game2/${message.author.id}.yml`, 'utf8'));


        let raandom = gagneOuPas(1, 6) // 1 chance sur 6
        console.log(raandom)

        if (raandom == true) {

          return 20 + j1.atk

        }

        if (raandom == false) {

          return 100 + j1.atk

        }

      }

      function atk() {
        let member = message.mentions.members.first();

        if (!member) {



          const memberembed = {
            color: colors.ok,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: `**Information**`,
            description: `Veuillez mettre une mention !`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
            }
        }
    
        message.channel.send({ embeds: [memberembed] })

        } else {

          var j2 = yaml.load(fs.readFileSync(`./data/game/game2/${member.user.id}.yml`, 'utf8')); //le membre mentionner
          var j1 = yaml.load(fs.readFileSync(`./data/game/game2/${message.author.id}.yml`, 'utf8'));


          let atk = attaque()

          if ((j2.vie - atk) <= 0) {

            const vainqueurembed = {
              color: colors.ok,
              author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
              },
              title: `**Information**`,
              description: `${message.author.username} est vainqueur,plantant Deuilgivre dans le corps de ${member.user.username}, il lui reste encore ${j1.vie} points de vie alors que ${member.user.username} est mort(${j2.vie - atk})`,
              timestamp: new Date(),
              footer: {
                  icon_url: client.user.avatarURL(),
                  text: `©ToniPortal`
              }
          }
      
          message.channel.send({ embeds: [vainqueurembed] })

          } else {

            let arp = parseInt((j2.armure / 2)) //(le diviser est pour rendre l'armure moins cheat)
            let atkr = atk - arp // atk - ar(armure de la personne)
            let vierestante = j2.vie - atkr

            var stream = fs.createWriteStream(`./data/game/game2/${member.user.id}.yml`);
            stream.once('open', function (fd) {
              stream.write(`vie: ${vierestante}\n`);
              stream.write(`armure: ${j2.armure}\n`);
              stream.write(`atk: ${j2.atk}\n`);
              stream.end();
            })

            const perduevieembed = {
              color: colors.ok,
              author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
              },
              title: `**Information**`,
              description: `${member.user.username} a perdue **${atkr}** de pv(${arp}Arp)\nIl lui reste donc: **${vierestante}** pv`,
              timestamp: new Date(),
              footer: {
                  icon_url: client.user.avatarURL(),
                  text: `©ToniPortal`
              }
          }
      
          message.channel.send({ embeds: [perduevieembed] })

          }

        } //member

      }

      function armure() {
        var j1 = yaml.load(fs.readFileSync(`./data/game/game2/${message.author.id}.yml`, 'utf8'));


        var stream = fs.createWriteStream(`./data/game/game2/${message.author.id}.yml`);
        stream.once('open', function (fd) {
          stream.write(`vie: ${j1.vie}\n`);
          stream.write(`armure: ${j1.armure + parseInt(2)}\n`);
          stream.write(`atk: ${j1.atk}\n`);
          stream.end();
        })

      }





      function choisi() {
        const choix = {
          color: colors.ok,
          author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
          },
          title: `Vous avez le choix :`,
          description: "!atk\n!armure\n!rien\n!heal",
          timestamp: new Date(),
          footer: {
              icon_url: client.user.avatarURL(),
              text: `©ToniPortal`
          }
      }
  
      message.channel.send({ embeds: [choix] })
          .then(() => {
            message.channel.awaitMessages(response => response.content === '!atk', {
              max: 1,
              time: 30000,
              errors: ['time'],
            })
              .then((collected) => {

                atk()
                choisi()

              }).catch(() => {
                console.log("Fin await")
              });

            message.channel.awaitMessages(response => response.content === '!armure', {
              max: 1,
              time: 30000,
              errors: ['time'],
            })
              .then((collected) => {

                armure()
                choisi()

              }).catch(() => {
                console.log("Fin await")
              });

            message.channel.awaitMessages(response => response.content === '!rien', {
              max: 1,
              time: 30000,
              errors: ['time'],
            })
              .then((collected) => {

                const arettecombatembed = {
                  color: colors.ok,
                  author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL()
                  },
                  title: `Vous vous arrêter de combattre:`,
                  description: "Bonne continuation !",
                  timestamp: new Date(),
                  footer: {
                      icon_url: client.user.avatarURL(),
                      text: `©ToniPortal`
                  }
              }
          
              message.channel.send({ embeds: [arettecombatembed] })


              }).catch(() => {
                console.log("Fin await")
              });

            message.channel.awaitMessages(response => response.content === '!heal', {
              max: 1,
              time: 30000,
              errors: ['time'],
            })
              .then((collected) => {

                healing()
                choisi()

              }).catch(() => {
                console.log("Fin await")
              });

          });




      } //fin function choisi


      function aprèsmention() {




        if (args[0] == "atk") {


          atk()

        }
        if (args[0] == "defense" || args[0] == "def" || args[0] == "armure") {

          armure()

        }
        if (args[0] == "" || !args[0] || args[0] == " " || args[0] == "choisi" || args[0] == "choix" || args[0] == "c") {

          choisi()

        }

        if (args[0] == "heal") {

          healing()

        }





      }

        fs.exists(`./data/game/game2/${message.author.id}.yml`, function (exists) {

          if (exists) {

            if (args[0] == "heal" || args[0] == "armure" || args[0] == "defense" || args[0] == "def") {

              aprèsmention()

            } else {
              let member = message.mentions.members.first();

              if (!member) {

                const mentionembed = {
                  color: colors.error,
                  author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL()
                  },
                  title: `**Information**`,
                  description: `Veuillez mettre une mention !`,
                  timestamp: new Date(),
                  footer: {
                      icon_url: client.user.avatarURL(),
                      text: `©ToniPortal`
                  }
              }
          
              message.channel.send({ embeds: [mentionembed] })


              } else {
                fs.exists(`./data/game/game2/${member.user.id}.yml`, function (exists) {

                  if (exists) {
                    aprèsmention()

                  } else {

                    const cmdj2nessary = {
                      color: colors.ok,
                      author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL()
                      },
                      title: `**Information**`,
                      description: `il faut que l'autre joueurs mette ces caractéristique en fesant la commande\n*game2 c _vie_ _armure_ _attaque_`,
                      timestamp: new Date(),
                      footer: {
                          icon_url: client.user.avatarURL(),
                          text: `©ToniPortal`
                      }
                  }
              
                  message.channel.send({ embeds: [cmdj2nessary] })

                  }

                })


              }

            }

          } else {

            //args[1] = vie
            //args[2] = armure
            //args[3] = attaque

            if (!args[0]) {

              var stream = fs.createWriteStream(`./data/game/game2/${message.author.id}.yml`);
              stream.once('open', function (fd) {
                stream.write(`vie: 1998\n`);
                stream.write(`armure: 1\n`);
                stream.write(`atk: 1\n`);
                stream.end();
              })

              const creefichierembed = {
                color: colors.info,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                title: `**Information**`,
                description: `J'ai crée un fichier avec les donnée de base vu que vous n'avez pas donnée\nSi vous voulez des aide sur cette commande faite *game2 help\nSi vous voulez delete votre fichier faite *game2 delete`,
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`
                }
            }
        
            message.channel.send({ embeds: [creefichierembed] })

            } else {
              if (args[0] == "c") {

                let pointmax = 2000

                if (!args[1] || !args[2] || !args[1] && !args[2] || !args[3] || !args[1] && !args[2] && !args[3]) {

                  const helpoinfoembed = {
                    color: colors.ok,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL()
                    },
                    title: `**Information**`,
                    description: `Veuillez mettre les info après(vous ne pouvez pas dépasser ${pointmax} en tout)\n1er = Vie\n2ième = Armure\n3ième = Attaque`,
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: `©ToniPortal`
                    }
                }
            
                message.channel.send({ embeds: [helpoinfoembed] })

                } else {
                  let pointviear = Number(args[1]) + Number(args[2]) + Number(args[3])

                  if (pointviear < pointmax) {

                    const restepointembed = {
                      color: colors.ok,
                      author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL()
                      },
                      title: `**Information**`,
                      description: `Il vous reste encore ${pointmax - pointviear}\nRefait la commande !`,
                      timestamp: new Date(),
                      footer: {
                          icon_url: client.user.avatarURL(),
                          text: `©ToniPortal`
                      }
                  }
              
                  message.channel.send({ embeds: [restepointembed] })

                  } else {
                    if (pointviear > pointmax || 0 > Number(args[1]) || 0 > Number(args[2])) {

                      const pointmaxembed = {
                        color: colors.ok,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL()
                        },
                        title: `**Information**`,
                        description: `Vous ne pouvez pas dépaser ${pointmax}`,
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: `©ToniPortal`
                        }
                    }
                
                    message.channel.send({ embeds: [pointmaxembed] })

                    } else {
                      if (args[1] <= 0) {

                        const vietropbasseembed = {
                          color: colors.ok,
                          author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL()
                          },
                          title: `**Information**`,
                          description: `Vous ne pouvez pas mettre en dessous ou égal a 0 pour la vie`,
                          timestamp: new Date(),
                          footer: {
                              icon_url: client.user.avatarURL(),
                              text: `©ToniPortal`
                          }
                      }
                  
                      message.channel.send({ embeds: [vietropbasseembed] })

                      } else {

                        if (args[2] > 59) {
                          const armurecheatembed = {
                            color: colors.ok,
                            author: {
                                name: client.user.username,
                                icon_url: client.user.avatarURL()
                            },
                            title: `**Information**`,
                            description: `Vous ne pouvez pas mettre au dessue de 50 pour l'armure(Trop cheaté sinon)`,
                            timestamp: new Date(),
                            footer: {
                                icon_url: client.user.avatarURL(),
                                text: `©ToniPortal`
                            }
                        }
                    
                        message.channel.send({ embeds: [armurecheatembed] })

                        } else {
                          var stream = fs.createWriteStream(`./data/game/game2/${message.author.id}.yml`); //pour la personne qui donne
                          stream.once('open', function (fd) {
                            stream.write(`vie: ${args[1]}\n`);
                            stream.write(`armure: ${args[2]}\n`);
                            stream.write(`atk: ${args[3]}\n`);
                            stream.end();
                          })


                          const infoembed = {
                            color: colors.ok,
                            author: {
                                name: client.user.username,
                                icon_url: client.user.avatarURL()
                            },
                            title: `**Information**`,
                            description: `Votre vie et votre armure a bien était enregistrer\nVie= ${args[1]}\nArmure= ${args[2]}\nAttaque= ${args[3]}\nVeuillez dire au 2ième joueurs de faire la fiche !`,
                            timestamp: new Date(),
                            footer: {
                                icon_url: client.user.avatarURL(),
                                text: `©ToniPortal`
                            }
                        }
                    
                        message.channel.send({ embeds: [infoembed] })
                        }
                      }
                    }

                  }
                }


              }
            }
          }
        })
    } //else delete
  } //fin function jeu


}; //Fin commande


exports.help = {
  usage: `c <Vie> <Armure> <Attaque>\n*game2 <mention>`,
  description: `La première ligne sert quand vous fête la 1ière commande,et la 2ième ligne et quand vous avez tout les 2 fait la commande !\nEn tout la vie+l'amure+l'attaque doit en tout faire 2000 point(L'amure doit pas être de 59 ou +)`
};