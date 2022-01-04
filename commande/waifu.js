
exports.run = (client, message, args, colors) => {

  if (message.author.bot) return;

  message.delete()

  const twdne = require('twdne.js');



  // Randomly selects one
  twdne.randomWaifu().then(({ desc, img }) => {
    console.log(`Waifu Image URL: ${img}`);

    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
      .setTitle("**Waifu**")
      .setAuthor("Compagnion Cube", client.user.avatarURL())
      /*
      * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
      */
      .setColor(colors.ok)
      .setImage(img)
      .setFooter(`©ToniPortal`, client.user.avatarURL())
      .setTimestamp()

    message.channel.send({ embed })

  });




}