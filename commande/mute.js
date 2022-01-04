const Discord = require("discord.js");
const ms = require("ms");
exports.run = async (client, message, args) => {
  if (message.author.id === client.user.id || message.author.bot) return;
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
      description: "_Command executed: " + config.prefix + "mute_",
      fields: [{
        name: "**Demandé par:**",
        value: `${message.author.username}`
      },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©${client.user.tag}`
      }
    }
  })
  const arg = message.content.split(/\s+/g).slice(1);



  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the POWER of the dawaee,```diff\n+MANAGE_ROLES_OR_PERMISSIONS```').catch(console.error);
  if (arg[0] == "help") {
    message.reply(`Utilisation: ${config.prefix}mute <utilisateur> <1s/m/h/d> <raison>`);
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));

  if (!tomute) return message.reply("J'ai cherché partout dans se serveur,je n'ai pas trouvée la personne rechercher");

  if (message.isMentioned(config.owner_id) || message.mentions.everyone || (message.guild && message.mentions.roles.filter(r => message.guild.member(config.owner_id).roles.has(r.id)).size > 0)) {
    if (message.author.id === config.owner_id) {
      const embed1 = new Discord.RichEmbed()
        .setTitle("Error")
        .setColor(0x00AE86)
        .setDescription("Tu ne peut pas mute mon **maître suprême** !!")
        .setTimestamp()
        .addField('Action:', 'Mute Temp Error')
        .addField('User:', `<@${tomute.id}>`)
        .addField('Modrathor:', `<@${message.author.id}>`);
      message.channel.send(embed1)
      return;
    }
  }






  if (message.author.id == tomute) {
    const embed0 = new Discord.RichEmbed()
      .setTitle("Error")
      .setColor(0x00AE86)
      .setDescription("Tu ne peut pas te mute toi même !!.")
      .addField('Action: Mute Temp Error')
      .addField('User:', `<@${tomute.id}>`)
      .addField('Modrathor:', `<@${message.author.id}>`)
      .setTimestamp();
    message.channel.send(embed0);
    return;
  }

  let mutetime = arg[1];
  const embedmutetime = new Discord.RichEmbed()
    .setTitle("Error")
    .setColor(0x00AE86)
    .setDescription("Tu n'as pas mis de temp !!")
    .addField('Action: Mute Temp Error')
    .addField('User:', `<@${tomute.id}>`)
    .addField('Modrathor:', `<@${message.author.id}>`)
    .setTimestamp();
  if (!mutetime) return message.channel.send(embedmutetime);

  const embedreason = new Discord.RichEmbed()
    .setTitle("Tu n'as pas mis de raison!!")
    .setColor(0x00AE86)
    .setDescription('Action: Mute Temp Error')
    .addField(`Temp : ${mutetime}`)
    .addField('User:', `<@${tomute.id}>`)
    .addField('Modrathor:', `<@${message.author.id}>`)
    .setTimestamp();
  let reason = arg.slice(2).join(" ");
  if (!reason) return message.channel.send(embedreason);

  let muterole = message.guild.roles.find(r => r.name === "Utilisateurs mutés");
  //start of create role
  if (!muterole) {
    try {
      muterole = await message.guild.createRole({
        name: "Utilisateurs mutés",
        color: "#000000",
        permissions: []
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }
  //end of create role


  message.delete().catch(O_o => { });

  try {
    const embedauthorsend = new Discord.RichEmbed()
      .setTitle("_Salut !!_")
      .setColor(0x00AE86)
      .setDescription('Désolé,tu as était mute par un Modérateur !!!')
      .addField(`Temp du mute: ${mutetime}`)
      .addField('User:', `<@${tomute.id}>`)
      .addField('Modérateur:', `<@${message.author.id}>`)
      .setTimestamp();
    await tomute.send(embedauthorsend)
  } catch (e) {
    const embedauthorsenderror = new Discord.RichEmbed()
      .setTitle("_L'utilisateur a été mute par un modérateur,Mais il a bloqué les messages privés._")
      .setColor(0x00AE86)
      .setDescription('Raison: ' + reason)
      .addField(`Temp du mute: ${mutetime}`)
      .addField('User:', `<@${tomute.id}>`)
      .addField('Modérateur:', `<@${message.author.id}>`)
      .setTimestamp();
  }

  await (tomute.addRole(muterole.id));
  const embed001 = new Discord.RichEmbed()
    .setTitle("_L'utilisateur a été mute par un modérateur")
    .setColor(0x00AE86)
    .setDescription('Raison: ' + reason)
    .addField(`Temp du mute: ${mutetime}`)
    .addField('User: ', `<@${tomute.id}>`)
    .addField('Modérateur: ', `<@${message.author.id}>`)
    .setTimestamp();
  message.channel.send(embed001)

  setTimeout(function () {
    tomute.removeRole(muterole.id);
    const embed003 = new Discord.RichEmbed()
      .setTitle("_L'utilisateur a été démute car le temp est finis.")
      .setColor(0x00AE86)
      .setDescription('Raison: ' + reason)
      .addField(`Temp du mute: ${mutetime}`)
      .addField('User: ', `<@${tomute.id}>`)
      .addField('Modérateur: ', `<@${message.author.id}>`)
      .setTimestamp();
    message.channel.send(embed003)
  }, ms(mutetime));

}





module.exports.help = {
  name: "mute"
}