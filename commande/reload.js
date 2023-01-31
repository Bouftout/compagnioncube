exports.run = (client, message, args) => {

  if (!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  console.log(args)
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[1]}.js`)];

  message.reply(`La commande ${args[1]} a été rechargée.`)

};