exports.run = (client, message, args) => {

  if (message.author.bot) return;
  if (message.channel.type != 'text') return message.channel.sendMessage({ embed: { color: 1082119, author: { name: client.user.username, icon_url: client.user.avatarURL }, title: `**ERROR 404**`, description: "N\'utilisez  que les commande dans des serveurs !", timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: `©ToniPortal#8330` } } });

  const config = require("./config.json");



  var channel = client.channels.get('418510447377907712');
  channel.sendMessage({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**Commande**`,
      description: "_Command executed: " + config.prefix + "setrank_",
      fields: [{
        name: "**Demandé par:**",
        value: `${message.author.username}`
      },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal#8330`
      }
    }
  })

  if (message.member.roles.some(r => ["1234", "⚠️ Fondateur ⚠️", "📢 Administrateurs 📢"].includes(r.name))) {
    // has one of the roles

    //if(message.member.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')){
    const userToModify = message.mentions.members.first();

    const roleToAdd = message.mentions.roles.first();
    if (!userToModify && !roleToAdd) {

      message.channel.sendMessage({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Info**`,
          description: `Veuillez mettre un membre et un rôle`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      })
    } else {
      userToModify.addRole(roleToAdd).catch(console.error)





      message.channel.sendMessage({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Info**`,
          description: `${userToModify} a désormais le grade » ${roleToAdd}`,
          fields: [{
            name: "**Le rôle a était mis par:**",
            value: `${message.author.username}`
          },
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
      })
    }

  } else {
    message.channel.sendMessage({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `**Info**`,
        description: `Tu n'as pas la permission`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `©ToniPortal#8330`
        }
      }
    })
  }
  /*
  } else {
      message.channel.sendMessage({embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: `**Info**`,
          description: `Le bot n'a pas les permission`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `©ToniPortal#8330`
          }
        }
        })
  }
  */
};