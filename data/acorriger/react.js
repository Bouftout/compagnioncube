exports.run = async (client, message, args, colors) => {

    const { ReactionRoleManager } = require('discord.js-collector'); //We import the discord.js-collector package that'll make reaction roles possible




        const role = args[0]
        if (!role)
         return message
          .reply('Tu a besoin de mettre un rôle !')
          .then((m) => m.delete({ timeout: 1_000 }));
      
        const emoji = args[1];
        if (!emoji)
         return message
          .reply('You need use a valid emoji.')
          .then((m) => m.delete({ timeout: 1_000 }));
      
          
          message.react(emoji)

          const filter = (reaction, user) => {
           return reaction.emoji.name === emoji && user === message.author;
         };
         
         const collector = message.createReactionCollector(filter);
         
         collector.on('collect', (reaction, user) => {
           
           console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
         
         
             let role = message.guild.roles.cache.find(r => r.name === args[0]);
         
             if (message.member.roles.cache.has(role)) {
               return message.channel.send("You already have the role.")
              };

             // Adding the role.
             message.member.roles.add(role).then(message.reply('Done').then((m) => m.delete({ timeout: 1000 })));

            
         
         });
         
         collector.on('end', collected => {

           console.log(`Collected ${collected.size} items`);

         });


       
       


};