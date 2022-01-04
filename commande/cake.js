exports.run = (client, message, args) => {

   if (message.author.bot) return;

   message.channel.send({
      embed: {
         title: `The cake is a lie`,
         color: 3447003,
         timestamp: new Date(),
      },
      files: [{
         attachment: `./image/cake/cake.png`,
         name: 'cake.png'
      }]
   })

};

exports.help = {
   usage: ``,
   description: `Une petite référence a portal`
 };