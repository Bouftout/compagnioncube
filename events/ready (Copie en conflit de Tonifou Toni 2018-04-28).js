


exports.run = (client) => {
  const config = require("../config.json");
 
  client.user.setPresence({ game: { name:  `${client.channels.size} canaux || ${config.prefix}help || Online`, type: 3 } });
    client.user.setStatus("dnd");
    if(language == 'en'){
    console.log(
      `-----------------------------------------------------------`
      +`\n[Start]${new Date()}`
      +`\n-----------------------------------------------------------`
      +`\n\n>>The bot is ready to serve ${client.guilds.size} server.`
      +`\n\nI'm aware of ${client.channels.size} channels as a whole.`
      +`\nAnd I'm ${client.user.tag}.`
      +`\n\nCreated by ToniPortal#8330`
      +`\n\n------------------------------------------------------------`
      +`\n[!!]Command logs`
    );
  }
    if(language == 'fr'){
      console.log(
  `-----------------------------------------------------------`
  +`\n[Démarré]${new Date()}`
  +`\n-----------------------------------------------------------`
  +`\n\n>>Le bot est pret pour servir ${client.guilds.size} serveur.`
  +`\n\nJe suis au courant de ${client.channels.size} canaux dans l'ensemble.`
  +`\nEt je suis le ${client.user.tag}.`
  +`\n\nCrée par ToniPortal#8330`
  +`\n\n------------------------------------------------`
  +`\n[!!]Command logs`
      );
    }
      if(language == 'it'){
        console.log(
    `-----------------------------------------------------------`
    +`\n[Inizio]${new Date()}`
    +`\n-----------------------------------------------------------`
    +`\n\n>>bot è pronto per servire il server ${client.guilds.size}.`
    +`\n\nSono a conoscenza dei canali ${client.channels.size} nel loro insieme.`
    +`\nE io sono ${client.user.tag}.`
    +`\n\n------------------------------------------------`
    +`\n[!!]Registri comandi`
        );
      }
  }