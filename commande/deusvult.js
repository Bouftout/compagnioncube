exports.run = async (client, message, args, colors) => {

  //How create collector :
  function createCollector(searchmsg, stopmsg, time) {
    let filter = m => m.content.includes(searchmsg);

    let collector = message.channel.createMessageCollector({ filter, time: time * 1000 });
    collector.on('end', collected => {
      if (collected.size == 0) {
        message.channel.send({
          embeds: [{
            color: colors.info,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            title: `Aucun PEGU n'a fait ce que il demander !`,
            description: stopmsg,
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL(),
              text: colors.author
            }
          }]
        })
      }

    });

    return collector;
  }




  message.channel.send({
    embeds: [{
      color: colors.defaut,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `DEUSVULT`,
      description: "**DEUSVULT**",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: colors.author
      }
    }]
  })




  function createAll(searchmsg, stopmsg, time, aftermsg) {
    return new Promise(resolve => {

      let col = createCollector(searchmsg, stopmsg, time)

      col.on('collect', m => {
        message.channel.send({
          embeds: [{
            color: colors.defaut,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            title: `${m.content}`,
            description: aftermsg,
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL(),
              text: colors.author
            }
          }]
        });
        resolve()
      })

    })
  }


  // 1er le message que je vais demander pour collecte ; 2 c'est quand il a personne qui le fait ; 3 c'est le temps
  // 4 c'est le msg que on va envoyer si on le reçois bien !
  createAll("DEUSVULT", "Pas de pegu...\nRestons neutre,mais pas trop on va juste les attaquez discretement !", 20, "*ATTAQUONS JERUSALEM*").then(() => {

    createAll("ATTAQUONS JERUSALEM", "Pas de Jerusalem pour maintenant...\nNous les attaquerons demain", 15, "*OUEH*\n PRENEZ TOUS").then(() => {

      createAll("OUEH", "On n'a rien trouver...", 15, "Toi tu aura rien tu *sais* ?").then(() => {

        createAll("sais", "On n'a rien trouver...", 15, "- *CHEF* ON A FINI DE TOUT PRENDRE\n- ENFIN, bande de bras cassée... Bon moi je vais m'amuser,allez a plus p'tiot").then(() => {

          createAll("CHEF", "PANIC PANIC", 15, "- CHEF CHEF\n- TG ENCU*** - MAIS CHEF - J'AI DIT NON\n - ON SE FAIT *ATTAQUER*\n- BEN ON VA *ATTAQUER* NOUS AUSSI HOP HOP").then(() => {

            createAll("ATTAQUER", "On a perdu... FF15", 15, "- INCREDIBILIS\n- ON A WIN BRAVO").then(() => {

            })

          })

        })
      })
    })
  })







  //   .then(() => {
  //     message.channel.awaitMessages(response => response.content === 'DEUSVULT', {
  //       max: 1,
  //       time: 30000,
  //       errors: ['time'],
  //     })
  //       .then((collected) => {
  //         console.log("colleter")
  //         message.channel.send({
  //           embeds: [{
  //             color: colors.defaut,
  //             author: {
  //               name: client.user.username,
  //               icon_url: client.user.avatarURL()
  //             },
  //             title: `Réponse:`,
  //             description: "**ATTAQUONS JERUSALEM**",
  //             timestamp: new Date(),
  //             footer: {
  //               icon_url: client.user.avatarURL(),
  //               text: `©ToniPortal`
  //             }
  //           }]
  //         })
  //           .then(() => {
  //             message.channel.awaitMessages(response => response.content === "ATTAQUONS JERUSALEM", {
  //               max: 1,
  //               time: 30000,
  //               errors: ['time'],
  //             })
  //               .then((collected) => {
  //                 message.channel.send({
  //                   embed: {
  //                     color: 3447003,
  //                     author: {
  //                       name: client.user.username,
  //                       icon_url: client.user.avatarURL()
  //                     },
  //                     title: `Réponse:`,
  //                     description: `**OUEH*,PRENEZ LES PUTE ET LES ENFANT ON LES EMBARQUE***`,
  //                     timestamp: new Date(),
  //                     footer: {
  //                       icon_url: client.user.avatarURL(),
  //                       text: `©ToniPortal`
  //                     }
  //                   }
  //                 }).then(() => {
  //                   message.channel.awaitMessages(response => response.content === 'OUEH', {
  //                     max: 1,
  //                     time: 30000,
  //                     errors: ['time'],
  //                   })
  //                     .then((collected) => {
  //                       message.channel.send({
  //                         embed: {
  //                           color: 3447003,
  //                           author: {
  //                             name: client.user.username,
  //                             icon_url: client.user.avatarURL()
  //                           },
  //                           title: `Eeeeh...`,
  //                           description: "Toi tu aura rien tu sais ?",
  //                           timestamp: new Date(),
  //                           footer: {
  //                             icon_url: client.user.avatarURL(),
  //                             text: `©ToniPortal`
  //                           }
  //                         }
  //                       })
  //                     })
  //                 }).then(() => {
  //                   message.channel.awaitMessages(response => response.content === 'je sais', {
  //                     max: 1,
  //                     time: 30000,
  //                     errors: ['time'],
  //                   })
  //                     .then((collected) => {
  //                       message.channel.send({
  //                         embed: {
  //                           color: 3447003,
  //                           author: {
  //                             name: client.user.username,
  //                             icon_url: client.user.avatarURL()
  //                           },
  //                           title: `C'EST BON CHEF ON A FINI`,
  //                           description: "Bon moi je vais m'amuser,allez a plus p'tiot",
  //                           timestamp: new Date(),
  //                           footer: {
  //                             icon_url: client.user.avatarURL(),
  //                             text: `©ToniPortal`
  //                           }
  //                         }
  //                       })
  //                     })
  //                 })
  //               })
  //               .catch(() => {
  //                 message.channel.send({
  //                   embed: {
  //                     color: 3447003,
  //                     author: {
  //                       name: client.user.username,
  //                       icon_url: client.user.avatarURL()
  //                     },
  //                     title: `Réponse:`,
  //                     description: "Restons neutre,mais pas trop on va juste les attaquez discretement !",
  //                     timestamp: new Date(),
  //                     footer: {
  //                       icon_url: client.user.avatarURL(),
  //                       text: `©ToniPortal`
  //                     }
  //                   }
  //                 })
  //               });
  //           });
  //       })
  //       .catch(() => {
  //         message.channel.send({
  //           embed: {
  //             color: 3447003,
  //             author: {
  //               name: client.user.username,
  //               icon_url: client.user.avatarURL()
  //             },
  //             title: `Réponse:`,
  //             description: "N'ATTAQUONS PAS JERUSALEM",
  //             timestamp: new Date(),
  //             footer: {
  //               icon_url: client.user.avatarURL(),
  //               text: `©ToniPortal`
  //             }
  //           }
  //         })
  //       });
  //   });



};