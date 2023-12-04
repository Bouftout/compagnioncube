exports.run = (client, message, args) => {


   message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);;

   const nombremax = "52"

   function getrandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
   }
   let nombre = message.content.split(" ").slice(1, 2)[0];

   if (nombre == "random") {
      const randomchiffre = getrandom(1, nombremax)

      message.channel.send({
         embed: {
            title: `**Chien **${randomchiffre}`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: `./image/dog/dog${randomchiffre}.jpg`,
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);
   } else {

      if (nombre == "help") {
         message.channel.send({
            embed: {
               color: 1082119,
               author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
               },
               title: "Help",
               description: "Pour utuliser la commande vous avez :\n*dog random\n*dog 1(de 1 à " + nombremax + ")",
               timestamp: new Date(),
               footer: {
                  icon_url: client.user.avatarURL(),
                  text: `©ToniPortal`
               }
            }
         })
         return;
      }
      if (nombre == null) {
         message.channel.send({
            embed: {
               color: 1082119,
               author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
               },
               title: "Help",
               description: "Pour utuliser la commande vous avez :\n*dog random\n*dog 1(de 1 à " + nombremax + ")",
               timestamp: new Date(),
               footer: {
                  icon_url: client.user.avatarURL(),
                  text: `©ToniPortal`
               }
            }
         })
         return;
      }
      if (nombre == "0") {
         message.channel.send({
            embed: {
               color: 1082119,
               author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
               },
               title: `**Commande**`,
               description: "Il n'a pas trouvé d'image",
               timestamp: new Date(),
               footer: {
                  icon_url: client.user.avatarURL(),
                  text: `©ToniPortal#8330`
               }
            }
         })
      }

      if (nombre > nombremax) {
         message.channel.send({
            embed: {
               color: 1082119,
               author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
               },
               title: `**Commande**`,
               description: "Il n'a pas trouvé d'image\nIl faut mettre en dessoue de 53",
               timestamp: new Date(),
               footer: {
                  icon_url: client.user.avatarURL(),
                  text: `©ToniPortal#8330`
               }
            }
         })
      }
      if (nombre < "0") {
         message.channel.send({
            embed: {
               color: 1082119,
               author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
               },
               title: `**Commande**`,
               description: "Il n'a pas trouvé d'image",
               timestamp: new Date(),
               footer: {
                  icon_url: client.user.avatarURL(),
                  text: `©ToniPortal#8330`
               }
            }
         })
      }


   }


   if (nombre == "1") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog1.jpg',
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);
   }
   if (nombre == "2") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog2.jpg',
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);
   }
   if (nombre == "3") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog3.jpg',
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);
   }
   if (nombre == "4") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog4.jpg',
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);
   }
   if (nombre == "5") {

      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog5.jpg',
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);
   }
   if (nombre == "6") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog6.jpg',
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);
   }
   if (nombre == "7") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog7.jpg',
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);
   }
   if (nombre == "8") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog8.jpg',
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);
   }
   if (nombre == "9") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog9.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);
   }
   if (nombre == "10") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog10.jpg',
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);
   }

   if (nombre == "11") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog11.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);
   }

   if (nombre == "12") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog12.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "13") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog13.jpg',
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);

   }


   if (nombre == "14") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog14.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }

   if (nombre == "15") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog15.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }

   if (nombre == "16") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog16.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);
   }

   if (nombre == "17") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog17.jpg',
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);
   }

   if (nombre == "18") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog18.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }
   if (nombre == "19") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog18.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }

   if (nombre == "20") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog19.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }



   if (nombre == "21") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog20.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "22") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog21.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "23") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog22.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);
   }


   if (nombre == "24") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog23.jpg',
            name: 'Dog.jpg'
         }]
      })

         .catch(console.error);

   }

   if (nombre == "25") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog24.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }
   if (nombre == "26") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog25.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }

   if (nombre == "27") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog26.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }

   if (nombre == "28") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog27.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "29") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog28.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }
   if (nombre == "30") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog28.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "31") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog30.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }



   if (nombre == "32") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog31.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }

   if (nombre == "33") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog32.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }

   if (nombre == "34") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog33.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "35") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog34.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }



   if (nombre == "36") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog35.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }



   if (nombre == "37") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog36.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }



   if (nombre == "38") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog37.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }

   if (nombre == "39") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog38.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "40") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog39.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "41") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog40.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }

   if (nombre == "42") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog41.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }

   if (nombre == "43") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog42.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "44") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog43.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "45") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog44.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "46") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog45.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);
   }


   if (nombre == "47") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog46.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "48") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog47.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


   if (nombre == "49") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog48.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }

   if (nombre == "50") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog49.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }

   if (nombre == "51") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog50.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }
   if (nombre == "52") {
      message.channel.send({
         embed: {
            title: `**Chien**`,
            color: 3447003,
            timestamp: new Date(),
         },
         files: [{
            attachment: './image/dog/dog51.jpg',
            name: 'Dog.jpg'
         }]
      })

      .catch(console.error);

   }


};