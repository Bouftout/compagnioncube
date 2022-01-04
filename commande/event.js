exports.run = (client, message, args) => {

  if (message.author.bot) return;
  const yaml = require('js-yaml');
  const fs = require('fs');



  const arg = message.content.split(' ');


  console.log(arg[1])


  const nombremax = "1" // je parle du nombre d'event

  function getrandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const randomchiffre = getrandom(1, nombremax)


  var prix = yaml.safeLoad(fs.readFileSync(`./data/prix.yml`, 'utf8'));




  fs.exists(`./data/membre/${message.author.id}.yml`, function (exists) {

    if (exists) {
      var fichier = yaml.safeLoad(fs.readFileSync(`./data/membre/${message.author.id}.yml`, 'utf8'));
      const enleve = parseInt(getrandom(fichier.money / 4, 5, fichier.money / 3));


      function lehelp() {

        message.channel.send({
          embed: {
            color: 0x778899,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            title: `**Help**`,
            description: `Quand vous faite _*event al_ un évenement aléatoire s'enclenche(d'après ce que vous avez acheter).`,

            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL(),
              text: `©ToniPortal#6697`
            }
          }
        })

      }





      if (arg[1] == " " || !arg[1] || arg[1] == "help") {

        lehelp()

      }

      if (arg[1] == "al") {
        if (fichier.money < "20") {
          message.channel.send({
            embed: {
              color: 0x778899,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
              },
              title: `**Event**`,
              description: `Vous ne pouvez pas faire d'event vous n'avez pas assez d'argent pour "jouer" !!`,
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal#6697`
              }
            }
          })
        } else {
          if (randomchiffre == "1") {


            if (fichier.maison.maison == "1") {

              if (fichier.turret.turret == "1") {


                const random1 = getrandom(1, 4)

                if (random1 == "1") {

                  if (fichier.turret.nombreturret == "1") {
                    message.channel.send({
                      embed: {
                        color: 0x778899,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL()
                        },
                        title: `**Event Maison**`,
                        description: `Un cambrioleur voulais vous volez mais votre tourelle a elle seul n'a pas suffit a l'arreter,de plus elle a était détruite\n**Solde ${parseInt(fichier.money) - parseInt(prix.turret + enleve)} **`,
                        timestamp: new Date(),
                        footer: {
                          icon_url: client.user.avatarURL(),
                          text: `©ToniPortal#6697`
                        }
                      }
                    })

                    var stream1 = fs.createWriteStream(`./data/membre/${message.author.id}.yml`);
                    stream1.once('open', function (fd) {
                      stream.write(`name: ${message.author.username}\n`);
                      stream1.write(`money: ${parseInt(fichier.money) - parseInt(prix.turret + enleve)}\n`);
                      stream.write(`maison: {\n`);
                      stream.write(`maison: ${fichier.maison.maison},\n`);
                      stream.write(`porteenbois: ${fichier.maison.porteenbois},\n`);
                      stream.write(`clé: ${fichier.maison.clé},\n`);
                      stream.write(`code: ${fichier.maison.code},\n`);
                      stream.write(`lit: ${fichier.maison.lit}\n`);
                      stream.write(`}\n`);
                      stream1.write(`turret: {\n`);
                      stream1.write(`turret: ${fichier.turret.turret},\n`);
                      stream1.write(`nombreturret: ${fichier.turret.nombreturret}\n`);
                      stream1.write(`}\n`);
                      stream1.end();
                    });




                  } else {


                    if (fichier.turret.nombreturret > "1") {
                      if (fichier.turret.nombreturret >= "10") {

                        message.channel.send({
                          embed: {
                            color: 0x778899,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL()
                            },
                            title: `**Event Maison**`,
                            description: `Un cambrioleur voulais vous **volez** mais vos tourelle se sont **entretué** mais par chance elle on **tué** le cambrioleur.`,
                            timestamp: new Date(),
                            footer: {
                              icon_url: client.user.avatarURL(),
                              text: `©ToniPortal#6697`
                            }
                          }
                        })


                        var stream = fs.createWriteStream(`./data/membre/${message.author.id}.yml`);
                        stream.once('open', function (fd) {
                          stream.write(`name: ${message.author.username}\n`);
                          stream.write(`money: ${fichier.money}\n`);
                          stream.write(`maison: {\n`);
                          stream.write(`maison: ${fichier.maison.maison},\n`);
                          stream.write(`porteenbois: ${fichier.maison.porteenbois},\n`);
                          stream.write(`clé: ${fichier.maison.clé},\n`);
                          stream.write(`code: ${fichier.maison.code},\n`);
                          stream.write(`lit: ${fichier.maison.lit}\n`);
                          stream.write(`}\n`);
                          stream.write(`turret: {\n`);
                          stream.write(`turret: 0,\n`);
                          stream.write(`nombreturret: 0\n`);
                          stream.write(`}\n`);
                          stream.end();
                        });

                      } else {
                        message.channel.send({
                          embed: {
                            color: 0x778899,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL()
                            },
                            title: `**Event Maison**`,
                            description: `Un cambrioleur voulais vous volez mais votre tourelle l'a tué ; mais il en a une qui s'est cassé`,
                            timestamp: new Date(),
                            footer: {
                              icon_url: client.user.avatarURL(),
                              text: `©ToniPortal#6697`
                            }
                          }
                        })


                        var stream = fs.createWriteStream(`./data/membre/${message.author.id}.yml`);
                        stream.once('open', function (fd) {
                          stream.write(`name: ${message.author.username}\n`);
                          stream.write(`money: ${fichier.money}\n`);
                          stream.write(`maison: {\n`);
                          stream.write(`maison: ${fichier.maison.maison},\n`);
                          stream.write(`porteenbois: ${fichier.maison.porteenbois},\n`);
                          stream.write(`clé: ${fichier.maison.clé},\n`);
                          stream.write(`code: ${fichier.maison.code},\n`);
                          stream.write(`lit: ${fichier.maison.lit}\n`);
                          stream.write(`}\n`);
                          stream.write(`turret: {\n`);
                          stream.write(`turret: ${fichier.turret.turret},\n`);
                          stream.write(`nombreturret: ${fichier.turret.nombreturret - 1}\n`);
                          stream.write(`}\n`);
                          stream.end();
                        });

                      }
                    }
                  }

                }

                if (random1 == "2") {


                  var assuranceoupasmaison = getrandom(1, 2);

                  if (assuranceoupasmaison == 1) { // a acheté une assurance

                    message.channel.send({
                      embed: {
                        color: 0x778899,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL()
                        },
                        title: `**Event Maison**`,
                        description: `Votre maison brûle intégralement dans les flamme de l'enfer et avec tout ce que il y a l'intérieur\nMais auresement vous avez acheté une assurance unique avec vous,elle vous donne en argent sur votre ` +
                          `compte,tout ce que vous avez perdu\nVous vous retrouver donc avec: ${parseInt(fichier.money) + parseInt(prix.maison) + parseInt(prix.porteenbois) + parseInt(prix.clé) + parseInt(prix.code) + parseInt(prix.lit)}`,
                        timestamp: new Date(),
                        footer: {
                          icon_url: client.user.avatarURL(),
                          text: `©ToniPortal#6697`
                        }
                      }
                    })


                    var stream = fs.createWriteStream(`./data/membre/${message.author.id}.yml`);
                    stream.once('open', function (fd) {
                      stream.write(`name: ${message.author.username}\n`);
                      stream.write(`money: ${parseInt(fichier.money) + parseInt(prix.maison) + parseInt(prix.porteenbois) + parseInt(prix.clé) + parseInt(prix.code) + parseInt(prix.lit)}\n`);
                      stream.write(`maison: {\n`);
                      stream.write(`maison: 0,\n`);
                      stream.write(`porteenbois: 0,\n`);
                      stream.write(`clé: 0,\n`);
                      stream.write(`code: 0,\n`);
                      stream.write(`lit: 0\n`);
                      stream.write(`}\n`);
                      stream.write(`turret: {\n`);
                      stream.write(`turret: 0,\n`);
                      stream.write(`nombreturret: 0\n`);
                      stream.write(`}\n`);
                      stream.end();
                    });

                  }
                  if (assuranceoupasmaison == 2) { // pas achheté d'assurance


                    message.channel.send({
                      embed: {
                        color: 0x778899,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL()
                        },
                        title: `**Event Maison**`,
                        description: `Votre maison brûle intégralement dans les flamme de l'enfer et avec tout ce que il y a l'intérieur`,
                        timestamp: new Date(),
                        footer: {
                          icon_url: client.user.avatarURL(),
                          text: `©ToniPortal#6697`
                        }
                      }
                    })


                    var stream = fs.createWriteStream(`./data/membre/${message.author.id}.yml`);
                    stream.once('open', function (fd) {
                      stream.write(`name: ${message.author.username}\n`);
                      stream.write(`money: ${fichier.money}\n`);
                      stream.write(`maison: {\n`);
                      stream.write(`maison: 0,\n`);
                      stream.write(`porteenbois: 0,\n`);
                      stream.write(`clé: 0,\n`);
                      stream.write(`code: 0,\n`);
                      stream.write(`lit: 0\n`);
                      stream.write(`}\n`);
                      stream.write(`turret: {\n`);
                      stream.write(`turret: 0,\n`);
                      stream.write(`nombreturret: 0\n`);
                      stream.write(`}\n`);
                      stream.end();
                    });

                  }





                }


                if (random1 == "3") {

                  if (fichier.maison.porteenbois == 0) {
                    message.channel.send({
                      embed: {
                        color: 0x778899,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL()
                        },
                        title: `**Event Maison**`,
                        description: `Vous rentrez dans votre maison et trouvez une porte par terre,vous décider de l'installer dans votre maison.`,
                        timestamp: new Date(),
                        footer: {
                          icon_url: client.user.avatarURL(),
                          text: `©ToniPortal#6697`
                        }
                      }
                    })


                    var stream = fs.createWriteStream(`./data/membre/${message.author.id}.yml`);
                    stream.once('open', function (fd) {
                      stream.write(`name: ${message.author.username}\n`);
                      stream.write(`money: ${fichier.money}\n`);
                      stream.write(`maison: {\n`);
                      stream.write(`maison: ${fichier.maison.maison},\n`);
                      stream.write(`porteenbois: 1,\n`);
                      stream.write(`clé: ${fichier.maison.clé},\n`);
                      stream.write(`code: ${fichier.maison.code},\n`);
                      stream.write(`lit: ${fichier.maison.lit}\n`);
                      stream.write(`}\n`);
                      stream.write(`turret: {\n`);
                      stream.write(`turret: ${fichier.turret.turret},\n`);
                      stream.write(`nombreturret: ${fichier.turret.nombreturret}\n`);
                      stream.write(`}\n`);
                      stream.end();
                    });

                  } else {

                    message.channel.send({
                      embed: {
                        color: 0x778899,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL()
                        },
                        title: `**Event Maison**`,
                        description: `Vous rentrez dans votre maison et ouvrez votre porte,mais elle se casse.`,
                        timestamp: new Date(),
                        footer: {
                          icon_url: client.user.avatarURL(),
                          text: `©ToniPortal#6697`
                        }
                      }
                    })

                    var stream = fs.createWriteStream(`./data/membre/${message.author.id}.yml`);
                    stream.once('open', function (fd) {
                      stream.write(`name: ${message.author.username}\n`);
                      stream.write(`money: ${fichier.money}\n`);
                      stream.write(`maison: {\n`);
                      stream.write(`maison: ${fichier.maison.maison},\n`);
                      stream.write(`porteenbois: 0,\n`);
                      stream.write(`clé: ${fichier.maison.clé},\n`);
                      stream.write(`code: ${fichier.maison.code},\n`);
                      stream.write(`lit: ${fichier.maison.lit}\n`);
                      stream.write(`}\n`);
                      stream.write(`turret: {\n`);
                      stream.write(`turret: ${fichier.turret.turret},\n`);
                      stream.write(`nombreturret: ${fichier.turret.nombreturret}\n`);
                      stream.write(`}\n`);
                      stream.end();
                    });

                  }


                }

                if (random1 == "4") {

                  randomargentlaissé = getrandom(10, 50);

                  message.channel.send({
                    embed: {
                      color: 0x778899,
                      author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL()
                      },
                      title: `**Event Maison**`,
                      description: `Vous rentrez dans votre maison et trouvez un tout petit peu d'argent par terre (${parseInt(randomargentlaissé)}$)`,
                      timestamp: new Date(),
                      footer: {
                        icon_url: client.user.avatarURL(),
                        text: `©ToniPortal#6697`
                      }
                    }
                  })


                  var stream = fs.createWriteStream(`./data/membre/${message.author.id}.yml`);
                  stream.once('open', function (fd) {
                    stream.write(`name: ${message.author.username}\n`);
                    stream.write(`money: ${fichier.money}\n`);
                    stream.write(`maison: {\n`);
                    stream.write(`maison: ${fichier.maison.maison},\n`);
                    stream.write(`porteenbois: 1,\n`);
                    stream.write(`clé: ${fichier.maison.clé},\n`);
                    stream.write(`code: ${fichier.maison.code},\n`);
                    stream.write(`lit: ${fichier.maison.lit}\n`);
                    stream.write(`}\n`);
                    stream.write(`turret: {\n`);
                    stream.write(`turret: ${fichier.turret.turret},\n`);
                    stream.write(`nombreturret: ${fichier.turret.nombreturret}\n`);
                    stream.write(`}\n`);
                    stream.end();
                  });




                }







              } else {


                message.channel.send({
                  embed: {
                    color: 0x778899,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL()
                    },
                    title: `**Event Maison**`,
                    description: `Un cambrioleur est venue chez vous et vous a tout volé`,
                    timestamp: new Date(),
                    footer: {
                      icon_url: client.user.avatarURL(),
                      text: `©ToniPortal#6697`
                    }
                  }
                })

                var stream = fs.createWriteStream(`./data/membre/${message.author.id}.yml`);
                stream.once('open', function (fd) {
                  stream.write(`name: ${message.author.username}\n`);
                  stream.write(`money: 0\n`);
                  stream.write(`maison: {\n`);
                  stream.write(`maison: ${fichier.maison.maison},\n`);
                  stream.write(`porteenbois: ${fichier.maison.porteenbois},\n`);
                  stream.write(`clé: ${fichier.maison.clé},\n`);
                  stream.write(`code: ${fichier.maison.code},\n`);
                  stream.write(`lit: ${fichier.maison.lit}\n`);
                  stream.write(`}\n`);
                  stream.write(`turret: {\n`);
                  stream.write(`turret: ${fichier.turret.turret},\n`);
                  stream.write(`nombreturret: ${fichier.turret.nombreturret}\n`);
                  stream.write(`}\n`);
                  stream.end();
                });


              }

            } else {

              const random2 = getrandom(1, 7)
              if (random2 == "1") {
                message.channel.send({
                  embed: {
                    color: 0x778899,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL()
                    },
                    title: `**Event Sdf**`,
                    description: `Vous n'avez pas de maison,vous êtes sdf pendant que vous dormez une personne vous vole de l'argent\nIl vous a volé:** ${parseInt(fichier.money) - parseInt(getrandom(10, 50))}**`,
                    timestamp: new Date(),
                    footer: {
                      icon_url: client.user.avatarURL(),
                      text: `©ToniPortal#6697`
                    }
                  }
                })

                var stream = fs.createWriteStream(`./data/membre/${message.author.id}.yml`);
                stream.once('open', function (fd) {
                  stream.write(`name: ${message.author.username}\n`);
                  stream.write(`money: ${parseInt(fichier.money) - parseInt(getrandom(10, 50))}\n`);
                  stream.write(`maison: {\n`);
                  stream.write(`maison: ${fichier.maison.maison},\n`);
                  stream.write(`porteenbois: ${fichier.maison.porteenbois},\n`);
                  stream.write(`clé: ${fichier.maison.clé},\n`);
                  stream.write(`code: ${fichier.maison.code},\n`);
                  stream.write(`lit: ${fichier.maison.lit}\n`);
                  stream.write(`}\n`);
                  stream.write(`turret: {\n`);
                  stream.write(`turret: ${fichier.turret.turret},\n`);
                  stream.write(`nombreturret: ${fichier.turret.nombreturret}\n`);
                  stream.write(`}\n`);
                  stream.end();
                });

              }
              if (random2 == "2" || random2 == "3" || random2 == "4" || random2 == "5" || random2 == "6") {

                var randommaison = getrandom(1, 20)

                message.channel.send({
                  embed: {
                    color: 0x778899,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL()
                    },
                    title: `**Event Sdf**`,
                    description: `Vous n'avez pas de maison,vous êtes sdf pendant que vous dormez une personne vous donne ${randommaison}$\nVotre solde:** ${parseInt(fichier.money) + parseInt(randommaison)}**`,
                    timestamp: new Date(),
                    footer: {
                      icon_url: client.user.avatarURL(),
                      text: `©ToniPortal#6697`
                    }
                  }
                })

                var stream = fs.createWriteStream(`./data/membre/${message.author.id}.yml`);
                stream.once('open', function (fd) {
                  stream.write(`name: ${message.author.username}\n`);
                  stream.write(`money: ${parseInt(fichier.money) + parseInt(randommaison)}\n`);
                  stream.write(`maison: {\n`);
                  stream.write(`maison: ${fichier.maison.maison},\n`);
                  stream.write(`porteenbois: ${fichier.maison.porteenbois},\n`);
                  stream.write(`clé: ${fichier.maison.clé},\n`);
                  stream.write(`code: ${fichier.maison.code},\n`);
                  stream.write(`lit: ${fichier.maison.lit}\n`);
                  stream.write(`}\n`);
                  stream.write(`turret: {\n`);
                  stream.write(`turret: ${fichier.turret.turret},\n`);
                  stream.write(`nombreturret: ${fichier.turret.nombreturret}\n`);
                  stream.write(`}\n`);
                  stream.end();
                });


              }


            }





          }
        }
      }




    } else {
      var stream = fs.createWriteStream(`./data/membre/${message.author.id}.yml`);
      stream.once('open', function (fd) {
        stream.write(`name: ${message.author.username}\n`);
        stream.write(`money: 20\n`);
        stream.write(`objet: {\n`);
        stream.write(`tirelire: 0\n`);
        stream.write(`}\n`);
        stream.write(`maison: {\n`);
        stream.write(`maison: 0,\n`);
        stream.write(`porteenbois: 0,\n`);
        stream.write(`clé: 0,\n`);
        stream.write(`code: 0,\n`);
        stream.write(`lit: 0\n`);
        stream.write(`}\n`);
        stream.write(`turret: {\n`);
        stream.write(`turret: 0,\n`);
        stream.write(`nombreturret: 0\n`);
        stream.write(`}\n`);
        stream.end();
      });

      message.channel.send({
        embed: {
          color: 0x970cd2,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `**Info**`,
          description: `Nous vous avons crée un compte avec 20 de money de départ`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal#6697`
          }
        }
      })

    }



  })





};