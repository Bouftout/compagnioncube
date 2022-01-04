exports.run = async (client, message, args, colors) => {

  const Discord = require("discord.js");


let max = 2;

let nombredefois = 0;


boucle()

function boucle(){

  const ping0 = new Discord.MessageEmbed()
    .setTitle("**Pong**")
    .setDescription(`:ping_pong: \nRestant: ${max - nombredefois}`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail("https://img1.ak.crunchyroll.com/i/spire4/0b8232f22b46d36f8fe52f4127da09c71482733705_full.jpg")
    .setURL("https://www.crunchyroll.com/fr/scorching-ping-pong-girls")
    .setFooter(`©ToniPortal`)
    .setColor(colors.defaut)
    .setTimestamp()

if(nombredefois == 0){

  nombredefois++

}

  message.channel.send(ping0)
    .then(() => {
      message.channel.awaitMessages(response => response.content === 'ping', {
        max: 1,
        time: 10 * 1000,
        errors: ['time'],
      }) .then((collected) => {


if(nombredefois == max){

  message.channel.send(`**_Raté !!_**`).then(response => response.delete({timeout:"4000"}))
  let role = message.guild.roles.cache.find(r => r.name === "Ping Pong Master")

  if (!role) {
return message.reply("Veuillez crée le rôle pour que je puisse vous l'ajouter (**Ping Pong Master**)")
  }

  if (message.member.roles.cache.has(role)) {
    return message.channel.send("You already have the role.")
  };
  message.reply("Votre rôle a était rajoutée").then(response => response.delete({timeout:"4000"}))
  // Adding the role.
  message.member.roles.add(role)




}else {

  boucle()

nombredefois++

}

      })
      .catch(() => {
        message.channel.send({
          embed: {
            color: colors.defaut,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            title: `Arrêt du ping pong`,
            description: `Vous êtes allez jusqu'a ${nombredefois}.\nIl vous manquer ${max - nombredefois} pour arriver au succès`,
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL(),
              text: `©ToniPortal`
            }
          }
        }).then(response => { response.delete(10 * 1000) });
      });
  })



}




        

};