exports.run = (client, message, args) => {
    // Définir des plages de nombres pour différentes difficultés
    const difficultes = {
        facile: { min: 1, max: 50, tentatives: 8 },
        intermediaire: { min: 1, max: 100, tentatives: 10 },
        difficile: { min: 1, max: 200, tentatives: 12 },
        hardu: { min: 1, max: 400, tentatives: 15 },
        impossible: { min: 1, max: 999, tentatives: 3 },
    };


    if (!args[1]) {
        return message.reply(`Veuillez choisir une difficulté parmi : ${Object.keys(difficultes)}\n(vous pouvez utuliser que la première lettre pour lancer la commande).`);
    }

    const niveauDifficulte = args[1].toLowerCase(); // Récupérer le niveau de difficulté depuis les arguments

    if (!niveauDifficulte || !difficultes[niveauDifficulte]) {
        return message.reply(`Veuillez choisir une difficulté parmi :  ${Object.keys(difficultes)}(vous pouvez utuliser que la première lettre pour lancer la commande).`);
    }

    const { min, max, tentatives } = difficultes[niveauDifficulte];
    const nombreMystere = Math.floor(Math.random() * (max - min + 1)) + min;
    let essaisRestants = tentatives;

    message.channel.send(`Bienvenue dans le jeu Devine le Nombre ! Un nombre entre ${min} et ${max} a été choisi. Devine-le en utilisant *devine [nombre]. Tu as ${essaisRestants} tentatives.`);



};
