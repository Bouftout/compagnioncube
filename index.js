const { Client, Collection, GatewayIntentBits } = require("discord.js");
const yaml = require("js-yaml");
const fileExists = require("file-exists");

const client = new Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const config = require("./config.json");
const colors = yaml.load(
  require("fs").readFileSync("./data/colors/colors.yml", "utf8")
);

client.commands = new Collection();

(async () => {
  try {
    await client.login(config.token);
    console.log("> Connexion...\n--------------");
  } catch (error) {
    console.error("Erreur de connexion:", error);
  }
})();

client.on("ready", () => {
  const upTime1 = Math.round(process.uptime());
  const memoryUsedMb = process.memoryUsage().heapUsed / 1024 / 1024;

  console.log(`
 _   _   _____   _       _       _____  
| | | | | ____| | |     | |     /  _   
| |_| | | |__   | |     | |     | | | | 
|  _  | |  __|  | |     | |     | | | | 
| | | | | |___  | |___  | |___  | |_| | 
|_| |_| |_____| |_____| |_____| _____/ 
`);

  console.log(
    `-----------------------------------------------------------\n` +
      `[Démarré] ${new Date}\n` +
      `-----------------------------------------------------------\n` +
      `[INFO] Uptime ${upTime1}s\nUsed Memory : ${memoryUsedMb}\n` +
      `-----------------------------------------------------------\n\n` +
      `>> Le bot est pret pour servir ${client.guilds} serveur.\n` +
      `Je suis au courant de ??? canaux dans l'ensemble.\n` +
      `Et je suis le ${client.user.tag}.\n\n` +
      `Crée par ToniPortal\n\n` +
      `------------------------------------------------`
  );

  const yv = yaml.load(
    require("fs").readFileSync("./data/version.yml", "utf8")
  );
  yaml.load(
    require("fs").writeFileSync(
      "./data/version.yml",
      `version: ${yv.version}\nverdem: ${Number(yv.verdem) + 1}`,
      "utf8"
    )
  );
});

client.on("messageCreate", async (message) => {
  if (
    message.author.id === client.user.id ||
    message.author.bot ||
    message.author.equals(client.user)
  ) {
    return;
  }

  const prefix = "*";
  const args = message.content.trim().split(/ +/g);
  const command = args[0].slice(prefix.length).toLowerCase();

  if (
    (args[0] !== "*help" && args[0] !== "*testo") ||
    (args[0] === "*help" && args[1] === undefined)
  ) {
    try {
      const exists = await fileExists(`./commande/${command}.js`);
      if (exists) {
        const commandFile = require(`./commande/${command}.js`);
        commandFile.run(client, message, args, colors);
      }
    } catch (error) {
      console.error(error);
      const embed = {
        color: 16711680,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL(),
        },
        title: `**ERROR**`,
        description:
          "Quel dommage, GLaDOS n'a pas réussi à lancer votre commande !",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©${client.user.tag}`,
        },
      };
      message.channel.send({ embeds: [embed] });
    } finally {
      console.log(`\n`);
    }
  } else if (args[0] === "*help" && args[1] !== undefined) {
    try {
      const { help } = require(`./commande/${args[1]}`);
      const helpembed = {
        color: 16744703,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL(),
        },
        title: `Help !`,
        description: `Usage : _${prefix}${args[1]}_ ${help.usage}\n${help.description}.`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: `©ToniPortal`,
        },
      };
      message.channel.send({ embeds: [helpembed] });
    } catch (error) {
      console.error(error);
    }
  } else if (args[0] === "*testo") {
    const commandNames = require("fs").readdirSync("./commande/");
    const results = [];

    async function runCommandsSequentially() {
      try {
        const channel = client.channels.cache.get("1179755824344731728");
        if (!channel) {
          throw new Error(`Le canal n'a pas été trouvé.`);
        }

        for (const commandName of commandNames) {
          try {
            if (
              commandName !== "exit.js" &&
              commandName !== "slashcommande"
            ) {
              const result = await channel.send(`*${commandName}`);
              const commandFile = require(`./commande/${commandName}`);
              const cmdResult = await commandFile.run(
                client,
                result,
                "",
                colors
              );
              await new Promise((resolve) => setTimeout(resolve, 750));
              console.log(`Commande ${commandName} exécutée avec succès.`);
              results.push({
                command: commandName,
                success: true,
                result: cmdResult,
              });
            }
          } catch (error) {
            console.error(
              `Erreur lors de l'exécution de la commande ${commandName}:`,
              error
            );
            results.push({
              command: commandName,
              success: false,
              error: error.message,
            });
          }
        }

        const resultsJSON = JSON.stringify(results, null, 2);
        require("fs").writeFileSync(
          "./data/testcommande/commandResults.json",
          resultsJSON
        );
        console.log(
          "Tests terminés. Résultats enregistrés dans commandResults.json."
        );
        message.channel.send(
          "Tests terminés. Résultats enregistrés dans commandResults.json."
        );
      } catch (error) {
        console.error("Erreur lors de l'éxécution du test de commande:", error);
        message.channel.send("Erreur lors de l'éxécution du test de commande");
      }
    }

    await runCommandsSequentially();
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  try {
    const commandFile = require(`./commande/slashcommande/${interaction.commandName}.js`);
    commandFile.run(client, interaction);
  } catch (error) {
    console.error(error);
  }
});

client.on("error", (error) => {
  console.log("Error:\n" + error);
});
