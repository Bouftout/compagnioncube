exports.run = (client, message, args) => {


  const config = require("./config.json");




  if (config.owner_id == message.author.id) {

    console.log("Commande de leave par " + message.author.username + '#'+ message.author.discriminator);
    message.delete();
    message.channel.send("Je quitte ce serveur, à bientôt j'espère !");
    message.guild.leave();

  }


};