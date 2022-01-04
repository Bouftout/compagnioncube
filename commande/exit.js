exports.run = (client, message, args) => {

  const config = require("../config.json");


  if (message.author.id === config.owner_id) {
    client.user.setStatus("offline");

    message.channel.send("L'arrêt a été **déclenché**.\nFermeture en cours...")
    console.log(
      " _____   _____   _____   _____   _____  __    __  _____  \n" +
      " /  ___| /  _  \ /  _  \ |  _  \ |  _  \ \ \  / / | ____| \n" +
      " | |     | | | | | | | | | | | | | |_| |  \ \/ /  | |__   \n" +
      " | |  _  | | | | | | | | | | | | |  _  {   \  /   |  __|  \n" +
      " | |_| | | |_| | | |_| | | |_| | | |_| |   / /    | |___  \n" +
      " \_____/ \_____/ \_____/ |_____/ |_____/  /_/     |_____| \n"
    )
    setTimeout(function () {
      client.destroy()
    }, 1000)
    setTimeout(function () {
      process.exitCode = 1;
      console.log("Le bot va s'éteindre !!")
      process.exit()


    }, 2000)
  } else {
    message.channel.send({
      embed: {
        color: 1082119,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Owner?**`,
        description: "Vous n'avez pas le droit d'exécuter cette commande,vous n'etes pas le owner",
        fields: [{
          name: "**Demandé par:**",
          value: `${message.author.username}`
        },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`
        }
      }
    }).then(response => response.delete({timeout:"10000"}))
  }
};