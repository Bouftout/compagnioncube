exports.run = async (client, message, args) => {

  if (message.author.id === client.user.id || message.author.bot) return;




  if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.reply('I do not have the POWER of the dawaee,```diff\n+MANAGE_MESSAGES```').catch(console.error);


  const deleteCount = parseInt(args[0], 10);

  if (!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("S'il te plaît met un nombre entre 2 et 100 !");

  message.channel.bulkDelete(deleteCount)
    .catch(error => message.reply(`Je ne peut pas supprimé les message car: ${error}`));

};

exports.help = {
  usage: `<chiffre>`,
  description: `Pour permettre de supprimer jusqu'a un maximum de 100 message`
};