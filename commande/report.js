const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  if (message.author.id === client.user.id || message.author.bot) return;

  if (message.channel.type != 'text') return message.channel.sendMessage({ embed: { color: 3447003, author: { name: client.user.username, icon_url: client.user.avatarURL }, title: `**ERROR 404**`, description: "N'utulisez que les commande dans des serveurs !", timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: `©ToniPortal#8330` } } });
  const config = require("./config.json");

  var channel = client.channels.get('418510447377907712');
  channel.sendMessage({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: `**Commande**`,
      description: "_Command executed: " + config.prefix + "clean_",
      fields: [{
        name: "**Demandé par:**",
        value: `${message.author.username}`
      },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `©ToniPortal#8330`
      }
    }
  })
  const arg = message.content.split(/\s+/g).slice(1);


  message.delete();
  if (arg[0] == "help") {
    message.reply("Usage: *report <user> <reason>");
    return;
  }
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));
  if (!rUser) return message.channel.send("Veuillez mettre un utulisteur")
  let rreason = args.join(" ").slice(22);
  if (!rreason) return message.channel.send("Veuillez mettre une raison")

  let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor(153, 0, 0)
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

  var channel0 = client.channels.get('483026743905615895');
  channel0.send(reportEmbed);

}