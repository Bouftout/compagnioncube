exports.run = (client, message, args, colors) => {

   if (message.author.bot) return;

   const embed = {
      color: colors.defaut,
      author: {
         name: client.user.username,
         icon_url: client.user.avatarURL()
      },
      title: `**The cake is a lie**`,
      description: ``,
      timestamp: new Date(),
      footer: {
         icon_url: client.user.avatarURL(),
         text: `©ToniPortal`
      },
      image: {
         url: 'https://cdn.discordapp.com/attachments/427229236282130454/1069296168938524692/cake.png',
      }
   }

   message.channel.send({ embeds: [embed] });

};

exports.help = {
   usage: ``,
   description: `Une petite référence a portal`
};