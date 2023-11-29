const { MessageAttachment } = require('discord.js');
const yaml = require('js-yaml');
const fs = require('fs');

exports.run = (client, message, args, colors) => {
  if (message.author.bot) return;

  // Supprimer le message de l'utilisateur
  message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username}, et supprimé le message: ${msg.content}`)).catch(console.error);

  // Charger la version depuis le fichier YAML
  const fichier = yaml.load(fs.readFileSync('./data/version.yml', 'utf8'));

  // Lister les fichiers dans le dossier "commande"
  const list = fs.readdirSync('./commande/');

  // Créer une liste formatée des fichiers
  const formattedList = list.join('\n');

  // Créer un MessageAttachment pour une image à inclure dans le message
  // const file = new MessageAttachment('./image/help/2 octobre 2020.png');

  // Créer un embed d'informations
  const embed = {
    color: colors.defaut,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    title: '**Information**',
    description: `- Le bot est en développement, n'hésitez pas à me proposer de nouvelles commandes.\n- La version actuelle du bot est la: ${fichier.version}\n- Le bot a été démarré ${fichier.verdem} fois\n- Si vous avez de gros problèmes avec mon bot, n'hésitez pas à me demander (*ToniPortal#4057*)`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: '©ToniPortal'
    }
  };

  // Envoyer l'embed d'informations en message privé à l'utilisateur
  message.author.send({ embeds: [embed] });

  // Créer un embed de liste des fichiers
  const embedlist = {
    color: colors.ok,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    title: '**LIST :**',
    description: formattedList,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: '©ToniPortal'
    }
  };

  // Envoyer l'embed de liste des fichiers en message privé à l'utilisateur
  message.author.send({ embeds: [embedlist] });

  // Créer un embed d'information sur le canal
  const embedchannel = {
    color: colors.ok,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    title: '**Info**',
    description: `${message.author} : Je vous ai envoyé un message en privé. Allez le voir :upside_down:`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: '©ToniPortal'
    }
  };

  // Envoyer l'embed d'information sur le canal
  message.channel.send({ embeds: [embedchannel] });
};
