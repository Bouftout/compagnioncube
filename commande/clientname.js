
exports.run = (client, message, args) => {
  const config = require("../config.json");

  if (message.author.id !== config.ownerID) {

    client.user.setUsername(message.content.substr(11));
    message.reply("Mon nouveau nom est:\n" + client.user.tag)

  }


};

exports.help = {
  usage: ``,
  description: `Seulement le propriétaire du bot peut utuliser cette commande`
};