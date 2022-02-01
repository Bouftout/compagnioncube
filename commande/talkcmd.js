exports.run = (client, message, args, colors) => {

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

                const embed = {
                    color: colors.defaut,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL()
                    },
                    title: `**Say**`,
                    description: `${answers['name']}`,
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: `©ToniPortal`
                    }
                }

                message.channel.send({ embeds: [embed] })

            })

        } else {

            console.log("Cette commande n'est disponible que pour mon créateur");
            message.delete();
            message.channel.send("Cette commande n'est disponible que pour mon créateur");
        }



    } //fin commande