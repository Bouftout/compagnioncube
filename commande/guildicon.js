exports.run = (client, message, args) => {

  if (message.author.id == message.guild.owner.id) {

    if (args == "") {

      message.reply("Permet de changer l'icone de guild par rapport a des image dans le bot\nDe 1 à 6")

    }

    if (args[0] > "1" && args[0] < "6") {
      message.guild.setIcon(`./image/iconguild/icon${args[0]}guild.png`)
        .then(console.log)
        .catch(console.error);
      message.reply("```diff\n+Tu as changer l'icone de la guilde !!```")
    }
  } else {
    message.channel.sendMessage({
      embed: {
        color: 1082119,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: `**Owner de la guilde ??**`,
        description: "Vous n'avez pas le droit d'exécuter cette commande,vous n'etes pas l'owner de la guilde.",
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
    }).then(response => { response.delete(10000) });
  }

};