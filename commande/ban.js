exports.run = async (client, message, args) => {
  if (message.author.id === client.user.id || message.author.bot) return;



  let member = message.mentions.members.first();

  if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.reply('Je n\'ai pas le pouvoir de faire cette commande```diff\n+BAN_MEMBERS```').catch(console.error);



  if (!member)
    return message.reply("Veuillez mentionner un membre du server et une raison de ban");
  if (!member.bannable)
    return message.reply("Je ne peux pas faire ça ! Il a un rôle plus haut ? Vérifiez les permissions.");

  let reason = args.slice(1).join(' ');
  if (!reason) reason = "Aucune raison n'a été fournie";


  await member.ban(reason)
    .catch(error => message.reply(`Désolé ${message.author}. Je ne peux pas faire ça: ${error}`));
  message.reply(`${member.user.tag} a été banni par ${message.author.tag} pour la raison suivante: ${reason}`);

  message.channel.send({
    embed: {
      color: 0x778899,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**${member.user.tag}**`,
      description: `a été banni par ${message.author.tag} pour la raison suivante:\n${reason}`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal`
      }
    }
  })


};

exports.help = {
  usage: `<mention>`,
  description: `Pour bannir une personne du serveur`
};
