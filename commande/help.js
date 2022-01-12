exports.run = (client, message, args, colors) => {
  // A VERIFIER SOUVENT

  if (message.author.bot) return;

  const yaml = require('js-yaml');
  const fs = require('fs');

  const config = require("../config.json");

  message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);;


  var fichier = yaml.load(fs.readFileSync(`./data/version.yml`, 'utf8')); // enregistrer la version

  var list = fs.readdirSync("./commande/", { withFileTypes: false })


  console.log(list)

  const { MessageAttachment } = require('discord.js');
// ...
const file = new MessageAttachment('./image/help/2 octobre 2020.png');



    const embed = {
      color: colors.defaut,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      title: `**Information**`,
      description: `-Le bot est en developpement,donc n'hesitez pas a me proposer de nouvelle commande\n-La version actuelle du bot est la: ${fichier.version}\nLe bot a était démarré *${fichier.verdem}* fois\n-Si vous avez de gros problème avec mon bot n'hésitez pas a me demandez*(*ToniPortal#4057*)*`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
      }
    }
  

  message.author.send({ embeds: [embed] })

  const embedlist = {
    color: colors.ok,
    author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
    },
    title: `**LIST :**`,
    description: `${list}`,
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: `©ToniPortal`
    }
}

message.author.send({ embeds: [embedlist] })




  const embedchannel = {
    color: colors.ok,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    title: `**Info**`,
    description: `*${message.author}* : Je vous ai envoyer un message en privé.\nAllez le voir :upside_down:`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: `©ToniPortal`
    }
  }


message.channel.send({ embeds: [embedchannel] })


};
