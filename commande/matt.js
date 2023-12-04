exports.run = async (client, message, args, colors) => {
    
    console.log(args[1]);

    if (args[1] !== undefined) {
        message.delete();

        if (args[1] == "tbs") {
            args[1] = "Totally Accurate Battle Simulator";
        }

        var descr = "";

        for (var i = 3; i < args.length; i++) {
            descr += args[i] + " ";
        }

        // Vérifiez si l'utilisateur autorise les messages directs
        try {
            const user = await client.users.fetch(message.author.id);
            const dmChannel = await user.createDM();

            const embed = {
                color: colors.ok,
                author: {
                    name: message.author.username,
                    icon_url: message.author.avatarURL(),
                },
                title: args[1],
                description: descr.replace("undefined", ""),
                timestamp: new Date(),
                image: {
                    url: args[2],
                },
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: `©ToniPortal`,
                },
            };

            dmChannel.send({ embeds: [embed] });
        } catch (error) {
            console.error(`Erreur lors de l'envoi du message direct : ${error.message}`);
            message.reply("Impossible d'envoyer un message direct. Assurez-vous que vos messages directs sont activés.");
        }
    } else {
        message.reply("Veuillez mettre un argument !");
    }
};
