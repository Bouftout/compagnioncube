exports.run = async (client, message, args) => {


  let member = message.mentions.members.first();

  if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.reply('I do not have the POWER of the dawaee,```diff\n+KICK_PERMISSIONS```').catch(console.error);

  if (message.mentions.members.size == "0")
    return message.reply("S'il vous plaît mentionner un utilisateur à kick");


  if (!member.kickable)
    return message.reply("Je ne peux pas donner un coup de pied à cet utilisateur ! Ont-ils un rôle plus important ? Est-ce que j'ai des permissions de donner des kick ?");

  const kickMember = message.mentions.members.first();

  let reason = args.slice(1).join(' ');
  if (!reason) reason = "Aucune raison n'a été fournie";

  // Now, time for a swift kick in the nuts!
  await member.kick(reason)
    .catch(error => message.reply(`Désolé ${message.author} Je n'ai pas pu donner de kick à cause de : ${error}`));
  message.reply(`${member.user.tag} a été kick par ${message.author.tag} parceque: ${reason}`);

};
