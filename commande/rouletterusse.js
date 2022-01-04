exports.run = (client, message, args, colors) => {

  if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.reply('Je n\'ai pas le pouvoir de faire cette commande```diff\n+KICK_MEMBERS```').catch(console.error);
  let member = message.mentions.members.first();



  const arg = message.content.split(/\s+/g).slice(1);
  console.log(arg)
  if (arg[1] == 'help' || arg[1] == '' || arg == '') {

    message.delete()

    message.channel.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `Help !`,
        description: `Exemple: *rouletterusse 6(Combien de balle on peut mettre) 1(Le nombre de balle dans le pistolet) 1(la difficulté) @user\nAide sur la difficulté 1=Rien 2=kick(seulement les admin) 3=Ban(seulement les admin)`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }
    }).then(response => { response.delete(20 * 1000) });
  } else {

    if (!member) // si tu n'a désigné personne
    {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `! ?? !`,
          description: `Veuillez sélectionner une personne`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          }
        }
      }).then(response => { response.delete(3 * 1000) });



    } else {


      //score = combien de balle on peut mettre
      //chance = le nombre de balle
      roulette();
      function roulette() {
        if (arg[1] == arg[2]) {
          message.delete()

          message.channel.send({
            embed: {
              color: 3447003,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
              },
              title: `Erreur !`,
              description: `Vous ne pouver lancer cette partie car le nombre de chance de perdre est de 100%`,
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
              }
            }
          }).then(response => { response.delete(3 * 1000) });

        } else {
          if (!arg[1] || !arg[2]) {
            message.delete()
            message.channel.send({
              embed: {
                color: 3447003,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
                },
                title: `Erreur !`,
                description: `Il vous manque un des "composant" pour démarrer la partie`,
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL(),
                  text: `©ToniPortal`
                }
              }
            }).then(response => { response.delete(3 * 1000) });

          } else {
            if (!arg[3]) {

              arg[3] = 1

              roulette();

            } else {
              function gagneOuPas(score, chance) {
                return Math.random() * (score) < (chance)
              }

              message.channel.send({
                embed: {
                  color: 3447003,
                  author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                  },
                  title: `Roulette russe !`,
                  description: `${message.author.username} vous défie ;${member.user.username}\nAllez vous accepter ?\nTapez *oui pour accepter(vous avez 30 seconde)`,
                  timestamp: new Date(),
                  footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`
                  }
                }
              }).then(() => {
                message.channel.awaitMessages(response => response.content === '*oui', {
                  max: 1,
                  time: 30 * 1000,
                  errors: ['time'],
                })
                  .then((collected) => {
                    message.delete()

                    const sentence = gagneOuPas(arg[1], arg[2])
                    console.log(sentence)

                    if (sentence == true) {
                      message.channel.send({
                        embed: {
                          color: 3447003,
                          author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL()
                          },
                          title: `La sentense va vous être attribué : ${member.user.username}`,
                          description: `Vous avez **gagné**\nAucune sentense va vous être attribué`,
                          timestamp: new Date(),
                          footer: {
                            icon_url: client.user.avatarURL(),
                            text: `©ToniPortal`
                          }
                        }

                      })
                    } else if (sentence == false) {

                      message.channel.send({
                        embed: {
                          color: 3447003,
                          author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL()
                          },
                          title: `La sentense va vous être attribué : ${member.user.username}`,
                          description: `Vous avez perdue,auresement c'était sans gage`,
                          timestamp: new Date(),
                          footer: {
                            icon_url: client.user.avatarURL(),
                            text: `©ToniPortal`
                          }
                        }

                      })

                    }

                  })

              })

            }
          }
        }
      }
    }

  }

} //fin commande