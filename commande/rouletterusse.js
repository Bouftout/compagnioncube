exports.run = (client, message, args, colors) => {


  let nvdeballemax = 6;

    //score = combien de balle on peut mettre
    //chance = le nombre de balle
    roulette();

    function roulette() {
      if (args[0] == nvdeballemax) {
        message.delete()

        const perdre100 = {
          color: colors.ok,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: `**Error !**`,
          description: `Vous ne pouver lancer cette partie car le nombre de chance de perdre est de 100%`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          }
        }

        message.channel.send({ embeds: [perdre100] })

      } else {

        if (!args[0]) {

          message.delete()
          const errorcomposantmanquant = {
            color: colors.error,
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
  
          message.channel.send({ embeds: [errorcomposantmanquant] })

        } else {

          if (!args[1]) {

            args[1] = 1

            roulette();

          } else {

            function gagneOuPas(score, chance) {
              return Math.random() * (score) < (chance)
            }


            const rouletterusseembed = {
              color: colors.ok,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
              },
              title: `Roulette russe !`,
              description: `${message.author.username} lance une roulette !`,
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
              }
            }

            message.channel.send({ embeds: [rouletterusseembed] })

            setTimeout(function() { 

                  message.delete()

                  const sentence = gagneOuPas(args[0], nvdeballemax)

                  console.log(sentence)

                  if (sentence == true) {

                    const gg = {
                      color: colors.ok,
                      author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL()
                      },
                      title: `La sentense va vous être attribué : ${message.author.username}`,
                      description: `Vous avez **gagné**\nAucune sentense va vous être attribué`,
                      timestamp: new Date(),
                      footer: {
                        icon_url: client.user.avatarURL(),
                        text: `©ToniPortal`
                      }
                    }

                    message.channel.send({ embeds: [gg] })

                  } else if (sentence == false) {
                    const perdu = {
                      color: colors.ok,
                      author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL()
                      },
                      title: `La sentense va vous être attribué : ${message.author.username}`,
                      description: `Vous avez perdue,auresement c'était sans gage`,
                      timestamp: new Date(),
                      footer: {
                        icon_url: client.user.avatarURL(),
                        text: `©ToniPortal`
                      }
                    }

                    message.channel.send({ embeds: [perdu] })

                  }

                }, 500);

          }
        }
      }
    }
  



} //fin commande

exports.help = {
  usage: `<nombre de balle dans le revolver> <difficulté>`,
  description: `Une bonne petite roulette russe\nAide sur la difficulté 1=Rien 2=kick(seulement les admin) 3=Ban(seulement les admin)`
};

