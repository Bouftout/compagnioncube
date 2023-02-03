exports.run = async (client, message, args) => {


  // const Guilds = client.guilds.cache.map(guild => guild);
  // console.log(Guilds[0].invites.guild.fetchInvites());

  client.guilds.cache.forEach(guild => {
    let channel = guild.channels.cache.last();
    createLink(channel, guild, message);
  });


  async function createLink(chan, guild, message) {
    let invite = await chan.createInvite().catch(console.error);
    try {
      message.channel.send(guild.name + '|' + invite);
    } catch (e) {
      message.channel.send(guild.name + '|' + 'no link available');
    }
  }
  
  // message.channel.send({
  //   embed: {
  //     color: 3447003,
  //     author: {
  //       name: client.user.username,
  //       icon_url: client.user.avatarURL
  //     },
  //     title: `**Guild ?**`,
  //     description: `Vous êtes dans la guilde : "**${message.guild.name}**" .\nCrée le: ${message.guild.createdAt}`,
  //     timestamp: new Date(),
  //     footer: {
  //       icon_url: message.guild.iconURL,
  //       text: `©ToniPortal#8330`
  //     }
  //   }
  // });


}