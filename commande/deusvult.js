exports.run = (client, message, args, colors) => {



  const filter = m => m.content.includes('DEUSVULT');
  const collector = message.channel.createMessageCollector({ filter, time: 15_000 });

  collector.on('end', collected => console.log(`Collected ${collected.size} items`));

  message.channel.send({
    embeds: [{
      color: colors.defaut,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `Réponse:`,
      description: "**DEUSVULT**",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
      }
    }]
  })
  collector.on('collect', m => {
    console.log(m)
    message.channel.send({
      embeds: [{
        color: colors.defaut,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `${m.content}`,
        description: "**ATTAQUONS JERUSALEM**",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }]
    })

  });

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