exports.run = (client, message, args) => {

  if (message.author.bot) return;
  const config = require("../config.json"); //config.json

  if (message.author.id == config.owner_id) {

    const inquirer = require('inquirer')

    var questions = [{
      type: 'input',
      name: 'name',
      message: "Ce que tu écrivera après l'enverrera dans la channel ou tu a fait la commande !!", //ton message dans le cmd
    }]

    inquirer.prompt(questions).then(answers => {

      message.
        channel.send({
          embed: { //ton message
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: `**Commande**`,
            description: `${answers['name']}`,
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

    })

  } else {

    console.log("Cette commande n'est disponible que pour mon créateur");
    message.delete();
    message.channel.send("Cette commande n'est disponible que pour mon créateur");
  }



} //fin commande