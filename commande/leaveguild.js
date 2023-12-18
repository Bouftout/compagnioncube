const config = require("../config.json");

exports.run = (client, message, args) => {
  
  if (config.owner_id == message.author.id) {

    console.log("Commande de leave par " + message.author.username + '#' + message.author.discriminator);
    message.delete();
    message.channel.send("Je quitte ce serveur, à bientôt j'espère !");
    message.guild.leave();

  } else {
    message.reply("Veuillez être le propriétaire du bot !")
  }


};