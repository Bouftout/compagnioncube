exports.run = (client, message, args, colors) => {

  const yaml = require('js-yaml');
  const fs = require('fs');




  if (args[0] == "delete") {
    fs.exists(`./data/queue.yml`, function (exists) {

      if (exists) {

        fs.unlink('./data/queue.yml', function (err) {
          if (err) throw err;
          // if no error, file has been deleted successfully
          console.log('File : ./data/queue.yml delete !');
          message.channel.send({
            embed: {
              color: colors.defaut,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
              },
              title: `**Information**`,
              description: `J'ai bien enlever tout ce qui avait dans la queue`,
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
              }
            }
          })
        });


      } else {


        message.channel.send({
          embed: {
            color: colors.defaut,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            title: `**Error**`,
            description: `Il n'y pas de queue,donc je ne peut rien supprimer !`,
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


  if (args[0] == "ls") {
    fs.exists(`./data/queue.yml`, function (exists) {

      if (exists) {
        var fichier = yaml.load(fs.readFileSync(`./data/queue.yml`, 'utf8'));



        if (fichier.trois > "a") {

          message.channel.send({
            embed: {
              color: colors.defaut,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
              },
              title: `**Information**`,
              description: `1)*${fichier.un}*\n2)*${fichier.deux}*\n3)*${fichier.trois}*`,
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
              }
            }
          })

        }

        if (!fichier.trois && !fichier.deux) {

          message.channel.send({
            embed: {
              color: colors.defaut,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
              },
              title: `**Information**`,
              description: `1)*${fichier.un}*`,
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
              }
            }
          })

        }

        if (!fichier.un > "a" && fichier.deux > "a") {

          message.channel.send({
            embed: {
              color: colors.defaut,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
              },
              title: `**Information**`,
              description: `1)*${fichier.un}*\n2)*${fichier.deux}*`,
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
              }
            }
          })

        }


      } else {

        message.channel.send({
          embed: {
            color: colors.defaut,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            title: `**Information**`,
            description: `Il n'y a pas de queue actuellement`,
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

  if (args[0] == "ls" || args[0] == "delete") {

  } else {

    fs.exists(`./data/queue.yml`, function (exists) {

      if (exists) {

        var fichier = yaml.load(fs.readFileSync(`./data/queue.yml`, 'utf8'));

        if (!fichier.deux) {
          var stream = fs.createWriteStream(`./data/queue.yml`); //pour la personne qui donne
          stream.once('open', function (fd) {
            stream.write(`un: ${fichier.un}\n`);
            stream.write(`deux: ${args[0]}\n`);
            stream.end();
          });


          const embed2 = {
            color: colors.defaut,
            title: `**Information**`,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
              },
              description: `Vous venez de mettre un 2ieme mot/lien pour la queue de la musique`,
               timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL(),
              text: `©ToniPortal`
            },
          };
      
          
          message.channel.send({ embeds: [embed2] });

        }

        if (fichier.deux > "a") {


          if (!fichier.trois) {


            var stream = fs.createWriteStream(`./data/queue.yml`); //pour la personne qui donne
            stream.once('open', function (fd) {
              stream.write(`un: ${fichier.un}\n`);
              stream.write(`deux: ${fichier.deux}\n`);
              stream.write(`trois: ${args[0]}\n`);
              stream.end();
            });



            const embed3 = {
              color: colors.defaut,
              title: `**Information**`,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
                },
                description: `Vous venez de mettre un 3ieme mot/lien pour la queue de la musique`,
                 timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL(),
                text: `©ToniPortal`
              },
            };
        
            
            message.channel.send({ embeds: [embed3] });


          } else {

            message.channel.send({
              embed: {
                color: colors.defaut,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
                },
                title: `**Information**`,
                description: `Limite est de 3 pour la queue du bot`,
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL(),
                  text: `©ToniPortal`
                }
              }
            })

          }

        }



      } else {

        var stream = fs.createWriteStream(`./data/queue.yml`); //pour la personne qui donne
        stream.once('open', function (fd) {
          stream.write(`un: ${args[0]}\n`);
          stream.end();
        });


        const embed1 = {
          color: colors.defaut,
          title: `**Information**`,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            description: `Vous venez de mettre un mot/lien pour la queue de la musique\nCommande disponible :\n*queue ls\n*queue delete`,
             timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: `©ToniPortal`
          },
        };
    
        
        message.channel.send({ embeds: [embed1] });
    

      }

    })


  }; // regarder si on fait pas la commande *queue ls


}