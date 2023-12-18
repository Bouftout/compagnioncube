exports.run = async (client, message, args) => {
  if (!message.guild.me.permissions.has('KICK_MEMBERS')) {
    return message.reply("I do not have the POWER of the dawaee,```diff\n+KICK_PERMISSIONS```").catch(console.error);
  }

  const member = message.mentions.members.first();

  if (!member) {
    return message.reply("Please mention a user to kick.");
  }

  if (!member.kickable) {
    return message.reply("I cannot kick this user. Do they have a higher role? Do I have the necessary kick permissions?");
  }

  let reason = args.slice(1).join(' ') || "No reason provided";

  try {
    await member.kick(reason);
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} for: ${reason}`);
  } catch (error) {
    message.reply(`Sorry ${message.author}, I couldn't kick the user due to: ${error}`);
  }
};
