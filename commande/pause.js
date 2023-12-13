exports.run = (client, message, args) => {

    // const config = require("../config.json");

    message.delete().then(msg => console.log(`J'ai supprimé le message de ${msg.author.username},\net supprimé le message: ${msg}`)).catch(console.error);
    if (!message.member.voiceChannel) return message.channel.send('Vous devez être dans un channel vocal');

    let player = message.guild.voiceConnection.player.dispatcher
    if (!player || player.paused) return message.channel.send("client ne joue pas!");

    player.pause();
    message.channel.send("Musique en pause...");



};