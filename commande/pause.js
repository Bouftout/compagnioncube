exports.run = (client, message, args) => {

    const config = require("../config.json");

    message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);

    if (message.guild.owner.id == message.author.id || message.author.id == config.owner_id || config.admins(message.author.id) != -1) {

        if (!message.member.voiceChannel) return message.channel.send('Vous devez être dans un channel vocal').then(response => { response.delete(10000) });

        let player = message.guild.voiceConnection.player.dispatcher
        if (!player || player.paused) return message.channel.send("client ne joue pas!").then(response => { response.delete(10000) });

        player.pause();
        message.channel.send("Musique en pause...").then(response => { response.delete(10000) });

    } else {
        message.channel.send('Seul les admins peuvent utilisé cette commande').then(response => { response.delete(10000) });
    }

};