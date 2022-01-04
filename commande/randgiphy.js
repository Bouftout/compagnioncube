exports.run = (client, message, args) => {
  if (message.author.bot) return;


  const arg = message.content.split(/\s+/g).slice(1);
  var request = require('request');

  if (message.author.equals(client.user)) return;

  var cat = `https://api.giphy.com/v1/gifs/random?api_key=w2cb3sr8fcPH0C9Oxaa5u86UoAtjECJp&tag=&rating=G`
  const Discord = require("discord.js");


  request({
    url: cat,
    json: true
  }, function (error, response, body) {
    console.log(`https://media.giphy.com/media/${body.data.id}/giphy.gif`);

    const embed = new Discord.MessageEmbed()
      .setTitle("**Giphy random**")
      .setAuthor(message.author.username, message.author.avatarURL)
      /*
       * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
       */
      .setColor(0x00AE86)
      .setDescription("Envoie un gif de giphy en aléatoire")
      .setFooter("©ToniPortal")
      .setImage(`https://media.giphy.com/media/${body.data.id}/giphy.gif`)
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp()

    message.channel.send({ embed });
  })



}