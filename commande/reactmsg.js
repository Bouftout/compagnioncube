exports.run = (client, message, args) => {

    switch (args) {
        case caca:
            message.react("💩")
            break;
        case melon:
            message.react("🍉")
            break;
    }



};

exports.help = {
    usage: `<caca;melon>`,
    description: `Ajoute une réaction caca a votre message`
};