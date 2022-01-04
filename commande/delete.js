exports.run = (client, message, args) => {

message.reply("J'ai bien delete votre Cube comportant votre message.\nJe vais maintenant m'auto détruire dans 4secondes").then(response => response.delete({timeout:"4000"}))
  message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);;


};